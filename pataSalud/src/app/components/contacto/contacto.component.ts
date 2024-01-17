import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css'
})
export class ContactoComponent {

    contactoForm: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexNumericos = /^[0-9]+$/


    constructor(private fb: FormBuilder){
        this.contactoForm = this.fb.group({
            nombre: ['', [ Validators.required, Validators.pattern(this.regexAlfabetico) ]],
            correo: ['', [Validators.required, Validators.minLength(6)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
            nombre_mascota: ['', [ Validators.required, Validators.pattern(this.regexAlfabetico) ]]
        })
    }

    registrarContacto(){
        console.log(this.contactoForm);
    }

}
