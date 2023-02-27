import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/HOME/home.component";
import { IniciarSesionComponent } from "./component/iniciar-sesion/iniciar-sesion.component";


const routes : Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:IniciarSesionComponent},



];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
