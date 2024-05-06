import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './pages/auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { Pagina404Component } from './shared/pagina404/pagina404.component';
import { ProfesionalComponent } from './pages/quienes-somos/profesional/profesional.component';
import { OperacionesComponent } from './pages/dashboard/operaciones/operaciones.component';
import { TransaccionesComponent } from './pages/dashboard/transacciones/transacciones.component';
import { CriptomonedasComponent } from './pages/dashboard/criptomonedas/criptomonedas.component';




export const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path:"panel-control", component:DashboardComponent,
    children:[
      {path:'operaciones', component: OperacionesComponent},
      {path:'transacciones', component: TransaccionesComponent},
      {path:'criptomoneda', component: CriptomonedasComponent},
    ]
  },
  {path:"iniciar-sesion", component:IniciarSesionComponent},
  {path:"registro", component:RegistroComponent},
  {path:"quienes-somos", component:QuienesSomosComponent},
  {path:"quienes-somos/:id", component:ProfesionalComponent},
  {path:"servicios", component:ServiciosComponent},
  {path: '**', component: Pagina404Component}
];
