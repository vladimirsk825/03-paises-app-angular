import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }  
  `
  ]
})
export class PorRegionComponent  {

  regiones: string[]=["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string='';
  paises: Country[]=[];
  hayerror: boolean= false;
  
  constructor(private paisService: PaisService ) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva? 'btn btn-primary' : 'btn-outline-primary')
  }
  activarRegion(region: string){
    if (this.regionActiva === region) {
      return;
    }
    this.hayerror = false;
    this.regionActiva = region;
    this.paisService.buscarXRegion(region).subscribe(paises => {
      this.paises= paises;
    }, (error)=>{
      this.hayerror= true;
    });

    
  }

}
