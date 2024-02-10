import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosMascotasComponent } from './components/admin/productos-mascotas/productos-mascotas.component';
import { Error404Component } from './components/error404/error404.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
const tituloProyecto = "PataSalud"
export const routes: Routes = [
    { path: '', title: `Inicio | ${tituloProyecto}`, component: InicioComponent },
    { path: 'contactanos', title: `Necesitas ayuda? | ${tituloProyecto}`, component: ContactoComponent },
    { path: 'nuestros-productos', title: `Productos destacados | ${tituloProyecto}`, component: ProductosComponent },
    { path: 'ingreso', title: `Ingreso a la plataforma | ${tituloProyecto}`, component: LoginComponent },
    { path: 'admin/registro-productos', canMatch:[autenticacionGuard], title: `Registro de productos | ${tituloProyecto}`, component: ProductosMascotasComponent},
    { path: '404', title: `Error 404 | ${tituloProyecto}`, component: Error404Component},
    { path: '**', pathMatch: 'full', redirectTo: '404' }
];
