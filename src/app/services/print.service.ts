import { ElementRef, Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  constructor() {}

  async printDiv(selector: string): Promise<string> {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error('Element not found');
    }
    const canvas = await html2canvas(element as HTMLElement);
    return canvas.toDataURL('image/png');
  }
}
