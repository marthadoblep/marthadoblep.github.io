import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Certificate } from '../../models/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private firestore: AngularFirestore) { }

  getCertificates(): Observable<Certificate[]> {
    return this.firestore.collection<Certificate>('certificates').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Certificate;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}