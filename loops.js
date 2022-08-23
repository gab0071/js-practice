// NO CAMBIAR
let notas = [94, 92, 57, 84, 53, 87, 67, 98, 99, 95, 96, 98, 94, 88, 84, 83, 78, 74, 75];
let peorNota = 100;
let mejorNota = 0;
let notaPromedio = 0;

// Agrega aquí el código para solucionar el problema
// Hicimos esto con nuestra logica pero dejaremos una opcion mas corta
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < peorNota) {
        peorNota = notas[i];
    }
}

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mejorNota) {
        mejorNota = notas[i];
    }
}

let suma = 0;
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    suma = suma + nota;
}
notaPromedio = suma / notas.length;

// Opcion corta
// let suma = 0;

// for(let i = 0; i < notas.length; i = i + 1) {
// 	let nota = notas[i];
// 	if(nota > mejorNota) mejorNota = nota;
// 	if(nota < peorNota) peorNota = nota;
// 	suma = suma + nota;
// }

notaPromedio = suma / notas.length;

// NO CAMBIAR
console.log(`Peor nota => ${peorNota}`);
console.log(`Mejor nota => ${mejorNota}`);
console.log(`notaPromedio nota => ${notaPromedio}`);
