import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecEstuPage } from './rec-estu.page';

describe('RecEstuPage', () => {
  let component: RecEstuPage;
  let fixture: ComponentFixture<RecEstuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecEstuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
