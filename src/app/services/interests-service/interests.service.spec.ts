import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';

import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  let service: InterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ]
    });
    service = TestBed.inject(InterestsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});