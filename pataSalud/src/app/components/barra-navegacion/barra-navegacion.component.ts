import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatasaludAPIService } from "../../services/patasalud-api.service";

@Component({
    selector: 'navbarNegocio',
    standalone: true,
    imports: [
        RouterLink,
        CommonModule
    ],
    templateUrl: './barra-navegacion.component.html',
    styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
    private productosServices = inject(PatasaludAPIService)
    ingreso:boolean = false
    ngOnInit(){
        this.ingreso = this.productosServices.estaLogueado()
    }
}
