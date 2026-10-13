import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Language } from '../../models/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private firestore: AngularFirestore) { }

  getLanguages(): Observable<Language[]> {
    return this.firestore.collection<Language>('languages').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Language;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}