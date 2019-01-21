import { Component, OnInit } from '@angular/core';
import { User } from 'src/user/user';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  user = {} as User;

  constructor(public navCtrl: NavController, private router: Router) { }

  logout() {
    this.router.navigate(['login']);
  }
}
