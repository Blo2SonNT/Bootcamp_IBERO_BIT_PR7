import { Component } from '@angular/core';
import { ProductoGrillaComponent } from "../templates/producto-grilla/producto-grilla.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductoGrillaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
