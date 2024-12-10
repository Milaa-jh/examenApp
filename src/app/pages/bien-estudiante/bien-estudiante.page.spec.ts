import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienEstudiantePage } from './bien-estudiante.page';

describe('BienEstudiantePage', () => {
  let component: BienEstudiantePage;
  let fixture: ComponentFixture<BienEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
