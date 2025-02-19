const prezzoKm = 0.21;
const scontoMinori = 0.2;
const scontoAnziani = 0.4;

const km = Number(prompt("Numero di km"));
const eta = Number(prompt("Età dei passeggeri"));

let prezzoBiglietto = km * prezzoKm;

let message = "";

if (eta < 18) {
    prezzoBiglietto -= prezzoBiglietto * scontoMinori;
    message = "20% di sconto applicato";
} else if (eta > 65) {
    prezzoBiglietto -= prezzoBiglietto * scontoAnziani;
    message = "40% di sconto applicato";
}

console.log(`Prezzo biglietto: €${prezzoBiglietto.toFixed(2)}. ${message}`);

const prezzoFinale = prezzoBiglietto.toFixed(2);
    