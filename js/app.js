"use strict";
import { Perecedero, Producto, NoPerecedero } from "./Producto.js";

// Nodos
const form = document.querySelector("#myForm");
const nombreInput = document.querySelector("#nombre");
const precioInput = document.querySelector("#precio");
const perecederoInput = document.querySelector("#caduco");
const btn2 = document.querySelector(".btn--2");
const output = document.querySelector(".output");
const valorTipoEl = document.querySelector("#valor-tipo"); // este valor un día o un tipo de producto

// Variables
let productos = [];
// let perecedero = [];
// let noPerecedero = [];


// Funciones
/**
 * Función que carga en un array productos de tipo Producto object
 */
const guardarProducto = () => {
    // let fecha = fechaCaducidadInput.value;
    let precio = Number(precioInput.value);

    // let p1 = new Producto(nombreInput.value, precio);
    let p = null;

    // productos.push(p1);
    // console.log(productos.join("").toString());
    
    if (perecederoInput.value === "perecedero") {
        p = new Perecedero(nombreInput.value, precio);
        let dias = Number(valorTipoEl.value);

        // Usar o uno o el otro
        p.diasACaducar = dias; // modificamos propiedad directamente
        // p.meterDias(dias); // modificamos propiedad a través de un metodo
        
        // if (fecha === "") {
        //     alert("Introduce la fecha de caducidad!");
        // } else {
        //     console.log(fecha);
        // }
    } else {
        p = new NoPerecedero(nombreInput.value, precio);
        p.meterTipo(valorTipoEl.value);
    }
    
    productos.push(p);
}


const visualizar = () => {

    output.innerHTML = productos.join("").toString();
}


const calculos = () => {
    alert("E");
}


// Llamadas



// Eventos
form.onsubmit = e => {
    e.preventDefault();
    // siempre se llama como función cuando es .onsubmit o .onclick
    guardarProducto();
    visualizar();
}

btn2.onclick = () => {
    let acumulador = 0;
    for (let i = 0, tam = productos.length; i < tam; i++) { // mejor rendimiento(performance)
       acumulador = acumulador + productos[i].calcularPrecio();
    }
    document.querySelector(".total").textContent = acumulador;
}

perecederoInput.onchange = () => {
    const label = document.querySelector("[for='valor-tipo']");
    
    if (perecederoInput.value === "perecedero") {
        label.textContent = "Fecha de caducidad: ";
    } else {
        label.textContent = "Tipos: ";
    }
}