import { Component, OnDestroy, OnInit} from '@angular/core';
import { from } from 'rxjs';
import{post} from '../post.model';
import{Subscription} from 'rxjs';
import { PostsService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
//posts=[
  //{title:"first page", content:"hiiiiiiiiiii"},
  //{title:"second page", content:"hlw"},
  //{title:"third page", content:"how"},
  //{title:"fourth page", content:"who"}
//];
 posts:post[]=[];
 private postsSub: Subscription;

  constructor(public postsService:PostsService) {

   }


  ngOnInit() {
    this.posts = this.postsService.getPosts();
  this.postsSub=  this.postsService.getPostUpdateListner().subscribe((posts:post[]) =>{
this.posts=posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
