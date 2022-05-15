import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCep2Component } from './consulta-cep2.component';

describe('ConsultaCep2Component', () => {
  let component: ConsultaCep2Component;
  let fixture: ComponentFixture<ConsultaCep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
