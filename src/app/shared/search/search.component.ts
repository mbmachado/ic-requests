import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'icr-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  search: FormControl<string>;

  @Output() searchChange = new EventEmitter<string>();

  constructor() {
    this.search = new FormControl<string>('', { nonNullable: true });
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(untilDestroyed(this), debounceTime(400), distinctUntilChanged()).subscribe(value => {
      this.searchChange.emit(value);
    });
  }

  clearSearch(): void {
    this.search.reset();
  }
}
