import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit,OnDestroy {

  constructor(private postService:PostService) { }

  private subscription:Subscription = new Subscription();

  posts:Post[]|null=null;
  ngOnInit(): void {

    this.subscription.add(
      this.postService.getPosts().subscribe({
        next:(posts:Post[])=>{
          this.posts=posts;
        },
        error:(error)=>{
          this.posts=[];
        }
      })
    )

  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
