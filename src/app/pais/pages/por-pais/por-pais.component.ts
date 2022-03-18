import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string='';
  hayerror: boolean = false;

  paises : Country[]=[];

  buscar(termino: string){
    this.hayerror = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
                               .subscribe((paises)=>{
                                this.paises =  paises
                               },
                               (error)=>{
                                  this.hayerror = true;
                               });
  }
 constructor(private paisService: PaisService){}

}
