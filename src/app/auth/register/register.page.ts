import { Component } from '@angular/core';
import { User } from 'src/user/user';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth, private router: Router, public navCtrl: NavController) { }

  async register(user: User) {
    try{
    const result = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    if (result) {
      this.router.navigate(['/tabs/tabs/tab1']);
      console.log(result);
    }
    }
    catch(e){
      console.error(e);
    }
  }

  login() {
    this.navCtrl.navigateRoot('/login');
  }
}
