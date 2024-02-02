import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PatasaludAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4000/api/"


    constructor() { }

    getProductos(){
        return this.http.get(`${this.urlApi}/consultar-productos`)
    }
}
