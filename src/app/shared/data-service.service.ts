import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  isDarkMode:boolean = false;

  constructor(private http: HttpClient) { }

getAllCountries(){
  return this.http.get<any>('https://restcountries.com/v3.1/all')
}    

setDarkModeStatus(){
  this.isDarkMode = !this.isDarkMode;
}

getStatusDarkMode(){
  return this.isDarkMode;
}
  
getDetailCountry(name:string){
  return this.http.get(`https://restcountries.com/v3.1/name/${name}`)
}
}
 