import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PatasaludAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4000/api"


    constructor() { }

    getProductos(){
        return this.http.get(`${this.urlApi}/consultar-productos`)
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




}
