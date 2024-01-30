import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild, signal } from '@angular/core';

@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css'
})
export class InicioComponent {

    @ViewChild('imagen1') imagenGrilla1!:ElementRef


    productosDestacados = signal([
        {ruta: "assets/img/productos/1.jpg", desc: "Imagen de un producto 1"},
        {ruta: "assets/img/productos/2.png", desc: "Imagen de un producto 2"},
        {ruta: "assets/img/productos/3.png", desc: "Imagen de un producto 3"},
        {ruta: "assets/img/productos/4.png", desc: "Imagen de un producto 4"},
        {ruta: "assets/img/productos/5.png", desc: "Imagen de un producto 5"},
        {ruta: "assets/img/productos/6.png", desc: "Imagen de un producto 6"},
    ])


    constructor(private renderer: Renderer2){}

    mostrarOtraImagen(){
        console.log(this.imagenGrilla1);

        this.renderer.setAttribute(this.imagenGrilla1.nativeElement, 'src', 'assets/img/productos/3.png')
    }

}
