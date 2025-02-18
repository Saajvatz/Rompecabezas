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

function mezclarCartas(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]]; // Intercambia los valores
    }
    return mazo;
}
export { cargarCartas };
export {mezclarCartas}
