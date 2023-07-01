import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Spiderman } from '../spiderman';
import { SpidermanService } from '../spiderman.service';

@Component({
  selector: 'app-spiderman-search',
  templateUrl: './spiderman-search.component.html',
  styleUrls: ['./spiderman-search.component.scss'],
})
export class SpidermanSearchComponent implements OnInit {
  spidermen$!: Observable<Spiderman[]>;
  private searchTerms = new Subject<string>();

  constructor(private spidermanService: SpidermanService) {}

  //Push a search term into the observable stream

  ngOnInit(): void {
    this.spidermen$ = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term

      distinctUntilChanged(),

      //switch to new search observable each time the term changes
      switchMap((term: string) => this.spidermanService.searchSpiderman(term))

      // !!!BIG NOTE!!! => You will notice that the spidermen$ observable is never subscribed to. This is because it is handled by the async | pipe in this component's template
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
