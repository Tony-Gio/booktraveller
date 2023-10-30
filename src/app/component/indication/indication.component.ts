import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookdbService } from 'src/app/service/bookdb.service';

@Component({
  selector: 'app-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent {
  country !: string;
  books : Book[] = [];
  isActive: Boolean = false;

constructor(private bookdbService : BookdbService){}

ngOnInit(){
  this.bookdbService.getCountry().subscribe((data)=>{
    // on récupère le nom du pays sélectionné
    this.country=data; 
    // on récupère les potentiels livres liés à ce pays
    this.bookdbService.getBooksByCountry(this.country.toLowerCase()).subscribe((data)=>{
      this.books=data;
    });
    //indication passe en visible
    this.isActive=(this.country)?true:false;
  })

  }

  close(){
    console.log('On ferme')
    this.isActive=false;
    this.books=[];
  }
}


