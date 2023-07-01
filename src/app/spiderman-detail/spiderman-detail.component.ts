import { Component, Input } from '@angular/core';
import { Spiderman } from '../spiderman';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpidermanService } from '../spiderman.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spiderman-detail',
  templateUrl: './spiderman-detail.component.html',
  styleUrls: ['./spiderman-detail.component.scss'],
})
export class SpidermanDetailComponent {
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private spidermanService: SpidermanService
  ) {}

  @Input() spiderman?: Spiderman; // gets its value from the selectedSpiderman variable defined in parent component

  ngOnInit(): void {
    this.getSpidermen();
  }

  getSpidermen(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spidermanService
      .getSpiderman(id)
      .subscribe((spiderman) => (this.spiderman = spiderman));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.spiderman) {
      this.spidermanService
        .updateSpiderman(this.spiderman)
        .subscribe(() => this.goBack());
    }
  }
}
