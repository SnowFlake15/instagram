import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ButtonComponent } from './components/button/button.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAppComponent } from './components/get-app/get-app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './post.service';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ButtonComponent,
    SignUpComponent,
    GetAppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
