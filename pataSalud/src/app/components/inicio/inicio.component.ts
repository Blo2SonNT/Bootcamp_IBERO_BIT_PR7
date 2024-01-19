import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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


    constructor(private renderer: Renderer2){}

    mostrarOtraImagen(){
        console.log(this.imagenGrilla1);

        this.renderer.setAttribute(this.imagenGrilla1.nativeElement, 'src', 'assets/img/productos/3.png')
    }

}
