import { Coordenada } from './coordenada';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { icon, latLng, LeafletMouseEvent, Marker, marker, tileLayer, Icon } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  capas: Marker<any>[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  @Input() coordenadasIniciales: Coordenada[]=[];
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 16,
    center: latLng(-12.069646334293447, -77.03591823577882)
  };

  ngOnInit(): void {
    this.capas = [];
    this.capas.push(marker([0, 0],{
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      }),
      }));
  }

  manejarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud , longitud});

    this.capas = [];
    this.capas.push(marker([latitud, longitud],{
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      }),
      })
    );
    this.coordenadaSeleccionada.emit({latitud: latitud, longitud: longitud });
  }

}
