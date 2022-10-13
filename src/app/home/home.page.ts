import { Component } from '@angular/core';
import {Verduleria} from '../modelos/verduleria';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  InfoVerduleria!:Verduleria[];
  constructor() {}


  ngOnInit() {

  }
  displayColums: string[]=["id","verdura","valor","stock","lugarObtencion"]
}
