import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerData?: Header;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    // Nos suscribimos a los cambios de la base de datos Firestore
    this.headerService.getHeader().valueChanges().subscribe((data: Header[]) => {
      if (data && data.length > 0) {
        this.headerData = data[0];
      }
    });
  }

}