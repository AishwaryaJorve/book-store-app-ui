import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Login } from "src/app/model/Login.model";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login;
  msg: any;
  isLoginSuccessful: boolean = false;
  token: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onClickSignUp(){
    this.isLoginSuccessful = true;
    this.router.navigate(["../signup"], { relativeTo: this.route });
  }

  onClickLogin() {
    this.isLoginSuccessful = true;
    this.loginData = this.loginForm.value;
    this.loginService.fetchTokenFromAPI(this.loginData);
    this.loginService.fetchTokenFromAPI(this.loginData).subscribe(
      (response: any) => {
        //success
        console.log(response);
        this.loginService.loginUser(response.jwt);
        this.router.navigate(["../dashboard"], { relativeTo: this.route });
      },
      (error) => {
        //error
        console.log(error);
      }
    );
  }
}

