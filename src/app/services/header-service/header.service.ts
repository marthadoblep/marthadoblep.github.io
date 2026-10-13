import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header } from '../../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private dbPath = '/header';
  headerRef: AngularFirestoreCollection<Header>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  // Método para obtener los documentos de la colección 'header'
  getHeader(): AngularFirestoreCollection<Header> {
    return this.headerRef;
  }
}