import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  constructor() { }

  obtenerProfesionales() {
    return [
    {id:1, name:"Veronica Ludemann", perfil:"Desarrollador web", photo:"assets/team/vero.webp", githubLink:"https://github.com/veroludemann", linkedinLink:"https://linkedin.com/in/veronica-ludemann"},
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
}
