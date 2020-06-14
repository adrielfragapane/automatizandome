import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  carouselImagenes: String[] = [
    '../../../assets/img/carouselHome1.jpg',
    '../../../assets/img/carouselHome2.jpg',
    '../../../assets/img/carouselHome3.jpg'
  ] 

  tareasTitulos: String[] = [
    'ENVÍOS DE MAILS',
    'MANIPULACIÓN DE DOCUMENTOS',
    'CONTROLES Y SEGUIMIENTO',
    'CÁLCULOS',
    'TRANSACCIONES',
    'BASE DE DATOS'
  ];

  tareasTextos : String[] = [
    'Internos y externos',
    'Generarlos, descargarlos, subirlos, modificarlos, etc.',
    'Alarmas, monitorización, notificaciones, etc.',
    'Cálculos matemáticos y estadísticos',
    'Implementación de plataformas de pago',
    'Almacenamiento y manipulación de información'
  ];

  serviciosTitulos: String[] = [
    'ARQUITECTURA',
    'MEDICINA',
    'INDUSTRIA',
    'ECONOMÍA',
    'ADMINISTRACIÓN',
    'ALIMENTOS'
  ]

  serviciosImagenes: String[] = [
    '../../../assets/img/servicesArchitecture.jpg',
    '../../../assets/img/servicesMedicine.jpg',
    '../../../assets/img/servicesIndustry.jpg',
    '../../../assets/img/servicesEconomy.jpg',
    '../../../assets/img/servicesOffice.jpg',
    '../../../assets/img/servicesFood.jpg'
  ]

  beneficiosTitulos: String[] = [
    'FULL TIME',
    'FACIL ACCESO',
    'AHORRO DE TIEMPO',
    'AHORRO DE DINERO',
    'REDUCCIÓN DE ERRORES',
    'ESTANDARIZACIÓN'
  ]

  beneficiosTextos: String[] = [
    'Disponibilidad 24hs, 365 días',
    'Disponibilidad en cualquier lugar',
    'Las máquinas son más rápidas que los humanos',
    'Si se ahorra tiempo, se ahorra dinero',
    'Posibles errores por distracción o desconocimiento',
    'Garantiza obtener siempre el mismo resulado'
  ]

  constructor() { }

  ngOnInit(): void {

    

  }
}
