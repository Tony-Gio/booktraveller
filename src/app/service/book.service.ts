// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Book } from '../model/Book';
// import { MOCK_BOOKS } from '../model/BOOKS';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {
//   private countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
//   private BOOKS: Book[] = MOCK_BOOKS;
//   constructor() { }

//   getCountry(): Observable<string> {
//     console.log('get country!');
//     return this.countrySubject.asObservable();
//   }

//   setCountry(country: string) {
//     console.log('set :' + country);
//     this.countrySubject.next(country);
//   }


//   getBooksByCountry(country: string): Book[] {
//     console.log('Looking for books that take places in '+country)
//     const filteredBooks = this.BOOKS.filter((book) => book.countries.includes(country));
//     console.log('Books found :'+ filteredBooks)
//     return filteredBooks;
//   }

// }

