import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentrepriseComponent } from './rentreprise.component';

describe('RentrepriseComponent', () => {
  let component: RentrepriseComponent;
  let fixture: ComponentFixture<RentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
