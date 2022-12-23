let largo;
let ancho;

let area;
let perimetro;
let costo;

let total;


alert("Bienvenido a Bases Mayoral \nLas Mejores Bases para tu Cama!");

let name1 = prompt("Cual es tu nombre? ");

let box = prompt("Muy bien " + name1 + ", que tamaño de Base buscabas?\n-Queen.\n-Matrimonial.\n-Individual.");

switch(box.toLowerCase()){
case "queen":
    largo = 190;
    ancho = 150;
    costo = 1100;
break;
case "matrimonial":
    largo = 190;
    ancho = 135;
    costo = 1000;
break;
case "individual":
    largo = 190;
    ancho = 100;
    costo = 950;
break;
default:
    alert("no encontramos: '" + box + "' solo tenemos tamaños -grande -mediana -chica");
}


let tamaño = prompt("Muy bien la Base " + box + " tine una medida de: " + largo + "cm de largo y " + ancho + "cm de ancho, quieres saber algo mas? -area - perimetro -ambas -nada");

if(tamaño.toLowerCase()=="area"){
    area = largo * ancho;
    alert("La area de su Base es de " + area + "cm².");
}else if(tamaño.toLowerCase()=="perimetro"){
    perimetro = largo*2 + ancho*2;
    alert("El perimetro de su Base es de " + perimetro + "cm.");
}else if(tamaño.toLowerCase()=="ambas"){
    area = largo * ancho;
    perimetro = largo*2 + ancho*2;
    alert("La area de su Base es de " + area + "cm² y el perimetro de su Base es de " + perimetro + "cm.");
}else{
    alert("Entendido!!!");
}

let num = parseInt(prompt("La Base " + box + " que usted escogio, cuesta $" + costo + " cuantas Bases va querer?"))

let promoBases;

if(num < 3){
    promoBases = 0;
} else if(num < 6){
    promoBases = .10;
} else {
    promoBases = .20;
}

console.log(promoBases)

function descuentoAplicado (bruto, descuento){
    let desc = bruto * descuento;
    return bruto - desc 
}

const carritoBases = []

for(let i = 1; i <= num; i++){
    carritoBases.push('1 Base ' + box + " - serie: " + 000 + i)
}

function calcularTotal(precio, cantidad){
    return precio * cantidad;
    
}

alert("Imprimiendo nota... ")

const datosNota = {
    factura:1,
    fecha: new Date(),
    nombre:name1,
    tamaño:box,
    cantidad:num,
    total:calcularTotal(costo,num),
}

console.log(datosNota)

function notaBases (bruto, descuento) {
    alert("nombre: " + name1 + "\nFecha " + new Date()+ "\ntamaño: " + box + "\nmedidas- largo:" + largo + "cm. ancho:" + ancho + "cm" + "\nSu pedido es:" + carritoBases + "\nTOTAL bruto: " + bruto + "\nTOTAL CON DESCUENTO: " + descuento)
}

notaBases(calcularTotal(costo,num),descuentoAplicado(calcularTotal(costo,num),promoBases))