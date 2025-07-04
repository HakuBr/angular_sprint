import { Component, inject } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { BoasVindas } from "../../components/boas-vindas/boas-vindas";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Menu, BoasVindas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  router = inject(Router)

  logout(){
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
