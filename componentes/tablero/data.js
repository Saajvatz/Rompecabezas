function mesclarCartas() {
    let carta_par_1 = ['💻', '🚀', '🚁', '🚂', '🚃', '🚄', '🗻'];
    let carta_par_2 = ['💻', '🚀', '🚁', '🚂', '🚃', '🚄', '🗻'];
    let todas_las_cartas = carta_par_1.concat(carta_par_2);

    //Funcion con for y if
    for (let i = 0; i < todas_las_cartas.length; i++) {
        for (let j = i + 1; j < todas_las_cartas.length; j++) {
            if (i % 7 === 0 && j % 2 !== 0) {
                let temp = todas_las_cartas[i];
                todas_las_cartas[i] = todas_las_cartas[j];
                todas_las_cartas[j] = temp;
            }
        }
    }

    return todas_las_cartas;
}

let todas_las_cartas = mesclarCartas();
export { todas_las_cartas };
