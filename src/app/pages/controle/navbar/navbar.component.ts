import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuItemComponent, NzMenuModule } from 'ng-zorro-antd/menu';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzIconModule,NzMenuModule,NzAvatarModule,RouterLink,NzDropDownModule,FormsModule,NzInputModule,NzButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  numeroAsm = ""

  constructor(private router: Router){}

  rotaDaAsm(){
    this.router.navigate(["controle","asm",this.numeroAsm])
  }
}
