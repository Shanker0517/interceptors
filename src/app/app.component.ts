import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from './service/posts/post.service';
import { delay } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PostService, NgxSpinnerService],
})
export class AppComponent {
  title = 'interceptors';
  constructor(
    private postservice: PostService // private spinner: NgxSpinnerService
  ) {
    // this.postservice
    //   .getPosts()
    //   .pipe(delay(5000))
    //   .subscribe((postData) => {
    //     console.log(postData);
    //   });
  }
  getdata() {
    // this.spinner.show();
    this.postservice
      .getPosts()
      .pipe(delay(5000))
      .subscribe((postData) => {
        console.log(postData);
        // this.spinner.hide();
      });
  }
}
