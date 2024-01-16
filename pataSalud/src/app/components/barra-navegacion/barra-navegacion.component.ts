import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

}
