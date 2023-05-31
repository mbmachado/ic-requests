import { DialogRef } from '@angular/cdk/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RequestType } from '../../../../../../@core/models/enums/request-type.enum';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestTypePipe } from '../../../../../../shared/pipes/request-type.pipe';
import { RequestService } from '../../../../../../@core/services/data/request.service';
import { ToastrService } from '../../../../../../@core/services/misc/toastr.service';

interface RequestTypeForm {
  requestType: FormControl<RequestType>;
}

interface RequestDataForm {
  title: FormControl<string>;
  details: FormControl<string>;
  attachments: FormControl<string[]>;
}

@UntilDestroy()
@Component({
  selector: 'icr-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss'],
})
export class RequestDialogComponent implements OnInit {
  @ViewChild('stepper', { static: true }) stepper?: MatStepper;

  loading = false;

  requestTypeForm: FormGroup<RequestTypeForm>;
  requestDataForm: FormGroup<RequestDataForm>;

  readonly requestTypeEnum = RequestType;
  readonly requestTypes = Object.values(RequestType);

  constructor(
    public dialogRef: DialogRef<string>,
    private requestTypeFormatter: RequestTypePipe,
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private toastrService: ToastrService
  ) {
    this.requestTypeForm = this.formBuilder.nonNullable.group({
      requestType: [RequestType.EnrollmentProof, [Validators.required]],
    });

    this.requestDataForm = this.formBuilder.nonNullable.group({
      title: [this.requestTypeFormatter.transform(RequestType.EnrollmentProof)],
      details: [''],
      attachments: [[]],
    }) as unknown as FormGroup<RequestDataForm>;
  }

  ngOnInit() {
    this.requestTypeForm.valueChanges.pipe(untilDestroyed(this)).subscribe(({ requestType }) => {
      if (!requestType) {
        return;
      }

      this.requestDataForm.get('title')?.setValue(this.requestTypeFormatter.transform(requestType));
    });

    const requestType = new URLSearchParams(window.location.search).get('type') as unknown as RequestType;

    if (this.requestTypes.includes(requestType) && this.stepper) {
      this.stepper.selectedIndex = 1;
      this.requestTypeForm.setValue({ requestType });
    }
  }

  get title(): AbstractControl | null {
    return this.requestDataForm.get('title');
  }

  get details(): AbstractControl | null {
    return this.requestDataForm.get('details');
  }

  get attachments(): AbstractControl | null {
    return this.requestDataForm.get('attachments');
  }

  get requestType(): AbstractControl | null {
    return this.requestTypeForm.get('requestType');
  }

  onSubmit() {
    this.loading = true;
    this.requestService
      .create({
        type: this.requestType?.value,
        ...this.requestDataForm.getRawValue(),
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.toastrService.success('Solicitação criada com sucesso!');
          this.dialogRef.close();
        },
        error: (error: Error) => {
          this.loading = false;
          this.toastrService.error(error.message);
        },
      });
  }

  onClose() {
    this.dialogRef.close();
  }

  getDeatilsPlaceholder(): string {
    switch (this.requestType?.value) {
      case RequestType.EnrollmentProof:
        return 'Observações sobre o pedido de compravante de matrícula';
      case RequestType.InternshipTermSigning:
        return 'Observações sobre o pedido de assinatura de termo de estágio';
      case RequestType.WorkloadClaim:
        return 'Grupo/eixo, nome da atividade, carga horária a aproveitar';
      case RequestType.Question:
        return 'Observações sobre a pergunta';
      default:
        return '';
    }
  }
}
