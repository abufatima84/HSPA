import { Component } from '@angular/core';


@Component({
  selector: 'app-property-card',
  templateUrl:'property-card-component.html',
  // styles: ['']
  styleUrls: ['property-card-component.css'],
})
export class PropertyCardComponent{
  Property : any={
    "Id":1,
    "Name":"Birall House",
    "Type":"House",
    "Price":12000,
  }

}
