import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienProfesorPage } from './bien-profesor.page';

describe('BienProfesorPage', () => {
  let component: BienProfesorPage;
  let fixture: ComponentFixture<BienProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
