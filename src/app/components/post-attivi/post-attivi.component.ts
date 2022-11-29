import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postSrv from '../../services/post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  post: Post[] = [];
  constructor() {
    postSrv.getPost().then(post => this.post = post.filter(posts => posts.active))
  }

  ngOnInit(): void {
    }
  }
