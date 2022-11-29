import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "postattivi",
    component: PostAttiviComponent
  },
  {
    path: "postinattivi",
    component: PostInattiviComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
