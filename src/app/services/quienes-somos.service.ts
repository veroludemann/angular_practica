import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

Observable
HttpClient



@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {
  url: string= "http://localhost:3000/profesionals";

  // profesionalList:Profesional[]=[];
  constructor(private http:HttpClient) { }

  obtenerProfesionales(): Observable<any> {

    return this.http.get(this.url);
                            //NO VA MAS 2
    // this.profesionalList.push (new Profesional (1, "Veronica Ludemann", "Desarrollador web", "assets/team/vero.webp"));
    // this.profesionalList.push (new Profesional (1, "Diego Guzman", "Desarrollador web", "assets/team/die.webp"));
    // this.profesionalList.push (new Profesional (1, "Nicolas Luna", "Desarrollador web", "assets/team/nico.webp"));

                            // NO VA MAS 1
    //return [
    // {id:1, name:"Veronica Ludemann", perfil:"Desarrollador web", photo:"assets/team/vero.webp", githubLink:"https://github.com/veroludemann", linkedinLink:"https://linkedin.com/in/veronica-ludemann"},
    // {id:2, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/die.webp"},
    // {id:3, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/gi.webp"},
    // {id:4, name:"Federico Gonzales", perfil:"Desarrollador web", photo:"assets/team/nico.webp"},
    // {id:5, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/lucas.webp"},
    // {id:6, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/jime.webp"},
    // {id:7, name:"Federico Gonzales", perfil:"Desarrollador web", photo:"assets/team/javi.webp"},
    // {id:8, name:"Diana Lopez", perfil:"Desarrollador web", photo:"assets/team/nico.webp"},
    // {id:9, name:"Joaquin Aguirre", perfil:"Diseñador", photo:"assets/team/nico.webp"},
    // ];
  }
}
