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

 
 empresa2="Google";

// NO HACE FALTA PARA HACER EL 2 WAY BINDING, LA COMENTAMOS
/*
cambiaEmpresa2(event:Event){
  this.empresa2=(<HTMLInputElement>event.target).value;
}
*/

llamaEmpresa(value:String){

}
  
  public getEdad()  {
    return this.edad
  }
  
  deshabilitacionCuadro=false;

  usuRegistrado=true;

  textoDeRegistro="No hay nadie registrado";

getRegistroUsuario(){

  this.usuRegistrado=false;
}

setUsuarioRegistrado(event:Event){
  //alert("El usuario se acaba de registrar");
  //this.textoDeRegistro="El usuario se acaba de registrar";
  //alert(event.target);

  if((<HTMLInputElement>event.target).value=="si"){

    this.textoDeRegistro="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistro="No hay nadie registrado";
  }

}


  constructor() { }

  ngOnInit(): void {
  }



}

