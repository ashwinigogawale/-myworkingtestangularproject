import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { PostsService } from '../../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
newpost="";
newpost1="";
enteredcontent="";
enteredtitle="";
enteredvalue='';

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
  }
onAddpost(form:NgForm){
  if(form.invalid){
    return ;
  }

this.postsService.addPost(form.value.title,form.value.content);
form.resetForm();
}
save(postInput:HTMLTextAreaElement){
  this.newpost=postInput.value;

}
}
