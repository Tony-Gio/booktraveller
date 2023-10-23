import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-svgmap',
  templateUrl: './svgmap.component.html',
  styleUrls: ['./svgmap.component.scss']
})
export class SvgmapComponent {
  activePathId: string | null = null;

  constructor(private bookService: BookService) { }

  display(event: MouseEvent) {
    const id = (event.target as HTMLElement).getAttribute('id');
    console.log('ID du path :', id);
    if (id != null) {
      this.bookService.setCountry(id);
    }

    // Désactive le path précédemment actif s'il y en a un
    if (this.activePathId) {
      const previousActivePath = document.getElementById(this.activePathId);
      if (previousActivePath) {
        previousActivePath.classList.remove('active-path');
      }
    }

    // Active le path cliqué
    this.activePathId = id;
    if (id != null) {
      const clickedPath = document.getElementById(id);
      if (clickedPath) {
        clickedPath.classList.add('active-path');
      }

      // Ajoute ici la logique pour afficher les détails du path cliqué ou effectuer d'autres actions.
    }


  }
}