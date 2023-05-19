import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { Observable } from 'rxjs';
import { isEmpty, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  option: any = '';
  /*   list:any = ['All Region','Africa', 'America', 'Asia', 'Europe', 'Oceania'];
   */
  countriesList!: Observable<any[]>;
  isDarkModes: any = false;
  countryName: string = '';
  isEmpty: boolean = false;
  isEmptyObject : boolean = false;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.countriesList = this.dataService.getAllCountries();
  }

  handleSearch() {
  

    this.countriesList = this.countriesList.pipe(
      map(countries => countries.filter((country: any) => country.name.common.toLowerCase().includes(this.countryName.toLowerCase())))
    );
    
    this.countriesList.subscribe(data => {
      if(data.length === 0){
        this.isEmptyObject = true;
      }else{
        this.isEmptyObject = false;
      }
      
    })

  }
  handleFilterBySelect($event: any) {
    this.countriesList.subscribe(data => {
      if(data.length === 0){
        this.isEmptyObject = true;
      }else{
        this.isEmptyObject = false;
      }
      
    })
    this.option = $event.target.value;
    console.log(this.option);

    if (this.option === 'All Region') {
      if (this.countryName.length > 0){
        this.countriesList = this.dataService.getAllCountries();
        this.countriesList = this.countriesList.pipe(
          map(countries => countries.filter((country: any) => country.name.common.toLowerCase().includes(this.countryName.toLowerCase())))
        );
      }else{
        this.countriesList = this.dataService.getAllCountries();

      }
    } else {
      this.countriesList = this.countriesList.pipe(
        map(countries => countries.filter((country: any) => country.region.toLowerCase().includes(this.option.toLowerCase())))
      );
    }




  }

  onDarkMode(isDarkMode: boolean) {
    this.isDarkModes = isDarkMode;
    console.log(this.isDarkModes);

  }


}
