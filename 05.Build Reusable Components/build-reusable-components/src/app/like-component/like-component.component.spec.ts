import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponentComponent } from './like-component.component';

describe('LikeComponentComponent', () => {
  let component: LikeComponentComponent;
  let fixture: ComponentFixture<LikeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
