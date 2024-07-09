import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-controle',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.scss',
})
export class ControleComponent {}
