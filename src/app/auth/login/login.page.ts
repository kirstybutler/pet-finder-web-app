import { Component } from '@angular/core';
import { User } from 'src/user/user';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, private fireAuth: AngularFireAuth, private router: Router) { }

  async login(user: User) {
    const result = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.router.navigate(['/tabs/tabs/tab1']);
      } else {
        alert('Username or password incorrect');
      }
  }

  signup() {
    //navigating to register root displayed in the routes array.
    this.navCtrl.navigateRoot('/register');
  }
}
