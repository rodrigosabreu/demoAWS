import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosComponentesComponent } from './produtos-componentes.component';

describe('ProdutosComponentesComponent', () => {
  let component: ProdutosComponentesComponent;
  let fixture: ComponentFixture<ProdutosComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
