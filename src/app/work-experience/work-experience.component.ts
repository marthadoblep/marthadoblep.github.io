import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: WorkExperience[] = [];

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workExperienceService.getWorkExperience().subscribe(data => {
      this.workExperiences = data;
    });
  }
}