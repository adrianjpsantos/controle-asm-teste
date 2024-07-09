import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAsmComponent } from './last-asm.component';

describe('LastAsmComponent', () => {
  let component: LastAsmComponent;
  let fixture: ComponentFixture<LastAsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastAsmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
