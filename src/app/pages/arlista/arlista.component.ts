import { Component } from '@angular/core';
import { ArlistaService } from '../../shared/services/arlista.service';

@Component({
  selector: 'app-arlista',
  templateUrl: './arlista.component.html',
  styleUrl: './arlista.component.scss'
})
export class ArlistaComponent {
  feladatok!: any[];
  ujFeladat!: string;

  constructor(private firestoreService: ArlistaService) { }

  ngOnInit(): void {
    this.firestoreService.getArlista().subscribe(feladatok => {
      this.feladatok = feladatok;
    });
  }

  feladatHozzaadasa() {
    if (this.ujFeladat) {
      this.firestoreService.createArlista({nev: this.ujFeladat, ar: 0}).then(() => {
        this.ujFeladat = '';
      });
    }
  }

  feladatTorlese(index: number) {
    const feladatId = this.feladatok[index].id; // Ha van egyedi azonosítója a feladatoknak
    this.firestoreService.deleteArlista(feladatId);
  }
}
