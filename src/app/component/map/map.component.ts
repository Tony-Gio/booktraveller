import { Component, HostListener } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookdbService } from 'src/app/service/bookdb.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  country !: string;
  books : Book[] = [];
  isVisible: Boolean = false;


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
      this.isVisible=(this.country)?true:false;
    })
  }

  close(){
    console.log('On ferme')
    this.isVisible=false;
    this.books=[];
  }


  @HostListener('document:keydown.escape', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log('Touche pressée : ', event.key);

    if (event.key === 'Escape') {
      this.close();
    }
}
}
