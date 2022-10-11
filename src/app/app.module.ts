import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateComponent } from './template/template.component';
import { CurdComponent } from './curd/curd.component';
import {HttpClientModule} from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"form",component:FormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    TemplateComponent,
    CurdComponent,
    ObservableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
