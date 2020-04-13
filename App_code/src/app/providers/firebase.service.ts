
 
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isAuthorized = false;
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  logiWithFirebase(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(userData =>
        resolve(userData),
        err => reject(err));
    })
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.pipe(first()).toPromise().then(userData =>
        resolve(userData),
        err => reject(err));
    })
  }

  async authorized() {
    const user = await this.isLoggedIn()
    if (user) {
      this.isAuthorized = true;
    }
  }

  createUserWithEmailAndPass(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(userData =>
        resolve(userData),
        err => reject(err));
    })
  }

  logoutFromDevice() {
    localStorage.clear();
    return this.afAuth.auth.signOut();
  }
}
