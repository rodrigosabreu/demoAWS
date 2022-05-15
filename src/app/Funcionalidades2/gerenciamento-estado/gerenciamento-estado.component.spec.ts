import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoEstadoComponent } from './gerenciamento-estado.component';

describe('GerenciamentoEstadoComponent', () => {
  let component: GerenciamentoEstadoComponent;
  let fixture: ComponentFixture<GerenciamentoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
