import { Injectable, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  spinner = inject(NgxSpinnerService);
  protected loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  // constructor() { }
  show(): void {
    this.spinner.show();
  }

  hide(): void {
    this.spinner.hide();
  }
}
