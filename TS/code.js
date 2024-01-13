var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Prueba");
var texto = "hola, soy un texto peye";
var numero = 123;
var boleano = true;
var todo = "";
var transmilleno = ["asd", 23, true];
var estructura = ["asd", true, "asd", 12];
var estructura2 = [[12, true], [12, false]];
//datos vacios
// let varVoid: void = undefined
// let varNull: null = null
// let varUndefined: undefined = undefined
// console.log(typeof(varUndefined))
function sumar(num1, num2) {
    return num1 + num2;
}
sumar(2, 1);
function sumar2(num1) {
    return "el numero es: " + num1;
}
var prueba = function (lelepancha) {
};
prueba(true);
var persona = { nombre: "fulano", apellido: "perez", edad: 12 };
function registro(dataPersona) {
    //registro en la bd
}
//POO
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, correo, nro_doc) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.nro_doc = nro_doc;
    }
    Usuario.prototype.saludar = function () {
        return "Hola ".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.registrar = function () {
        var token = this.genera_token();
        return token;
    };
    Usuario.prototype.genera_token = function () {
        return "sddfknslfkjhq032984712093isdnmf0982u34amsnf";
    };
    return Usuario;
}());
var classUsuario = new Usuario("Fulano", "Perez", "correo@correo.com", "12434765");
// classUsuario.registrar()
var Pedidos = /** @class */ (function (_super) {
    __extends(Pedidos, _super);
    function Pedidos(nombre, apellido, correo, nro_doc, nro_pedido, direccion_entrega, entregado, productos) {
        var _this = _super.call(this, nombre, apellido, correo, nro_doc) || this;
        _this.nro_pedido = nro_pedido;
        _this.direccion_entrega = direccion_entrega;
        _this.entregado = entregado;
        _this.productos = productos;
        return _this;
    }
    Pedidos.prototype.enviar_pedido = function () {
        return "Estimado(a) ".concat(this.nombre, " su pedido ya fue enviado con el numero de referencia ").concat(this.nro_pedido, ", a la direccion ").concat(this.direccion_entrega);
    };
    return Pedidos;
}(Usuario));
var classEntrega = new Pedidos("Fulano", "Perez", "correo@correo.com", "12434765", "2134345", "cll falsa 123", false, ['electrolit', 'buscapina']);
console.log(classEntrega.registrar());
console.log(classEntrega.enviar_pedido());
console.log("pruebaWatch");
