import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private snackBar: MatSnackBar) {}

  success(content: string): Observable<void> {
    return this.show(content, 'success');
  }

  error(content: string): Observable<void> {
    return this.show(content, 'error');
  }

  private show(content: string, type: string): Observable<void> {
    const snackBarRef = this.snackBar.open(`${content}`, 'Ok', {
      panelClass: `snack-${type}`,
    });

    return snackBarRef.onAction();
  }
}
