function edad(){
    const inputEdad = Number(document.getElementById("nose").value);

    function obtenerEdad() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (inputEdad !=18) {
                resolver(inputEdad);
            }else{
                rechazar("no pasa");
            }
        }, 2000);
    })
}

function verificaEdad() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if(inputEdad >=18){
                resolver("Es mayor de edad");
            }else{
                rechazar("Es menor");
            }
        }, 1000);
    })
}

obtenerEdad()
.then(() => {
return verificaEdad();
})
.then((mensaje) => {
console.log(mensaje);
})
.catch((error) => {
console.log(error);
});
console.log("hojl");
}

