import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { LastAsmComponent } from './last-asm/last-asm.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NzStatisticModule, NzGridModule, NzCardModule,NzIconModule,LastAsmComponent,NzButtonModule,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  AsmFaturadas = 3;
  totalAsm = 14;
  porcentosAsmFaturadas = 0;
  constructor() {
    this.porcentosAsmFaturadas = ((this.AsmFaturadas / this.totalAsm) * 100);
  }

  porcentoCor() {
    if (this.porcentosAsmFaturadas > 80) return { color: '#3F8600' };
    else return { color: '#D0012C' };
  }
}
