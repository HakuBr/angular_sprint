import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  router = inject(Router)

  gotoDashboard(){
    this.router.navigate(["/dashboard"])
  }

}
