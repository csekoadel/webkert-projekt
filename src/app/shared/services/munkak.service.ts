import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MunkakService {
  
  collectionName = "Images";

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  loadImageMeta(metaUrl: string): Observable<Array<Image>> {
    return this.afs.collection<Image>(this.collectionName).valueChanges();
  }

  // Új kép létrehozása
  create(image: Image) {
    return this.afs.collection<Image>(this.collectionName).doc(image.id).set(image);
  }

  // Minden kép lekérése
  getAll(): Observable<Image[]> {
    return this.afs.collection<Image>(this.collectionName, ref => ref.orderBy('id', 'asc')).valueChanges();
  }

  // Kép lekérése azonosító alapján
  getById(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).valueChanges();
  }

  // Kép frissítése
  update(image: Image) {
    return this.afs.collection<Image>(this.collectionName).doc(image.id).set(image);
  }

  // Kép törlése
  delete(id: string) {
    return this.afs.collection<Image>(this.collectionName).doc(id).delete();
  }
}
