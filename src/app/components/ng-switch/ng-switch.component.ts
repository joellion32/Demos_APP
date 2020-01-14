import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

alerta:string = "danger";
  constructor() {
   }

  ngOnInit() {
  }


  cambiar(color:string){
    this.alerta = color;
    console.log(this.alerta);
  }
}
