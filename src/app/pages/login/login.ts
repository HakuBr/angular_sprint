import { Component } from '@angular/core';
import { LoginForms } from "../../components/login-forms/login-forms";

@Component({
  selector: 'app-login',
  imports: [LoginForms],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
