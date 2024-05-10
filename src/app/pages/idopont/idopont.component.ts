import { Component } from '@angular/core';
import { IdopontService } from '../../shared/services/idopont.service';

@Component({
  selector: 'app-idopont',
  templateUrl: './idopont.component.html',
  styleUrls: ['./idopont.component.scss']
})
export class IdopontComponent {
  nev: string = '';
  datum: Date = new Date();
  valasztas: string = '';
  lehetosegek: string[] = ['ÉpítésS', 'ÉpítésM', 'ÉpítésL','TöltésS','TöltésM','TöltésL','Müköröm eltávolítás','Gél lakk','Gél lak erősítéssel','Gél lak eltávolítás'];

  constructor(private idopontService: IdopontService) { }

  foglal() {
    if (this.nev && this.datum && this.valasztas) {
      this.idopontService.foglalIdopont(this.nev, this.datum, this.valasztas);
      alert("Sikeres foglalás. Várlak sok szeretettel :)");
    } else {
      alert("Hiányos adatok, nem lehet foglalni.");
    }
  }
}
