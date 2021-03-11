import { style } from '@angular/animations';
import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data: any;
  

  constructor() { }

  ngOnInit(): void {

    fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    this.data = json;
  })}

  getColor(population: any){
    if (population >= 10000000) {
      return 'red';
    }
  }
/*
  getButton(population: any){
    if (population >= 10000000){
      return 'btn-danger';    
    }
    else
      return 'btn-primary';
  }
*/

}

 

  
  


