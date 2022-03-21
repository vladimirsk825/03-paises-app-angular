import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  `
  li {
    cursor: pointer;
  }
  `
  ]
})
export class PorPaisComponent  {

  termino: string='';
  hayerror: boolean = false;

  paises : Country[]=[];
  paisesSugeridos : Country[]=[];

 
 constructor(private paisService: PaisService){}



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

  sugerencias(termino: any){
    this.hayerror =false;

    this.paisService.buscarPais(termino)
                    .subscribe(
                      paises => this.paisesSugeridos = paises.splice(0,5),
                      (err)=>this.paisesSugeridos  = []
                    
                    
                    )

  }
}
