import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { BookdbService } from 'src/app/service/bookdb.service';

@Component({
  selector: 'app-svgmap',
  templateUrl: './svgmap.component.html',
  styleUrls: ['./svgmap.component.scss']
})
export class SvgmapComponent implements AfterViewInit {
  activePathId: string | null = null;

  constructor(private bookdbService: BookdbService,
    private elementRef: ElementRef) { }

    // on récupère le nom de tous les pays dans la SVG
    ngAfterViewInit() {
      const svgElement = this.elementRef.nativeElement.querySelector('#Layer_1');
      const elementsAvecID = svgElement.querySelectorAll('[id]');
      const tableauIDs = Array.from(elementsAvecID).map((element: any) => element.id);
      console.log(tableauIDs);
    }

  // on récupère l'id de la dalle du SVG 
  display(event: MouseEvent) {
    const id = (event.target as HTMLElement).getAttribute('id');
    console.log('ID du path :', id);
    if (id != null) {
      this.bookdbService.setCountry(id);
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