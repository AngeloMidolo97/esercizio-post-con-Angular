import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postSrv from '../../services/post.service'

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
  post: Post[] = [];
  constructor() {
    postSrv.getPost().then(post => this.post = post.filter(posts => !posts.active))
  }

  ngOnInit(): void {
  }

}
