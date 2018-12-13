import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { SummaryPipe } from './summary.pipe';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService} from "./data.service";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'blog/create',
    component: BlogCreateComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemImageComponent,
    BlogItemTextComponent,
    BlogItemDetailComponent,
    SummaryPipe,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
