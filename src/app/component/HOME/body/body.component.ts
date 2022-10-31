import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { UploadFileModalComponent } from '../../modals/upload-file-modal/upload-file-modal.component';
import { Body } from 'src/app/model/body';
import { BodyService } from 'src/app/services/body.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component2.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  body:Body[]=[];
  toEditBody!:Body;
  toNewBody: Body = {sobreMi:"", url_foto:"", url_Foto:""};
  isLogged=false;

  constructor(private bodyServ:BodyService,
    private modalService:NgbModal,
    private tokenService:TokenService,
    private router:Router,
    private activatedRouter:ActivatedRoute
    ) {
    }

  


  ngOnInit(): void {
    this.cargarBody();
    this.tokenService.isLogged.subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
  }

  cargarBody():void{
    this.bodyServ.lista().subscribe(data=>{
      this.body = data
    });
  }

  createBody(){
    this.bodyServ.save(this.toNewBody).subscribe(
      data=>{
        this.cargarBody();
        this.toNewBody = {sobreMi : "", url_foto : "",url_Foto:""}
      }, err=>{
        console.log(err);
        alert('fallo'+err);
      }
    )
  }

  crearBody(){
    const options: NgbModalOptions = {
      windowClass: 'document-preview-modal',
      centered: true,
      size: 'xl',
    };

    const modal = this.modalService.open(UploadFileModalComponent, options);
    modal.componentInstance.field1name = "Sobre mi";
    modal.componentInstance.field2name = "Foto";
    modal.componentInstance.butttonText = "Crear";
    modal.componentInstance.field1 = this.toNewBody.sobreMi;
    modal.componentInstance.field2 = this.toNewBody.url_foto;
    modal.componentInstance.buttonFunction = this.createBody.bind(this);
    modal.componentInstance.field1Change.subscribe((receivedEntry: any) => {
      this.toNewBody.sobreMi = receivedEntry;
    });
    modal.componentInstance.field2Change.subscribe((receivedEntry: any) => {
      this.toNewBody.url_foto = receivedEntry;
      console.log(this.toNewBody.url_foto);
    });
    return modal;
  }

  updateBody(){
    this.bodyServ.update(this.toEditBody.id!, this.toEditBody).subscribe(
      data=>{
        this.cargarBody();
        this.toEditBody = {sobreMi : "", url_foto : "",url_Foto:""}
      }, err=>{
        alert("error al modificar el body, error:" + console.log(err));
      });

  }

  modificarBody(bodyToUpdate: Body){
    this.toEditBody = bodyToUpdate;
    const options: NgbModalOptions = {
      windowClass: 'document-preview-modal',
      centered: true,
      size: 'xl',
    };

    const modal = this.modalService.open(UploadFileModalComponent, options);
    modal.componentInstance.field1name = "Sobre mi";
    modal.componentInstance.field2name = "Foto";
    modal.componentInstance.butttonText = "Actualizar";
    modal.componentInstance.field1 = this.toEditBody.sobreMi
    modal.componentInstance.field2 = this.toEditBody.url_foto
    modal.componentInstance.buttonFunction = this.updateBody.bind(this);
    modal.componentInstance.field1Change.subscribe((receivedEntry: any) => {
      this.toEditBody.sobreMi = receivedEntry;
    });
    modal.componentInstance.field2Change.subscribe((receivedEntry: any) => {
      this.toEditBody.url_foto = receivedEntry;
    });
    return modal;
  }




}
//#  fileToUpload:File=null; ///
