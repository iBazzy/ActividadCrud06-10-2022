import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { VerduleriaService } from '../servicio/verduleria.service';
import { Verduleria } from '../modelos/verduleria';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  productos  : Verduleria
  productoNuevo:Verduleria={id:'',verdura:'',valor:'',stock:'',lugarObtencion:''}

  constructor( private http : HttpClient, private builder:FormBuilder, private verduService: VerduleriaService) { }

  ngOnInit() {
    this.guardarProduct2();
  }


  guardarProduct2(){
    this.verduService.crearProduct(this.productoNuevo).subscribe(res =>{
      console.log(res);
    },error=>{
      console.log(error);
    }
      )
  }

}
