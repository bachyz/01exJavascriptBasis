/**
 * Genereer een willekeurig geheel getal tussen 20 en 50 (grenzen inbegrepen)
 * en schrijf één van de volgende boodschappen naar de Console:
 *  Het willekeurig getal ligt in het interval [20,30[
 *  Het willekeurig getal ligt in het interval [30,40[
 *  Het willekeurig getal ligt in het interval [40,50]
 */
const random = Math.floor(Math.random() * 31) + 20;
alert(random);
console.log(random);
let interval;
if((random>=20) && (random<=30)){
    interval = "interval [20,30[";
}
if ((random>=30) && (random<=40)) {
    interval = "interval [30,40[";
}
if ((random>=40) && (random<=50)) {
    interval = "interval [40,50]";
}
console.log(`Het willekeurig getal ligt in het ${interval}`);
