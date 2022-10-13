import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VerduleriaService } from '../servicio/verduleria.service';
import { Verduleria } from '../modelos/verduleria';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public listadoVerduras : any = [];

  constructor( private http: HttpClient, private verduService: VerduleriaService) { }

  ngOnInit() {
    this.getProductos()


  }

   getProductos(){
    this.verduService.getAllProducts().subscribe(
      response=>{
        this.listadoVerduras = response;
      }
    )
  }

  eliminarProducto(id:number){
    this.verduService.deleteProduct(id).subscribe(
      res=>{

        this.ngOnInit();
      }
    )
  }
}
