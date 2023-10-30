import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/app/model/COUNTRIES';
import { BookdbService } from 'src/app/service/bookdb.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
countries: string[] = COUNTRIES.sort((a, b) => a.localeCompare(b));
country!: any;

constructor(private bookdbService : BookdbService){}

  ngOnInit(): void {
    // this.countries=this.bookdbService.countries;
  }

  // selectCountry(country: string){
  //   this.bookdbService.setCountry(this.country);
  // }

  onChange(selectedValue: string) {
    console.log('Pays sélectionné : ', selectedValue);
    this.bookdbService.setCountry(selectedValue);
  }

}
