var ob={
    nombre:"Daniel",
    documento: 123456,
    ficha: 2237749,
    datos:function(){return `Soy ${this.nombre}, identificado con el numero de documento ${this.documento}, de la ficha ${this.ficha} mi telefono es ${this.telefono}`}, cuidad: "Soacha"
}


console.log(ob.datos());
ob.nombre="Santi"
console.log(ob.datos());
ob.telefono=321654987;
console.log(ob.datos());