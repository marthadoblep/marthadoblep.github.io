import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificate } from '../models/certificates.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificatesList: Certificate[] = [];

  constructor(private certificatesService: CertificatesService) {}

  ngOnInit(): void {
    this.certificatesService.getCertificates().subscribe(data => {
      this.certificatesList = data;
    });
  }
}