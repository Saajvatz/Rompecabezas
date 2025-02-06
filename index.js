import { cargarCartas } from "./componentes/tablero/tablero.js";
let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');

let footer = document.createElement("div");
contenedor.appendChild(footer);
footer.className = "div-footer"

let progreso = document.createElement("div");
contenedor.appendChild(progreso);
progreso.className = "div-progreso";

let tablero = document.createElement("div");
contenedor.appendChild(tablero);
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());


let header = document.createElement("div");
contenedor.appendChild(header);
header.className = "div-header";

DOM.appendChild(contenedor);
contenedor.className = "div-contenedor";