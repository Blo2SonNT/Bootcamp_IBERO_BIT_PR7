import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Iestudaintes } from "../../models/estudiantes.model";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    nombre : string = "Fulano"
    boton:boolean = false
    correo:string = "hola@correo2.com"

    estudiantes = signal<Iestudaintes[]>([
        {id: 1, nombre:"Miguel", apellido: "nieto", edad: 85, mascotas:true },
        {id: 2, nombre:"Paula", apellido: "perez", edad: 12, mascotas:false },
        {id: 3, nombre:"Juan", apellido: "ruiz", edad: 45, mascotas:true },
        {id: 4, nombre:"Pedro", apellido: "molina", edad: 76, mascotas:true },
        {id: 5, nombre:"Maria", apellido: "lozano", edad: 1, mascotas:false },
        {id: 6, nombre:"Jose", apellido: "porky", edad: 666, mascotas:false },
        {id: 7, nombre:"Thomas", apellido: "petrosky", edad: 45, mascotas:true }
    ])


    atr_nombreSignal = signal("Juan")
    lenguaje = signal("PYTHON")

    clickSaludo(){
        console.log(this.lenguaje());

        alert("Saludando....")
        this.lenguaje.set("JS")
        console.log(this.lenguaje());

        // this.atr_nombreSignal.update("sdsa")
    }

    capturarValor(event: Event){
        const valorInput = event.target as HTMLInputElement
        console.log(valorInput.value);
        const valoresActualizados = {
            id: 8,
            nombre: valorInput.value,
            apellido: "perez",
            edad: 73,
            mascotas: true
        }
        this.agregarEstudiante(valoresActualizados)
        console.log(this.estudiantes())

    }


    agregarEstudiante(nombre:any){
        this.estudiantes.update(estadoAntiguo => [...estadoAntiguo, nombre])
    }

}
