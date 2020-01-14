import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
id:number;
  constructor(private route: ActivatedRoute, public data:DataService) { 
    this.route.params.subscribe(parametros =>{
     console.log('RUTA PADRE');
     this.id = parametros['id'];
     console.log(this.id);
    })
  }

  ngOnInit() {

  }

}
