import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardDetalheComponent } from './produto-card-detalhe.component';

describe('ProdutoCardDetalheComponent', () => {
  let component: ProdutoCardDetalheComponent;
  let fixture: ComponentFixture<ProdutoCardDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCardDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCardDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
