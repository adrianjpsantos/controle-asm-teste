import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAsmComponent } from './nova-asm.component';

describe('NovaAsmComponent', () => {
  let component: NovaAsmComponent;
  let fixture: ComponentFixture<NovaAsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaAsmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaAsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
