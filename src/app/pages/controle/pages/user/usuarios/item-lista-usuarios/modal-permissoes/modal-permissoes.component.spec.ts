import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPermissoesComponent } from './modal-permissoes.component';

describe('ModalPermissoesComponent', () => {
  let component: ModalPermissoesComponent;
  let fixture: ComponentFixture<ModalPermissoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPermissoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
