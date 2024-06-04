import { Component, AfterViewInit } from '@angular/core';
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
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent implements AfterViewInit {
  title = 'interceptors';

  constructor(private postService: PostService) {}
  ngAfterViewInit(): void {
    this.getData();
  }
  getData() {
    this.postService.getPosts().subscribe((postData) => {
      console.log(postData);
    });
  }
}
