import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WorkExperience } from '../../models/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: AngularFirestore) { }

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.firestore.collection<WorkExperience>('work-experience').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as WorkExperience;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}