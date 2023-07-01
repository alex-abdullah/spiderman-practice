import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermanSearchComponent } from './spiderman-search.component';

describe('SpidermanSearchComponent', () => {
  let component: SpidermanSearchComponent;
  let fixture: ComponentFixture<SpidermanSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpidermanSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpidermanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
