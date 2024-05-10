import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArlistaService {

  constructor(private firestore: AngularFirestore) { }

  createArlista(arlista: any) {
    return this.firestore.collection('arlista').add(arlista);
  }

  // Árlista lekérése
  getArlista(): Observable<any[]> {
    return this.firestore.collection('arlista', ref => ref.orderBy('ar', 'asc')).valueChanges();
  }

  // Árlista frissítése
  updateArlista(id: string, arlista: any) {
    return this.firestore.collection('arlista').doc(id).update(arlista);
  }

  // Árlista törlése
  deleteArlista(id: string) {
    return this.firestore.collection('arlista').doc(id).delete();
  }
}

