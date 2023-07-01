import { Component, OnInit } from '@angular/core';
import { Spiderman } from '../spiderman';
import { SpidermanService } from '../spiderman.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  spidermen: Spiderman[] = [];

  constructor(private spidermanService: SpidermanService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.spidermanService
      .getSpidermen()
      .subscribe((spidermen) => (this.spidermen = spidermen.slice(1, 5)));
  }
}
