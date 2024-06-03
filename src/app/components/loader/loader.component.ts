import { Component } from '@angular/core';
import { LoadingService } from '../../service/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  providers: [LoadingService],
})
export class LoaderComponent {
  constructor(protected loadingService: LoadingService) {}
  stopLoader() {
    this.loadingService.hide();
  }
}
