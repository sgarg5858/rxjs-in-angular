import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(public postService:PostService) { }

  posts$:Observable<Post[]> | null=null;

  ngOnInit(): void {
  this.posts$ =  this.postService.getPosts();
  }
 

}
