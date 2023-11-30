// //cSpell:disable

// let saludo = "hola mundo"

// console.log(saludo)

// let suma = 2 + 2
// console.log(suma)


// const cedula = "5678"
// console.log(cedula)



// console.log("Hola mami")


// if (cedula == "1234") {
//     console.log("Si es igual")
// } else if (cedula == "5678") {
//     console.log("Es igual al segundo caso")
// } else {
//     console.error("No es igual")
// }


// switch (cedula) {
//     case "1234":
//         console.log("Si es igual -> switch")
//         break;
//     case "5678":
//         console.log("Es igual al segundo caso")
//         break
//     default:
//         console.error("No es igual")
//         break;
// }


// let inicioLista = 1
// while (inicioLista <= 100) {
//     console.log(inicioLista)
//     inicioLista++
// }
// let x = 0
// for (x; x <= 100; x = x + 2) {
//     console.warn(x)
// }

// let inicioListaDoWhile = 1

// do {
//     inicioListaDoWhile++
//     console.log(inicioListaDoWhile)
// } while (inicioListaDoWhile <= 100);


// let boton = document.querySelector("#btnEjemplo")
// boton.addEventListener("click", () => {
//     alert("HOla ke ases")
// })


// let correo = prompt("digite su correo")


// let numero1 = prompt("Digite su numero 1")
// let numero2 = prompt("Digite su numero 2")

// let numero3 = parseInt(numero1) + parseInt(numero2)
// console.log(numero3)
// let numero4 = numero1 - numero2
// console.log(numero4)


// let nombre = prompt("Digite su nombre")

// let edad = prompt("Digite su edad")

// if (nombre == "pepe" || edad >= 18) {
//     // if (edad >= 18) {
//     console.log("Hola " + nombre + " eres bienvenido")
//         // } else {
//         //     console.warn("aun no tienes la edad necesaria")
//         // }
// } else {
//     console.error("Usted no es bienvenido aqui")
// }

let sexo = prompt("Indiqueme su sexo")
let nombre = prompt("digite su nombre")

sexo = sexo.toLowerCase()

if (sexo == 'hombre') {
    console.log("Hola " + nombre.toUpperCase() + ", tienes derecho a una cerveza")
} else if (sexo == "mujer") {
    console.log("hola " + nombre.toUpperCase() + ", tienes derecho a un coco loco")
} else {
    console.error("Definase con sus 39 tipos de gay")
}

document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelector
document.querySelectorAll