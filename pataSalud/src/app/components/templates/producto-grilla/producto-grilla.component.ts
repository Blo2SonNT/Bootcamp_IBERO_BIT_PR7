import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-producto-grilla',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './producto-grilla.component.html',
    styleUrl: './producto-grilla.component.css'
})
export class ProductoGrillaComponent {
    @Input({required:true}) imagenProducto!: string
    @Input() precioProducto!: string
    @Input() descripcionProducto!: string
}
