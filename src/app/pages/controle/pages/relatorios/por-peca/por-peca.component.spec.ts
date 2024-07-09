import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPecaComponent } from './por-peca.component';

describe('PorPecaComponent', () => {
  let component: PorPecaComponent;
  let fixture: ComponentFixture<PorPecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorPecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
