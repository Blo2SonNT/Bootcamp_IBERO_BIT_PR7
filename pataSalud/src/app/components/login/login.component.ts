import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Iestudaintes } from "../../models/estudiantes.model";
import { PatasaludAPIService } from "../../services/patasalud-api.service";
import { Router } from "@angular/router";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
//ng g c components/nombre_componente
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    inputCorreo = new FormControl()
    inputClave = new FormControl()
    private productosServices = inject(PatasaludAPIService)

    constructor(private router: Router){}

    ingresoUsuario(){
        let correo = this.inputCorreo.value
        let clave = this.inputClave.value
        this.productosServices.postIngresoUsuario({correo, clave}).subscribe(data => {
            console.log(data)
            let dataApi:any = data
            sessionStorage.setItem('token', dataApi.token)
            location.reload()
            // this.router.navigate(['/admin/registro-productos'])
        }, err => {
            console.log(err)
        })
    }


    // nombre : string = "Fulano"
    // boton:boolean = false
    // correo:string = "hola@correo2.com"

    // estudiantes = signal<Iestudaintes[]>([
    //     {id: 1, nombre:"Miguel", apellido: "nieto", edad: 85, mascotas:true },
    //     {id: 2, nombre:"Paula", apellido: "perez", edad: 12, mascotas:false },
    //     {id: 3, nombre:"Juan", apellido: "ruiz", edad: 45, mascotas:true },
    //     {id: 4, nombre:"Pedro", apellido: "molina", edad: 76, mascotas:true },
    //     {id: 5, nombre:"Maria", apellido: "lozano", edad: 1, mascotas:false },
    //     {id: 6, nombre:"Jose", apellido: "porky", edad: 666, mascotas:false },
    //     {id: 7, nombre:"Thomas", apellido: "petrosky", edad: 45, mascotas:true }
    // ])


    // atr_nombreSignal = signal("Juan")
    // lenguaje = signal("PYTHON")


    // //reactiveFormsModule independiente
    // colorInput = new FormControl()

    // anchoCaja = new FormControl('50', {
    //     validators: [
    //         Validators.required,
    //         Validators.min(50),
    //     ]
    // })

    // valor: any =""

    // constructor(){
    //     this.colorInput.valueChanges.subscribe(value => {
    //         console.log(value)
    //     })
    // }


    // cambiarAnchoCaja(){
    //     console.log((this.anchoCaja.valid));
    //     if(this.anchoCaja.valid){
    //         console.log("Entro")
    //         this.valor = this.anchoCaja.value
    //         this.anchoCaja.setValue(this.valor)
    //     }
    // }


    // clickSaludo(){
    //     console.log(this.lenguaje());

    //     alert("Saludando....")
    //     this.lenguaje.set("JS")
    //     console.log(this.lenguaje());

    //     // this.atr_nombreSignal.update("sdsa")
    // }

    // capturarValor(event: Event){
    //     const valorInput = event.target as HTMLInputElement
    //     console.log(valorInput.value);
    //     const valoresActualizados = {
    //         id: 8,
    //         nombre: valorInput.value,
    //         apellido: "perez",
    //         edad: 73,
    //         mascotas: true
    //     }
    //     this.agregarEstudiante(valoresActualizados)
    //     console.log(this.estudiantes())

    // }


    // agregarEstudiante(nombre:any){
    //     this.estudiantes.update(estadoAntiguo => [...estadoAntiguo, nombre])
    // }

}
