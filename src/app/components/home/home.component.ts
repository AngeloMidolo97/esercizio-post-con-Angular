import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import * as postSrv from '../../services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  post: Post[] = [];
  constructor() {
    postSrv.getPost().then(post => this.post = post)
  }

  ngOnInit(): void {
  }

}
