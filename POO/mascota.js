class Mascota {
    tipo
    color
    peso
    raza
    tamano
    sonido

    constructor(color_mascota, peso_mascota, raza_mascota, tamano_mascota, sonido_mascota, tipo_mascota) {
        this.color = color_mascota
        this.peso = peso_mascota
        this.raza = raza_mascota
        this.tamano = tamano_mascota
        this.sonido = sonido_mascota
        this.tipo = tipo_mascota
    }

    hacer_sonido() {
        console.log("La mascota hace: " + this.sonido)
    }

    movimiento(nombre_movimiento) {
        console.log(`El ${this.tipo} esta ${nombre_movimiento}`)
    }

}




let data_perro = new Mascota("blanco, negro, amarillo", "8 KG", "BEAGLE", "60 CM", "GUAUF", "perro")
data_perro.hacer_sonido()
data_perro.movimiento("caminando")

let data_gato = new Mascota("Amrillo, blanco", "4 KG", "MAINE COON", "80 CM", "MIAU", "gato")
data_gato.hacer_sonido()
data_gato.movimiento("aruñando")



class ejemplo extends Mascota {

    nombre

    constructor(color_mascota, peso_mascota, raza_mascota, tamano_mascota, sonido_mascota, tipo_mascota, nombre) {
        super(color_mascota, peso_mascota, raza_mascota, tamano_mascota, sonido_mascota, tipo_mascota)
        this.nombre = nombre
    }

    movimiento() {
        super.movimiento()
        let pepe = 2 + 5
        return pepe
    }

}

let x = new ejemplo("blanco, negro, amarillo", "8 KG", "BEAGLE", "60 CM", "GUAUF", "perro", "PEYE")
x.movimiento()