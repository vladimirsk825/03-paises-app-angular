import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string='';
  hayerror: boolean = false;

  paises : Country[]=[];

 
 constructor(private paisService: PaisService){}



 buscar(termino: string){
  this.hayerror = false;
  this.termino = termino;
  this.paisService.buscarXCapital(this.termino)
                             .subscribe((paises)=>{
                              this.paises =  paises
                             },
                             (error)=>{
                                this.hayerror = true;
                             });
}

  sugerencias(evento: any){
    this.hayerror =false;
  }

}
