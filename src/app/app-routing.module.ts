import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ContactosComponent } from './pages/contactos/contactos.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'contactos', component: ContactosComponent},
{path: 'usuarios/:id', component: UsuariosComponent,
children: [
{path: 'nuevo', component: NuevoComponent},  
{path: 'editar', component: EditarComponent},
{path: 'detalle', component: DetalleComponent},
{path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
]},
{path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
