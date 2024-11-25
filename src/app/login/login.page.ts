import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,RouterLink]
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  // async login() {
  //   try {
  //     await this.authService.login(this.email, this.password);
  //     console.log('Login successful!');
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // }
}

