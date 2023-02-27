import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdiplomeComponent } from './rdiplome.component';

describe('RdiplomeComponent', () => {
  let component: RdiplomeComponent;
  let fixture: ComponentFixture<RdiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdiplomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
