import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookdbService {
  private countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http : HttpClient) { }

  public url='http://localhost:8080/books';


  // 2 Fonctions pour récupérer le nom du pays en fonction du clics
  getCountry(): Observable<string> {
    console.log('get country!');
    return this.countrySubject.asObservable();
  }

  setCountry(country: string) {
    console.log('set :' + country);
    this.countrySubject.next(country);
  }

// Fonction pour récupérer liste de livres lié au pays ci-dessus
  getBooksByCountry(country: string): Observable<Book[]> {
    console.log('Looking for books that take places in '+country)
    return this.http.get<Book[]>(this.url+"/country/"+country);
  }

}
