import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PatasaludAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4000/api"


    constructor() { }

    getProductos(){
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/consultar-productos`, {headers})
    }

    getProducto(idProducto: string){
        return this.http.get(`${this.urlApi}/consultar-producto/${idProducto}`)
    }

    postProductosXCategoria(categoria:string){
        return this.http.post(`${this.urlApi}/consulta-x-categoria`, {categoria})
    }

    postProducto(dataProducto:any){
        return this.http.post(`${this.urlApi}/crear-producto`, dataProducto)
    }

    deleteProducto(idProducto:string){
        return this.http.delete(`${this.urlApi}/eliminar-producto/${idProducto}`)
    }

    putProducto(idProducto:string, dataProducto:any){
        return this.http.put(`${this.urlApi}/actualizar-producto/${idProducto}`, dataProducto)
    }

    estaLogueado() : boolean{
        let estado = (sessionStorage.getItem('token')) ? true : false
        return estado
    }

    postIngresoUsuario(dataLogin:any){
        return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
    }


}
