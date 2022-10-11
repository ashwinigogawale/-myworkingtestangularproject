import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/posts-create/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule}from '@angular/material/button';
import{MatExpansionModule} from '@angular/material/expansion';
import{HeaderComponent} from './header/header.component';
import { from } from 'rxjs';
import { PostListComponent } from './posts/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
HeaderComponent,
PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
