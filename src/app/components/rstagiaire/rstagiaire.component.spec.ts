import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstagiaireComponent } from './rstagiaire.component';

describe('RstagiaireComponent', () => {
  let component: RstagiaireComponent;
  let fixture: ComponentFixture<RstagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RstagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
