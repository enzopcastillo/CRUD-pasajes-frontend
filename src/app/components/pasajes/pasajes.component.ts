import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css']
})
export class PasajesComponent implements OnInit {
  pasajes: Array<Pasaje>;
  pasaje: Pasaje;
  editar: string = 'false';
  
  constructor(private pasajeService: PasajeService) {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.cargarPasajes();
  }

  ngOnInit(): void {}

  agregarPasaje(form: NgForm){
    this.pasajeService.addPasaje(this.pasaje);
    this.pasaje = new Pasaje;
    form.resetForm();
  }

  cargarPasajes(){
    this.pasajes = this.pasajeService.getPasajes();
  }

  actualizarPasaje(form: NgForm){
    this.pasajeService.editPasaje(this.pasaje);
    form.resetForm();
    this.editar = 'false';
  }

  eliminarPasaje(pasaje: Pasaje){
    this.pasajeService.deletePasaje(pasaje);
  }

  select(pasaje: Pasaje){
    let varPasaje: Pasaje = new Pasaje();
    Object.assign(varPasaje, pasaje);
    this.pasaje = varPasaje;
    this.editar = 'true';
  }

  reset(form: NgForm){
    form.resetForm();
    this.editar = 'false';
  }
}
