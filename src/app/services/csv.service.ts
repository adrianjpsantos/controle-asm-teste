import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  exportToCsv(data: any[], fileName: string): void {
    const csv = Papa.unparse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`${fileName} is ready for download.`);
  }

  importFromCsv(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        const parsedData = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true
        }).data;
        resolve(parsedData);
      };
      reader.onerror = error => reject(error);
      reader.readAsText(file);
    });
  }
}
