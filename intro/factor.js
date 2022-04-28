//NO HAY PARAMETROS
var sinpar=()=>"Hola";

console.log(sinpar());

//UN SOLO PARAMETRO
var cuadrado=function(num){
    return num*num;
}

var cuadradito=num=>num*num;
console.log(cuadradito(10));


//MAS DE UN PARAMETRO
var factor=(n,m)=>{
    if (n%m==0||m%n==0) {
        return "un es factor del otro"
    } else {
        return "no son factores"
    }
}

console.log(factor(7,10)); 

//BONUS



