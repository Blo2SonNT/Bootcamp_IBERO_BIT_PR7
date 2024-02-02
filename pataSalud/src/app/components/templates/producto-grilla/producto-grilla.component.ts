import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-producto-grilla',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './producto-grilla.component.html',
    styleUrl: './producto-grilla.component.css'
})
export class ProductoGrillaComponent {
    @Input({required:true}) imagenProducto!: string
    @Input() precioProducto!: string | number
    @Input() descripcionProducto!: string

    @Output() agregarAlCarrito = new EventEmitter();


    controlProductoCarrito(){
        let dataProductoParaCarrito = {img: this.imagenProducto, des: this.descripcionProducto, precio: this.precioProducto}
        this.agregarAlCarrito.emit(dataProductoParaCarrito)
    }
}
