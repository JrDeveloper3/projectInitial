class Libro {
    constructor(autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

    mostrar() {
        console.log(this)
    }
}

class LibroTec extends Libro {
    constructor(autor, titulo, categoria) {
        super(autor, titulo)
        this.categoria = categoria
    }
}

let libro = new Libro('Jorge', 'Los 100 moles')
let libroTec = new LibroTec('Juan', 'Sorias', 'Social')

//Añadir
libro.editorial = 'Salvat'
libro.mostrar()

libroTec.mostrar();