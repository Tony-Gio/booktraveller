import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent {
  country !: string;
  books : Book[] = [];
  isActive: Boolean = false;

constructor(private bookService : BookService){}

ngOnInit(){
  this.bookService.getCountry().subscribe((data)=>{
    // on récupère le nom du pays sélectionné
    this.country=data; 
    // on récupère les potentiels livres liés à ce pays
    this.books=this.bookService.getBooksByCountry(this.country.toLowerCase());
    //indication passe en visible
    this.isActive=(this.country)?true:false;
  })

  }

  close(){
    console.log('On ferme')
    this.isActive=false;
  }
}


