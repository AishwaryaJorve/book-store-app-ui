import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AmexioLayoutModule, AmexioWidgetModule } from "amexio-ng-extensions";
import {
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioMapModule
} from "amexio-ng-extensions";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { BooksService } from './service/books.service';
import { AddBookComponent } from './components/add-book/add-book.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { UpdateBookComponent } from './components/show-books/update-book/update-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    ShowBooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    ErrorPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AmexioLayoutModule,
    ReactiveFormsModule,
    TranslocoRootModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
