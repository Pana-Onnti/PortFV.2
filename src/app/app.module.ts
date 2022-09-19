import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { SkillsComponent } from './component/skills/skills.component';
import { MaterialModule } from './material.module';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { FooterComponent } from './component/footer/footer.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAssignPersonDocumentComponent } from './component/modals/modal/assign-person-document-modal';
import { ButtonAddComponent } from './component/button-add/button-add.component';
import { ButtonComponent } from './component/button/button.component';
import { ButtonDeleteComponent } from './component/button-delete/button-delete.component';
import { ButtonEditComponent } from './component/button-edit/button-edit.component';
import { HomeComponent } from './component/HOME/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectoComponent,
    FormularioComponent,
    FooterComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    ModalAssignPersonDocumentComponent,
    ButtonAddComponent,
    ButtonComponent,
    ButtonDeleteComponent,
    ButtonEditComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,




  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
