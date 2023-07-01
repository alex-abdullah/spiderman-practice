import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermenComponent } from './spidermen.component';

describe('SpidermenComponent', () => {
  let component: SpidermenComponent;
  let fixture: ComponentFixture<SpidermenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpidermenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpidermenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
