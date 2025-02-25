import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private firestore: AngularFirestore) {}

  signup(f:any) {
    let data = f.value;
   this.authService.signUp(data.email, data.password).then((user)=>{
    this.firestore.collection('users').doc(user.user?.uid).set({
      email: data.email,
      password: data.password
    }).catch(()=>{
      console.log('error')
    })
   })
}
}