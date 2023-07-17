import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, tap, map, withLatestFrom } from 'rxjs';

import { RequestType } from '@core/models/enums/request-type.enum';
import { CommentService } from '@core/services/data/comment.service';
import { ToastrService } from '@core/services/misc/toastr.service';
import { StepType } from '@core/models/enums/step-type.enum';
import { StepStatus } from '@core/models/enums/step-status.enum';
import { _Request } from '@core/models/request.model';
import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import * as fromDashboardSelectors from '../../../../shared/state/dashboard/dashboard.selectors';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { DetailsDialogComponent } from '../../components/details-dialog/details-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface CommentForm {
  comment: FormControl<string | null>;
}

@UntilDestroy()
@Component({
  selector: 'icr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  request$?: Observable<_Request | undefined>;
  loading$?: Observable<boolean>;

  loadingComment = false;
  form: FormGroup<CommentForm>;
  dialogRef?: DialogRef<unknown, DetailsDialogComponent>;

  private readonly inicialSteps = [
    {
      stage: StepType.Initial,
      status: StepStatus.Active,
      name: 'Aguardando',
    },
  ];

  private readonly finalSteps = [
    {
      stage: StepType.Final,
      status: StepStatus.Inactive,
      name: 'Finalizado',
    },
  ];

  steps = [
    ...this.inicialSteps,
    {
      stage: StepType.Intermediate,
      status: StepStatus.Inactive,
      name: 'Gerar Documento',
    },
    {
      stage: StepType.Intermediate,
      status: StepStatus.Inactive,
      name: 'Assinar',
    },
    ...this.finalSteps,
  ];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private toastr: ToastrService,
    private breakpointObserver: BreakpointObserver,
    private dialog: Dialog
  ) {
    this.form = new FormGroup({
      comment: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.store.dispatch(fromDashboardActions.loadRequest({ id: +params.get('id')! }));
    });

    this.request$ = this.store.select(fromDashboardSelectors.selectRequest).pipe(
      tap(request => {
        if (request) {
          switch (request.type) {
            case RequestType.WorkloadClaim:
              this.steps = [
                ...this.inicialSteps,
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Analisar',
                },
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Cadastrar',
                },
                ...this.finalSteps,
              ];
              break;
            case RequestType.InternshipTermSigning:
              this.steps = [
                {
                  stage: StepType.Initial,
                  status: StepStatus.Active,
                  name: 'Aguardando',
                },
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Assinar',
                },
                {
                  stage: StepType.Final,
                  status: StepStatus.Inactive,
                  name: 'Finalizado',
                },
              ];
              break;
            case RequestType.Question:
              this.steps = [
                {
                  stage: StepType.Initial,
                  status: StepStatus.Concluded,
                  name: 'Aguardando',
                },
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Active,
                  name: 'Atendimento',
                },
                {
                  stage: StepType.Final,
                  status: StepStatus.Inactive,
                  name: 'Finalizado',
                },
              ];
              break;
            case RequestType.EnrollmentProof:
              this.steps = [
                ...this.inicialSteps,
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Gerar Documento',
                },
                {
                  stage: StepType.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Assinar',
                },
                ...this.finalSteps,
              ];
              break;
          }
        }
      })
    );
    this.loading$ = this.store.select(fromDashboardSelectors.selectRequestLoading);

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(
        map(result => result.matches),
        withLatestFrom(this.request$),
        untilDestroyed(this)
      )
      .subscribe(([mobile, request]) => {
        if (mobile) {
          this.dialogRef = this.dialog.open(DetailsDialogComponent, {
            panelClass: 'fullscreen-dialog',
            hasBackdrop: true,
            data: request,
          });
        } else {
          if (this.dialogRef) {
            this.dialogRef.close();
          }
        }
      });
  }

  addComment(requestId: number) {
    const value = this.form.value.comment;

    if (value) {
      this.loadingComment = true;
      this.commentService.create(requestId, { value }).subscribe({
        next: comment => {
          this.loadingComment = false;
          this.form.reset({ comment: '' });
          this.store.dispatch(fromDashboardActions.createCommentSuccess({ comment }));
        },
        error: () => {
          this.loadingComment = false;
          this.toastr.error('Ocorreu um erro ao adicionar o comentário.');
        },
      });
    } else {
      this.toastr.error('O comentário não pode ser vazio.');
    }
  }
}
