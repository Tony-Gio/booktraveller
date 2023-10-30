import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookdbService } from 'src/app/service/bookdb.service';

@Component({
  selector: 'app-hiddenpanel',
  templateUrl: './hiddenpanel.component.html',
  styleUrls: ['./hiddenpanel.component.scss']
})
export class HiddenpanelComponent {
  country !: string;
  books : Book[] = [];
  isVisible: Boolean = false;
  index : number=0;


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
  }

  next(){
    if (this.index<this.books.length-1){
          this.index++;
    }else{
      this.index=0;
    }
  }

  previous(){
    if (this.index>0)
    {
    this.index--;
    }else{
      this.index=this.books.length-1;
    }
  }
}
