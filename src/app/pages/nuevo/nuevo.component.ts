import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  id:number;
  constructor(private route: ActivatedRoute, public data:DataService) { 
    this.route.parent.params.subscribe(parametros =>{
     console.log('RUTA HIJA');
     this.id = parametros['id'];
     this.data.Detalle(this.id);
    })
  }

  ngOnInit() {
   
  }

}
