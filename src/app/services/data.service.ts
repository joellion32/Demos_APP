import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
usuarios:any = [];
contacto:any;
  constructor(private http:HttpClient) { }

  Usuarios(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data =>{
    this.usuarios = data;
    console.log(this.usuarios);   
    });
    
  }

  Detalle(id:number){
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(data=>{
     this.contacto = data;
     console.log(this.contacto);
    });
  }
}
