import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-barra-navegacion',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './barra-navegacion.component.html',
    styleUrl: './barra-navegacion.component.css'
})

/*
// ANGULAR 16 o inferiores
@Component({
	selector: 'app-crear-producto',
	templateUrl: './crear-producto.component.html',
	styleUrls: ['./crear-producto.component.css']
})
*/
export class BarraNavegacionComponent {

}
