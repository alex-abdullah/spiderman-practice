import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermanDetailComponent } from './spiderman-detail.component';

describe('SpidermanDetailComponent', () => {
  let component: SpidermanDetailComponent;
  let fixture: ComponentFixture<SpidermanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpidermanDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpidermanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
