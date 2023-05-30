import { DialogRef } from '@angular/cdk/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { RequestType } from '../../../../../../@core/models/enums/request-type.enum';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface RequestTypeForm {
  requestType: FormControl<RequestType>;
}

@UntilDestroy()
@Component({
  selector: 'icr-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss'],
})
export class RequestDialogComponent implements OnInit {
  @ViewChild('stepper', { static: true }) stepper?: MatStepper;

  requestTypeForm: FormGroup<RequestTypeForm>;

  readonly requestTypes = Object.values(RequestType);

  constructor(public dialogRef: DialogRef<string>, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.requestTypeForm = this.formBuilder.nonNullable.group({
      requestType: [RequestType.EnrollmentProof, [Validators.required]],
    });
  }

  ngOnInit() {
    const requestType = new URLSearchParams(window.location.search).get('type') as unknown as RequestType;

    if (this.requestTypes.includes(requestType) && this.stepper) {
      this.stepper.selectedIndex = 1;
      this.requestTypeForm.setValue({ requestType });
    }
  }

  get requestType(): AbstractControl | null {
    return this.requestTypeForm.get('requestType');
  }

  onClose() {
    this.dialogRef.close();
  }
}
