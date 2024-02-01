import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-productos-mascotas',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl: './productos-mascotas.component.html',
    styleUrl: './productos-mascotas.component.css'
})
export class ProductosMascotasComponent {
    formProductos : FormGroup
    regexNumericos = /^[0-9]+$/
    regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/

    constructor(private fb: FormBuilder){
        this.formProductos = this.fb.group({
            nombre: ['', [Validators.required]],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
            imagen: ['https://via.placeholder.com/400x400', [Validators.required, Validators.pattern(this.regexUrl) ]],
            descripcion:['', [Validators.required, Validators.minLength(15)]]
        })
    }

    ngOnInit():void{
        console.log('Se inicio el componente')
    }

    // ngOnChanges():void{

    // }
    submitForm(){
        console.log(this.formProductos)
    }
}
