import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorAsmComponent } from './por-asm.component';

describe('PorAsmComponent', () => {
  let component: PorAsmComponent;
  let fixture: ComponentFixture<PorAsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorAsmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PorAsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
