import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Interest } from '../../models/interests.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  constructor(private firestore: AngularFirestore) { }

  getInterests(): Observable<Interest[]> {
    return this.firestore.collection<Interest>('interests').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Interest;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}