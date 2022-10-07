import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: any;


  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    this.tokenService.isLogged.subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
  }

  onLogOut():void{
    this.tokenService.logOut();
  }


  
}

