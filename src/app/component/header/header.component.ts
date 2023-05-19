import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() isDarkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isDarkMode: boolean = false;  
  constructor(private dataService: DataService){
    
  }
  setDarkMode(){
    this.dataService.setDarkModeStatus();
    this.isDarkMode = this.dataService.getStatusDarkMode();
    this.isDarkModeChange.emit(this.isDarkMode);
    console.log(this.isDarkMode);
    
    
  }

  

}
