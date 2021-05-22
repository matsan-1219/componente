import { Component,  } from '@angular/core';

@Component({
  selector: 'app-sandy',
  templateUrl: './sandy.component.html',
  styleUrls: ['./sandy.component.css']
})
export class SandyComponent {

public nombre:string ="Naruto";

public edad:number = 20;
get nombreMayusculas(){
  return this.nombre.toLocaleUpperCase();
}
public informacionPersonje():string{
  return `El nombre es ${this.nombre} y la edad es ${this.edad}`;
}
public cambiarPersonaje():void{
  this.nombre="Sasuke";
}

}
