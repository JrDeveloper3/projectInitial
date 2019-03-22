const aDatos = [{ precio: 12 }, { precio: 32 }, { precio: 56 }]
aDatos.push({ precio: 59 });

calcularPrecio(12);
calcularPrecio(24);


function calcularPrecio(iva = 22) {

    let finalIva = 1 + (iva / 100)
    console.log(finalIva)

    for (let i = 0; i < aDatos.length; i++) {
        console.log(aDatos[i]);
    }

    let precioFinal = 1 + (iva / 100);

    aDatos.forEach(elemnt => {
        precioFinal = elemnt.precio * finalIva;
        mostrarPrecio(precioFinal);
    })


}

function mostrarPrecio(valor) {
    console.log(`El precio final es : ${valor.toFixed(2)}`);
}