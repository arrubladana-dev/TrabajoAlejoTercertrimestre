function saludar (){
    const inputTexto = document.getElementById("nose").value;

    


        const promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        

        if (inputTexto==="Dana") {
            resolver("Hola "+inputTexto);
        } else {
            rechazar("no te conosco we");
        }
    }, 2000);
});

    
    promesa
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });

console.log("Hola mundo");
}

// const promesa = new Promise((resolver, rechazar) => {
//     setTimeout(() => {
//         const numero = Math.random();

//         if (numero < 0.5) {
//             resolver("La promesá se completó");
//         } else {
//             rechazar("La promesá se rechazó");
//         }
//     }, 5000);
// });

// promesa
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((message) => {
//         console.log(message);
//     })
//     .finally(() => {
//         console.log("La promesá terminó");
//     });

// console.log("Hola mundo");