import { Component } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  Error: string = '';
  constructor(private sa:AuthService, private route:Router) {}
  login(f : any) {
    let data = f.value;
    this.sa.signIn(data.email, data.password)
      .then(() => {
        this.route.navigate(['/']);
      })
      .catch(() => {
        this.Error = 'Invalid email or password';
      })
  }

 
}
