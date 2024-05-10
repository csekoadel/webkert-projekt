import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { Observable } from 'rxjs';
import { MunkakService} from '../../shared/services/munkak.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-munkak',
  templateUrl: './munkak.component.html',
  styleUrls: ['./munkak.component.scss']
})
export class MunkakComponent implements OnInit {
  images$!: Observable<Image[]>;

  constructor(private munkakservice: MunkakService) { }

  ngOnInit(): void {
    this.images$ = this.munkakservice.getAll();
  
    this.images$.subscribe({
      next: (images) => {
        console.log('Images:', images);
      },
      error: (error) => {
        console.error('Error fetching images:', error);
      }
    });
  }
}
