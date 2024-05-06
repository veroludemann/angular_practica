import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mensajeBienvenida:String="¡Bienvenidos"
  mensaje2:String="Es un placer tenerlos dia a dia"

}
