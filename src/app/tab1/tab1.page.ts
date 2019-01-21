import { Component } from '@angular/core';
import * as fetchJsonp from 'fetch-jsonp';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ngOnInit() {
    const petForm = document.querySelector('#pet-form');
    petForm.addEventListener('submit', getAnimals);
  }
}

function getAnimals(e) {
  e.preventDefault();
  const animal = (<HTMLInputElement>document.querySelector('#animal')).value;
  const location = (<HTMLInputElement>document.querySelector('#location')).value;

    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=9fd1ab9c063fde769aa0a2be2852ed03&animal=${animal}&location=${location}`, {
    })
        .then(res => res.json())
        .then(data => showAnimals(data.petfinder.pets.pet))
        .catch(err => showAlert());

        console.log(animal);
}

function showAnimals(pets) {
  const results = document.querySelector('#results');
  console.log(pets);
  //Clear first
  results.innerHTML = '';
  //Loop through Pets

  pets.forEach((pet) => {
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-6');
        div.innerHTML = `
            <div class="row">
                <div class="col-sm-6">
                    <h4>${pet.name.$t} (${pet.age.$t}) </h4>
                    ${pet.breeds.breed.$t ? `<p class="text-secondary"> ${pet.breeds.breed.$t}</p>` : ``}
                    ${pet.contact.address1.$t ? `<p ${ pet.contact.address1.$t }</p>` : ``}
                    <p>${pet.contact.city.$t} ${pet.contact.state.$t} ${pet.contact.zip.$t}</p>
                </div>
                <div class="col-sm-4 text-center">
                    <img class="img-fluid rounded mt-2" src="${pet.media.photos.photo[2].$t}">
                </div>
                <div class="col-sm-2 text-center mt-3">
                  <button ion-button icon-only style="background-color: white;" (click)="addToFavourites()">
                  <ion-icon name="heart" size="large" *ngIf="color" [color]="color"></ion-icon>
                  </button>
                </div>
            </div>
      `;
      //if (pet == null) {
      //  showAlert();
      //} else {
      results.appendChild(div);
    
  })
}
function showAlert() {
  alert('No results found, please ammend search criteria and try again.');
}
