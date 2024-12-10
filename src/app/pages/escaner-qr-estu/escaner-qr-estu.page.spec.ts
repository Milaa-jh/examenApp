import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanerQrEstuPage } from './escaner-qr-estu.page';

describe('EscanerQrEstuPage', () => {
  let component: EscanerQrEstuPage;
  let fixture: ComponentFixture<EscanerQrEstuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanerQrEstuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
