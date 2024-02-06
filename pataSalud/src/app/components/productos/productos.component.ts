import { Component, inject, signal } from '@angular/core';
import { ProductoGrillaComponent } from "../templates/producto-grilla/producto-grilla.component";

import { PatasaludAPIService } from "../../services/patasalud-api.service";

@Component({
    selector: 'app-productos',
    standalone: true,
    imports: [ProductoGrillaComponent],
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css'
})
export class ProductosComponent {

    listaCategorias = signal([
        { id: 1, nombre: 'Juguetes' },
        { id: 2, nombre: 'Comidas secas' },
        { id: 3, nombre: 'Comidas humedas' },
        { id: 4, nombre: 'Snacks' },
        { id: 5, nombre: 'Aseo' },
        { id: 6, nombre: 'Accesorios' },
        { id: 7, nombre: 'Medicamentos' },
    ])

    // productosData = signal([
    //     {img: "https://www.alfaveterinaria.es/cache/a/2/4/8/7/a24874d07709cb19fde50ed818cd10c9be3cb387.jpg", precio: 85000, desc: "Cama para perro mediana"},
    //     {img: "assets/img/productos/2.png", precio: 43500, desc: "Hueso de ule"},
    //     {img: "assets/img/productos/3.png", precio: 125000, desc: "Catnip para gato drogadicto"},
    //     {img: "assets/img/productos/4.png", precio: 72000, desc: "Juguete de aventuras Peq."},
    //     {img: "assets/img/productos/5.png", precio: 85000, desc: "Agility Gold - comida seca"},
    //     {img: "assets/img/productos/6.png", precio: 35000, desc: "Cascabeles para gato"},
    // ])


    productosData = signal<any>([])
    private productosServices = inject(PatasaludAPIService)

    ngOnInit(){
        this.productosServices.getProductos().subscribe({
            next: (productos) => {
                this.productosData.set(productos)
                console.log(this.productosData());

            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    changeCategoria(event: Event){
        const valorInput = event.target as HTMLInputElement
        console.log(valorInput.value);
        this.productosServices.postProductosXCategoria(valorInput.value).subscribe({
            next: (productos) => {
                this.productosData.set(productos)
                console.log("-----------> "+this.productosData());

            },
            error: (err) => {
                console.log(err);
            }
        })
    }


    productoDesdeMiHijo(event: string){
        console.log("Alumbrame bien chingada madre")
        console.log(event);
    }



}
