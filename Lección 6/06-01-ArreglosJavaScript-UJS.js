//let autos = new Array ("BMW", "Mercedes Benz", "volvo");
const autos = ["BMW", "Mercedes Benz", "volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos [i]);
}

autos[1]="MercedesBenz";
console.log(autos[1]);

autos.push ("Audi");
console.log(autos);

console.log(autos.length);
autos[autos.length] = "cadillac";

console.log(autos);

autos[5] = "Porshe";
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);