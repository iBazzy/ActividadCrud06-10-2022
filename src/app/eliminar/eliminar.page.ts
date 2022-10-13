import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VerduleriaService } from '../servicio/verduleria.service';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  constructor(private http: HttpClient, private verduService: VerduleriaService) { }

  ngOnInit() {

  }



}

