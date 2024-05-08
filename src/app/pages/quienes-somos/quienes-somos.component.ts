import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  // arreglo
  // ARREGLAR ESTE QUILOMBO DESPUES

  profesionalList: {id: number, name:string, perfil:string, photo:string}[]=[
    {id:1, name:"Veronica Ludemann", perfil:"Desarrollador web", photo:"assets/team/vero.webp"},
    {id:2, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/die.webp"},
    {id:3, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/gi.webp"},
    {id:4, name:"Federico Gonzales", perfil:"Desarrollador web", photo:"assets/team/nico.webp"},
    {id:5, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/lucas.webp"},
    {id:6, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/jime.webp"},
    {id:7, name:"Federico Gonzales", perfil:"Desarrollador web", photo:"assets/team/javi.webp"},
    {id:8, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/nico.webp"},
    {id:9, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/nico.webp"},

  ];

}
