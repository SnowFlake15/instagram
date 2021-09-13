import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts =[];
  constructor(private _postSevice: PostService) { }

  ngOnInit(): void {
    this._postSevice.getPosts()
    .subscribe(data => this.posts = data);
  }

}
