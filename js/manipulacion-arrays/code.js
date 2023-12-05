//cSpell:disable
let transmilenio = [
    "paula",
    "gabriela",
    "tomas",
    "gustavo"
]

console.log(transmilenio)

transmilenio.push("Santiago", "Carlos", "Juan")
console.log(transmilenio)


transmilenio.pop()
console.log(transmilenio)

transmilenio.unshift("Layhan", "pepe", "fulano", "sutano")
console.log(transmilenio)

transmilenio.shift()
console.log(transmilenio)


console.log(transmilenio.indexOf("adriana"))

transmilenio.splice(transmilenio.indexOf("gabriela") + 1, 0, "ejemplo1", "ejemplo2")
console.log(transmilenio)

let ejemploTexto = "Hola,mami como,estas"
let ejemploArray = ejemploTexto.split(",")
console.log(ejemploArray)


let formulario = document.querySelector("#formularioInput")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    transmilenio.push(e.target.valorNuevo.value)
    console.log(transmilenio)
})