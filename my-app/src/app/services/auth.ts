import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User | null>;

  constructor(private fa: AngularFireAuth) {
    this.user = this.fa.user;
  }

  signUp(email: string, password: string) {
    return this.fa.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Handle successful sign-up
        return userCredential;
      })
      .catch(error => {
        console.error("Error during sign-up:", error);
        throw error; // Rethrow the error for further handling
      });
  }

  signIn(email: string, password: string) {
    return this.fa.signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error("Error during sign-in:", error);
        throw error; // Rethrow the error for further handling
      });
  }
}