import { NzIconModule } from 'ng-zorro-antd/icon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PrintService } from '../../../../services/print.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-asm',
  standalone: true,
  imports: [NzCardModule, NzIconModule,NzButtonModule],
  templateUrl: './asm.component.html',
  styleUrl: './asm.component.scss',
})
export class AsmComponent {
  constructor(private printService: PrintService) {}

  async printSection() {
    const selector = '#print-asm';
    let screenshotUrl: string = "";
    try {
      screenshotUrl = await this.printService.printDiv(selector);

      if (screenshotUrl) {
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (printWindow) {
          printWindow.document.write(`
            <html>
              <head>
                <title>Print Screenshot</title>
              </head>
              <body>
                <img src="${screenshotUrl}" alt="Screenshot" style="width: 100%;">
              </body>
            </html>
          `);
          printWindow.document.close();
          printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
          };
        }
      } else {
        console.error('No screenshot to print');
      }

    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  }
}
