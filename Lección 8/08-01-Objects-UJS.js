let persona1 = {
    nombre:"Juan",
    apellido:"Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + " : " + this.nombre + " " + this.apellido + " , " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//uso de apply para usar
//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto("lic", "894432170935") );

let arreglo  = ("ing", "3476980123")
console.log(persona1.nombreCompleto.apply(persona2, arreglo) );
