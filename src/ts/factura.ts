/*
 * factura.ts
 * Programa de ejemplo proporcionado por el profesor (Práctica 2 · Tema 2).
 * NO tienes que modificarlo: solo compilarlo a JavaScript y ejecutarlo con Node.js.
 * Usa la biblioteca externa "lodash" (una dependencia del proyecto).
 */
import round from "lodash/round";

const IVA = 0.21;

const lineas: { concepto: string; precio: number }[] = [
  { concepto: "Dominio web anual", precio: 12.0 },
  { concepto: "Alojamiento web", precio: 59.9 },
  { concepto: "Logotipo corporativo", precio: 150.0 },
];

console.log(`=== FACTURA generada con Node.js ${process.version} ===`);
let base = 0;
for (const l of lineas) {
  console.log(`${l.concepto.padEnd(25)} ${l.precio.toFixed(2).padStart(10)} EUR`);
  base += l.precio;
}
const cuotaIva = round(base * IVA, 2);
console.log("-----------------------------------------");
console.log(`${"Base imponible".padEnd(25)} ${base.toFixed(2).padStart(10)} EUR`);
console.log(`${"IVA (21 %)".padEnd(25)} ${cuotaIva.toFixed(2).padStart(10)} EUR`);
console.log(`${"TOTAL".padEnd(25)} ${round(base + cuotaIva, 2).toFixed(2).padStart(10)} EUR`);
