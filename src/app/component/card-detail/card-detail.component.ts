import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  countriesList!:Observable<any[]>;
  country:any  = {};
  name:any = '';
  currencies:any = '';
  result:any = '';
  title:any = '';
  isDarkMode:boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    
    this.name = this.route.snapshot.paramMap.get('country');
    
    this.countriesList = this.dataService.getAllCountries();
    this.country = this.dataService.getDetailCountry(this.name);
    this.country.subscribe((data:any) => {
      this.currencies = data[0].currencies.EUR.name;
    })
    
    
    
  }

  onDarkMode($event:any){
    this.isDarkMode = $event;
  }

}
