import { todas_las_cartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta";
    
    let frente = document.createElement("div");
    frente.className = "frente";
    frente.textContent = "?"; 
    
    let dorso = document.createElement("div");
    dorso.className = "dorso";
    dorso.textContent = contenido; 
    
    div.appendChild(frente);
    div.appendChild(dorso);
    
    div.addEventListener("click", () => {
        div.classList.toggle("volteada");
    });
    
    return div;
}




function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";
    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });
    return div;
}

export { cargarCartas };
