import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Idopont } from '../models/Idopont'; 

@Injectable({
  providedIn: 'root'
})
export class IdopontService {

  constructor(private firestore: AngularFirestore) { }

  foglalIdopont(nev: string, datum: Date, valasztas: string): void {
    const idopont: Idopont = {nev, idopont: datum, mit: valasztas };
    this.firestore.collection('idopontok').add(idopont)
      .then(() => {
        console.log('Időpont sikeresen foglalva:', idopont);
      })
      .catch((error) => {
        console.error('Hiba történt az időpont foglalása során:', error);
      });
  }

  collectionName = 'Idopontok'; // Kollekció neve


  // Új időpont létrehozása
  create(idopont: Idopont) {
    return this.firestore.collection<Idopont>(this.collectionName).doc().set(idopont);
  }

  // Minden időpont lekérése
  getAll() {
    return this.firestore.collection<Idopont>(this.collectionName).valueChanges();
  }

  // Időpont lekérése azonosító alapján
  getById(id: string) {
    return this.firestore.collection<Idopont>(this.collectionName).doc(id).valueChanges();
  }

  update(idopont: Idopont) {
    return this.firestore.collection<Idopont>(this.collectionName).doc().set(idopont);
  }


  delete(id: string) {
    return this.firestore.collection<Idopont>(this.collectionName).doc(id).delete();
  }
}
