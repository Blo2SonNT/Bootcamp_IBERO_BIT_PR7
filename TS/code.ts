console.log("Prueba")

let texto:string = "hola, soy un texto peye"
let numero:number = 123
let boleano:boolean = true
let todo:any = ""
let transmilleno:any[] = ["asd", 23, true]

let estructura: [string, boolean, string, number] = ["asd", true, "asd", 12]
let estructura2: [number, boolean][] = [[12, true], [12, false]]

//datos vacios

// let varVoid: void = undefined
// let varNull: null = null
// let varUndefined: undefined = undefined

// console.log(typeof(varUndefined))

function sumar(num1: number, num2: number): number  {
    return num1 + num2
}

sumar(2, 1)

function sumar2(num1: number | string | boolean): number | string {
    return "el numero es: " + num1
}

let prueba = (lelepancha: boolean) => {

}

prueba(true)

/*
| ------------- |
| nombre        |
| apellido      |
| edad          |
| ------------- |
*/

interface Iregistro{
    nombre: string,
    apellido: string,
    edad: number
}

let persona: Iregistro = {nombre: "fulano", apellido: "perez", edad: 12}

function registro(dataPersona:Iregistro): any {
    //registro en la bd
}


//POO

class Usuario{
    public nombre: string
    public apellido: string
    protected correo: string
    private nro_doc: string

    constructor(nombre, apellido, correo, nro_doc){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.nro_doc = nro_doc
    }

    public saludar():string{
        return `Hola ${this.nombre} ${this.apellido}`
    }

    public registrar():any{
        let token = this.genera_token()
        return token
    }

    private genera_token():string{
        return "sddfknslfkjhq032984712093isdnmf0982u34amsnf"
    }


}


let classUsuario = new Usuario("Fulano", "Perez", "correo@correo.com", "12434765")
// classUsuario.registrar()

class Pedidos extends Usuario{
    nro_pedido: number
    direccion_entrega: string
    entregado: boolean
    productos: []

    constructor(nombre, apellido, correo, nro_doc, nro_pedido, direccion_entrega, entregado, productos){
        super(nombre, apellido, correo, nro_doc)
        this.nro_pedido = nro_pedido
        this.direccion_entrega = direccion_entrega
        this.entregado = entregado
        this.productos = productos
    }

    enviar_pedido():string{
        return `Estimado(a) ${this.nombre} su pedido ya fue enviado con el numero de referencia ${this.nro_pedido}, a la direccion ${this.direccion_entrega}`
        
    }
}

let classEntrega = new Pedidos("Fulano", "Perez", "correo@correo.com", "12434765", "2134345", "cll falsa 123", false, ['electrolit', 'buscapina'])
console.log(classEntrega.registrar());
console.log(classEntrega.enviar_pedido())

console.log("pruebaWatch")