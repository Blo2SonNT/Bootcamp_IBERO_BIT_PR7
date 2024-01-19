import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
const tituloProyecto = "PataSalud"
export const routes: Routes = [
    { path: '', title: `Inicio | ${tituloProyecto}`, component: InicioComponent },
    { path: 'contactanos', title: `Necesitas ayuda? | ${tituloProyecto}`, component: ContactoComponent },
    { path: 'nuestros-productos', title: `Productos destacados | ${tituloProyecto}`, component: ProductosComponent },
    { path: 'ingreso', title: `Ingreso a la plataforma | ${tituloProyecto}`, component: LoginComponent }

];
