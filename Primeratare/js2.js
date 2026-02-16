function numero (){
    const inputTexto = Number(document.getElementById("nose").value);
    const inputTexto2 = Number(document.getElementById("nose2").value);

    const obtenerNumero = new Promise((resolver,rechazar) => {
    setTimeout(() => {
        

        if (inputTexto===10) {
            resolver(inputTexto);
        } else{
            rechazar("no we");
        }
    }, 2000);
});

    const multiplicarPorDos = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        
        if (inputTexto2===2) {
            resolver(inputTexto2*inputTexto);
        } else{
            rechazar("numeros incorrectos");
        }
    }, 2000);
});

    
        obtenerNumero
.then(() => {
return multiplicarPorDos;
})
.then((resolver) => {
console.log(resolver);
})
.catch((wi2) =>{
    console.log(wi2)
    return multiplicarPorDos;
})
.catch((wi3) => {
    console.log(wi3);
});


// obtenerNumero()
// .then((num) => {
// multiplicarPorDos(num);
// })
// .then((resultado) => {
// console.log(resultado);
// });

console.log("Hola mundo");
}