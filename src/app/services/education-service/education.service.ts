import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Education } from '../../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private firestore: AngularFirestore) { }

  getEducation(): Observable<Education[]> {
    return this.firestore.collection<Education>('education').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Education;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}