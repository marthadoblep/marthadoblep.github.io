import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skill } from '../models/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skillsList = data;
    });
  }
}