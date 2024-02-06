import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { PatasaludAPIService } from '../../../services/patasalud-api.service';
import Swal from 'sweetalert2'
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
    formProductos: FormGroup
    regexNumericos = /^[0-9]+$/
    regexUrl = /^https?:\/\/\w+(\.\w+)+(\/[a-zA-Z0-9_.~-]+)*(\/[a-zA-Z0-9_.~-]+\.[a-zA-Z]+)?$/

    private productosServices = inject(PatasaludAPIService)

    listaDeProductosActuales = signal<any>([])
    listaCategorias = signal([
        { id: 1, nombre: 'Juguetes' },
        { id: 2, nombre: 'Comidas secas' },
        { id: 3, nombre: 'Comidas humedas' },
        { id: 4, nombre: 'Snacks' },
        { id: 5, nombre: 'Aseo' },
        { id: 6, nombre: 'Accesorios' },
        { id: 7, nombre: 'Medicamentos' },
    ])

    inputHiddenID = new FormControl()

    constructor(private fb: FormBuilder) {
        this.formProductos = this.fb.group({
            nombre: ['', [Validators.required]],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
            img: ['https://via.placeholder.com/400x400', [Validators.required, Validators.pattern(this.regexUrl)]],
            descripcion: ['', [Validators.required, Validators.minLength(15)]],
            categoria: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {
        this.consultarProductos()
        console.log('Se inicio el componente')
    }

    ngOnChanges(): void {
    }
    submitForm() {
        console.log(this.inputHiddenID.value);
        if (this.inputHiddenID.value == null || this.inputHiddenID.value == '') {
            console.log("Entro en crear");
            this.productosServices.postProducto(this.formProductos.value).subscribe(respuestaAPI => {
                Swal.fire({
                    title: "Producto agregado correctamente! 😁",
                    icon: "success"
                });
            })
        } else {
            console.log("Entro en actualizar");
            this.productosServices.putProducto(this.inputHiddenID.value, this.formProductos.value).subscribe(respuestaAPI => {
                Swal.fire({
                    title: "Producto actualizado correctamente!",
                    icon: "success"
                });
            })
        }
        // this.consultarProductos()
        setTimeout(() => {
            location.reload()
        }, 2000);
    }

    consultarProductos() {
        this.productosServices.getProductos().subscribe({
            next: (productos) => {
                console.log(productos)
                this.listaDeProductosActuales.set(productos)
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    eliminarProducto(idProducto: string, nombre: string) {
        let mensaje = ""
        if (nombre == undefined || nombre == null) {
            mensaje = `Tenga en cuenta que al eliminar este producto no se podrá restablecer`
        } else {
            mensaje = `Tenga en cuenta que al eliminar ${nombre}, no se podrá restablecer`
        }
        Swal.fire({
            title: "¿Estás seguro que quieres eliminar este producto?",
            icon: "question",
            text: mensaje,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "No, cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.productosServices.deleteProducto(idProducto).subscribe({
                    next: (productos) => {
                        Swal.fire({
                            title: "Producto eliminado correctamente!",
                            icon: "success"
                        });
                        this.consultarProductos()
                    },
                    error: (err) => {
                        console.log(err);
                    }
                })
            }
        })
    }


    editarProducto(idProducto: string) {
        this.productosServices.getProducto(idProducto).subscribe({
            next: (producto) => {
                let dataProducto: any = producto

                if (dataProducto.nombre == null) {
                    dataProducto.nombre = ""
                }
                if (dataProducto.descripcion == null) {
                    dataProducto.descripcion = ""
                }
                if (dataProducto.categoria == null) {
                    dataProducto.categoria = ""
                }

                this.formProductos.setValue({
                    nombre: dataProducto.nombre,
                    precio: dataProducto.precio,
                    img: dataProducto.img,
                    descripcion: dataProducto.descripcion,
                    categoria: dataProducto.categoria,
                })

                this.inputHiddenID.setValue(dataProducto._id)
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

}
