import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as fetchJsonp from 'fetch-jsonp';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

constructor(public navCtrl: NavController) {}

  ngOnInit() {
    const shelterForm = document.querySelector('#shelter-form');
    shelterForm.addEventListener('submit', getShelters);
  }
}


  function getShelters(e) {
  e.preventDefault();
  const shelter = (<HTMLInputElement>document.querySelector('#shelter')).value;

  fetchJsonp(`http://api.petfinder.com/shelter.find?format=json&key=9fd1ab9c063fde769aa0a2be2852ed03&location=${shelter}`, {
  })

  .then(res => res.json())
  .then(data => showShelters(data.petfinder.shelters.shelter))
  .catch(err => console.log(err));
}

  function showShelters(shelters) {
  const results = document.querySelector('#shelterResults');
  console.log(shelters);
  //Clear first
  results.innerHTML = '';
  //Loop through Pets
  shelters.forEach((shelter) => {
    const div = document.createElement('div');
    div.classList.add('card', 'card-body');
    div.innerHTML = `
    <div class="row">
      <div class="col-sm-12">
        <h3>${shelter.name.$t} (${shelter.id.$t})</h3>
        ${shelter.state.$t ? `<p class="text-secondary"> <b>ZIP: </b> ${shelter.zip.$t}</p>` : ``}
        ${shelter.city.$t ? `<p ${ shelter.country.$t }</p>` : ``}
        <p><b>Email: </b> ${shelter.email.$t} <br /> <b>Phone: </b>${shelter.phone.$t} </p>
      </div>

    </div>
    `;
    results.appendChild(div);
  })
}
