import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDialogComponent } from './empresa-dialog.component';

describe('EmpresaDialogComponent', () => {
  let component: EmpresaDialogComponent;
  let fixture: ComponentFixture<EmpresaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaDialogComponent]
    });
    fixture = TestBed.createComponent(EmpresaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
