import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes: Array<Pasaje>;

  constructor() {
    this.pasajes = new Array<Pasaje>();
    this.pasajes = [
      {
        id: 1,
        dniPasajero: 50500500,
        categoriaPasajero: 'Menor',
        fechaCompra: "2022-05-31",
        precioPasaje: 1500,
      },
      {
        id: 2,
        dniPasajero: 35035000,
        categoriaPasajero: 'Adulto',
        fechaCompra: "2022-06-05",
        precioPasaje: 3000,
      },
      {
        id: 3,
        dniPasajero: 12012120,
        categoriaPasajero: 'Jubilado',
        fechaCompra: "2022-06-01",
        precioPasaje: 1200,
      },
    ]
  }

  addPasaje(pasaje: Pasaje){
    pasaje.id = this.getID();
    this.pasajes.push(pasaje);
  }

  getPasajes(): Array<Pasaje>{
    return this.pasajes;
  }

  editPasaje(pasaje: Pasaje){
    let oldPasaje = this.pasajes.find(x=>x.id === pasaje.id);
    oldPasaje.dniPasajero = pasaje.dniPasajero;
    oldPasaje.categoriaPasajero = pasaje.categoriaPasajero;
    oldPasaje.fechaCompra = pasaje.fechaCompra;
    oldPasaje.precioPasaje = pasaje.precioPasaje;
  }

  deletePasaje(pasaje: Pasaje){
    let indice: number = this.pasajes.findIndex(x=>(x.id == pasaje.id));
    this.pasajes.splice(indice, 1);
  }

  getID():number{
    var pasajeID: number = 0;
    for (var i = 0; i < this.pasajes.length; i++){
      if(pasajeID < this.pasajes[i].id){
        pasajeID = this.pasajes[i].id;
      }
    };
    return (pasajeID + 1);
  }
}
