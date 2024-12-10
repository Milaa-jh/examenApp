import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecProfPage } from './rec-prof.page';

describe('RecProfPage', () => {
  let component: RecProfPage;
  let fixture: ComponentFixture<RecProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
