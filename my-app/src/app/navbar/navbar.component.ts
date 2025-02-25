import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isUser:any
  isMenuActive = false;
  constructor(private af:AngularFireAuth, private Route:Router, private sa:AuthService) {
    this.sa.user.subscribe(user => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
  }
  logout() {
    this.af.signOut().then(() => {
      console.log('logged out');
      this.Route.navigate(['/signin']);
    });
  }
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
  closeMenu() {
    this.isMenuActive = false;
  }

}
