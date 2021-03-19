import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { ShowBooksComponent } from "./components/show-books/show-books.component";
import { UpdateBookComponent } from "./components/show-books/update-book/update-book.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AuthGuard } from "./service/auth.guard";

const appRoutes: Routes = [
  {
    path: "updatebook/:id",
    component: UpdateBookComponent,
    pathMatch: "full",
  },
  {
    path: "showbooks",
    component: ShowBooksComponent,
    pathMatch: "full",
    canActivate:[AuthGuard],
  },
  {
    path: "addbook",
    component: AddBookComponent,
    pathMatch: "full",
    canActivate:[AuthGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full",
    canActivate:[AuthGuard],
  },
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "signup",
    component: SignUpComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  { path: "error-page", component: ErrorPageComponent },
  {
    path: "**",
    redirectTo: "error-page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
