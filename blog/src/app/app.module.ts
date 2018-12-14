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
import {BlogItemDetailComponent} from './components/blog-item-detail/blog-item-detail.component';
import {SummaryPipe} from './summary.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from "./data.service";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {TextFormatDirective} from './directives/text-format.directive';
import {BlogCreateComponent} from './components/blog-create/blog-create.component';
import {AuthServiceService} from "./services/auth-service.service";
import {DataServiceService} from "./services/data-service.service";
import {AdminGuardGuard} from "./services/admin-guard.guard";
import {AuthInterceptor} from './services/auth/auth.interceptor';
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


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
    canActivate: [AdminGuardGuard],
    data: {state: 'admin'}
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
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singup',
    component: SignupComponent,
  },

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
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, AuthServiceService, DataServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
