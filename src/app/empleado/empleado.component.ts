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

