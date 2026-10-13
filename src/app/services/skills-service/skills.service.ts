import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Skill } from '../../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private firestore: AngularFirestore) { }

  getSkills(): Observable<Skill[]> {
    return this.firestore.collection<Skill>('skills').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Skill;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}