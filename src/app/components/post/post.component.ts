import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public posts = [];
  public post ;
  userId;
  id;
  title;
  body;
  constructor(
    private _postSevice: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      const postId = value.get('id');
      this._postSevice.gePostId(postId).subscribe(post => {
        this.post = post;
        this.title = this.post.title
        this.userId = this.post.userId
        this.body = this.post.body
        this.id = this.post.id
        });
      });
    
  }
}
