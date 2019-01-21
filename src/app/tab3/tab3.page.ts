import { Component } from '@angular/core';
import * as fetchJsonp from 'fetch-jsonp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ngOnInit() {
    getAnimals();
  }

  constructor(private router: Router) {

  }

  reload() {
    //this.router.navigate(['/tabs/tabs/tab3']);
    console.log('ghjk');
    this.ngOnInit();
  }
}

function getAnimals() {

    fetchJsonp(`http://api.petfinder.com/pet.getRandom?format=json&key=9fd1ab9c063fde769aa0a2be2852ed03&output=basic`, {
    })
        .then(res => res.json())
        .then(data => showAnimals(data.petfinder.pet))
        .catch(err => showAlert());

}

function showAnimals(pet) {
  const resultsRandom = document.querySelector('#random-results');
  console.log(pet);
  //Clear first
  resultsRandom.innerHTML = '';
  //Loop through Pets

    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-6');
        div.innerHTML = `
            <div class="card" style="width: 25rem;" style="margin: 0 auto;">
              <img class="card-img-top img-fluid" src="${pet.media.photos.photo[2].$t}" >
              <div class="card-body">
                <h5 class="card-title">${pet.name.$t} (${pet.age.$t})</h5>
                <p class="card-details">${pet.breeds.breed.$t ? `<p class="text-secondary"> ${pet.breeds.breed.$t}</p>` : ``}
                  ${pet.contact.address1.$t ? `<p ${ pet.contact.address1.$t }</p>` : ``} </p>
                <p>${pet.contact.city.$t} ${pet.contact.state.$t} ${pet.contact.zip.$t}</p>
                <p class="card-text">${pet.description.$t}</p>
              </div>
            </div>
      `;
      resultsRandom.appendChild(div);
    ;
}
function showAlert() {
  alert('No results found, please ammend search criteria and try again.');
}
