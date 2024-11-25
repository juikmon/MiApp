import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule,RouterLink,CommonModule, FormsModule, IonicModule],
})
export class AppComponent {
  constructor(private router: Router) {}

  register() {
    this.router.navigate(['register']);
    console.log("register");
  }
  login() {
    this.router.navigate(['login']);
    console.log("login");
  }
}

