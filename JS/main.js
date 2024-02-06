// Función para calcular el precio en cuotas con impuesto
function calcularPrecioEnCuotasConImpuesto(precio, cuotas) {
    if (cuotas <= 0) {
        return "El número de cuotas debe ser mayor que 0";
    }

    
    let impuesto = 0;
    if (cuotas <= 6) {
        impuesto = 0.05; // 5% de impuesto para 6 cuotas 
    } else {
        impuesto = 0.1;  // 10% de impuesto para 12 cuotas
    }

    
    let precioConImpuesto = precio * (1 + impuesto);
    let precioEnCuotas = precioConImpuesto / cuotas;

    return "El precio en " + cuotas + " cuotas con impuesto es: $" + precioEnCuotas.toFixed(2);
}

//Los 4 Productos que se ofrecen
let productos = prompt("Ingresa el producto que querés comprar: \n 1-Pastillas de freno \n 2-Fuelles \n 3-Cazoletas \n 4-Bombas Hidráulicas");
switch(productos){
    case "1":
        alert("Seleccionaste Pastillas de freno")
        break;
    case "2":
        alert("Seleccioaste Fuelles")
        break;
    case "3":
        alert("Seleccionaste Cazoletas")
        break;    
    case "4":
        alert("Seleccionaste Bombas Hidráulicas")
        break;    
}


// Función para obtener el precio del producto seleccionado
function obtenerPrecioProducto(producto) {
    switch (producto) {
        case "1":
            return 30000; // Precio de Pastillas de freno
        case "2":
            return 4500; // Precio de Fuelles
        case "3":
            return 18900; // Precio de Cazoletas
        case "4":
            return 50000; // Precio de Bombas Hidráulicas
        default:
            return 0; // Precio por defecto si no coincide con ningún caso
    }
}





let precioProducto = obtenerPrecioProducto(productos);


let numeroCuotas;

do {
    let numeroCuotasUsuario = prompt("Ingrese el número de cuotas que desea:");
    numeroCuotas = parseInt(numeroCuotasUsuario);

    if(numeroCuotas !== 6 && numeroCuotas !== 12) {
        alert("Ingresa un número de cuotas válido (6 o 12) ");
    }
} while (numeroCuotas !== 6 && numeroCuotas !== 12);

let resultado = calcularPrecioEnCuotasConImpuesto(precioProducto, numeroCuotas);
alert(resultado);