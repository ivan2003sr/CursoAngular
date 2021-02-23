import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:blue;"]
})
export class EmpleadoComponent implements OnInit {

 // nombre="Iván";

  apellido="Aguilar";

  private edad=32;

 // empresa="Edemsa";
llamaEmpresa(value:String){

}
  
  public getEdad()  {
    return this.edad
  }
  
  habilitacionCuadro=false;

  usuRegistrado=true;

getRegistroUsuario(){

  this.usuRegistrado=true;
}


  constructor() { }

  ngOnInit(): void {
  }



}

