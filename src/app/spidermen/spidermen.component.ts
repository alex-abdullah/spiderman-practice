import { Component } from '@angular/core';
import { Spiderman } from '../spiderman';
import { SpidermanService } from '../spiderman.service';

@Component({
  selector: 'app-spidermen',
  templateUrl: './spidermen.component.html',
  styleUrls: ['./spidermen.component.scss'],
})
export class SpidermenComponent {
  constructor(private spidermanService: SpidermanService) {}

  ngOnInit(): void {
    this.getSpidermen();
  }

  spiderVerse: Spiderman[] = [];

  getSpidermen(): void {
    this.spidermanService
      .getSpidermen()
      .subscribe((spidermen) => (this.spiderVerse = spidermen));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.spidermanService
      .addSpiderman({ name } as Spiderman)
      .subscribe((spiderman) => {
        this.spiderVerse.push(spiderman);
      });
  }

  delete(spiderman: Spiderman): void {
    this.spiderVerse = this.spiderVerse.filter(
      (spidey) => spidey !== spiderman
    );
    this.spidermanService.deleteSpiderman(spiderman.id).subscribe();
  }
}
