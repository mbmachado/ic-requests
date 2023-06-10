import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Comment } from '../../../../../../@core/models/comment.model';

@Component({
  selector: 'icr-comment',
  templateUrl: './comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input() comment!: Comment;
}
