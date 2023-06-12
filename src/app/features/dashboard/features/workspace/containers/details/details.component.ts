import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, tap } from 'rxjs';

import { RequestType } from '@core/models/enums/request-type.enum';
import { CommentService } from '@core/services/data/comment.service';
import { ToastrService } from '@core/services/misc/toastr.service';
import { StepStage } from '@core/models/enums/step-stage.enum';
import { StepStatus } from '@core/models/enums/step-status.enum';
import { _Request } from '@core/models/request.model';
import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import * as fromDashboardSelectors from '../../../../shared/state/dashboard/dashboard.selectors';

interface CommentForm {
  comment: FormControl<string | null>;
}
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

  private readonly inicialSteps = [
    {
      stage: StepStage.Initial,
      status: StepStatus.Active,
      name: 'Aguardando',
    },
  ];

  private readonly finalSteps = [
    {
      stage: StepStage.Final,
      status: StepStatus.Inactive,
      name: 'Finalizado',
    },
  ];

  steps = [
    ...this.inicialSteps,
    {
      stage: StepStage.Intermediate,
      status: StepStatus.Inactive,
      name: 'Gerar Documento',
    },
    {
      stage: StepStage.Intermediate,
      status: StepStatus.Inactive,
      name: 'Assinar',
    },
    ...this.finalSteps,
  ];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private toastr: ToastrService
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
                  stage: StepStage.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Analisar',
                },
                {
                  stage: StepStage.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Cadastrar',
                },
                ...this.finalSteps,
              ];
              break;
            case RequestType.InternshipTermSigning:
              this.steps = [
                {
                  stage: StepStage.Initial,
                  status: StepStatus.Active,
                  name: 'Aguardando',
                },
                {
                  stage: StepStage.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Assinar',
                },
                {
                  stage: StepStage.Final,
                  status: StepStatus.Inactive,
                  name: 'Finalizado',
                },
              ];
              break;
            case RequestType.Question:
              this.steps = [
                {
                  stage: StepStage.Initial,
                  status: StepStatus.Concluded,
                  name: 'Aguardando',
                },
                {
                  stage: StepStage.Intermediate,
                  status: StepStatus.Active,
                  name: 'Atendimento',
                },
                {
                  stage: StepStage.Final,
                  status: StepStatus.Inactive,
                  name: 'Finalizado',
                },
              ];
              break;
            case RequestType.EnrollmentProof:
              this.steps = [
                ...this.inicialSteps,
                {
                  stage: StepStage.Intermediate,
                  status: StepStatus.Inactive,
                  name: 'Gerar Documento',
                },
                {
                  stage: StepStage.Intermediate,
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
