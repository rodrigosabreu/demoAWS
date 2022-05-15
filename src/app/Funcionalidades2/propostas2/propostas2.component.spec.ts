import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propostas2Component } from './propostas2.component';

describe('Propostas2Component', () => {
  let component: Propostas2Component;
  let fixture: ComponentFixture<Propostas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Propostas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Propostas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
