import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        title: 'PETVITALITY | Veterinaria especializada',
        component: InicioComponent
    },
    {
        path: 'productos-veterianrios',
        title: 'Productos destacados | PETVITALITY',
        component: ProductosComponent
    },
    {
        path: 'ayuda',
        title: 'Envianos tu mensaje | PETVITALITY',
        component: ContactoComponent
    }
];
