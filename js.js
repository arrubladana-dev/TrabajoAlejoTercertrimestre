const texto = document.getElementById("texto");
const contenedor = document.getElementById("contenedorInforma");

const boton = document.getElementById("boton");

const tarjeta = document.createElement("div");
    tarjeta.className = "targeta";


const users = [
        {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        },
        {
        id: 2,
        name: "María Gómez",
        email: "maria.gomez@example.com",
        },
        {
        id: 3,
        name: "Carlos Rodríguez",
        email: "carlos.rodriguez@example.com",
        },
        {
        id: 4,
        name: "Laura Martínez",
        email: "laura.martinez@example.com",
        },
        {
        id: 5,
        name: "Andrés López",
        email: "andres.lopez@example.com",
        },
    ];

function buscar(id) {
    
    return new Promise((res, rej) => {
        animacion.classList.add("show");
        mensaje.classList.add("show");
        setTimeout(() => {
            animacion.classList.add("hide");
            animacion.classList.remove("show");
            mensaje.classList.add("hide");
            mensaje.classList.remove("show");
            const usuario = users.find((u) => u.id === id);

            if (usuario) {
                res(usuario);
            } else {
                rej("No se encontró el usuario");
            }
        }, 2000);
    });
}

setTimeout(() => {
    animacion.textContent = "";
}, 3000);

// setTimeout(() => {
//     texto.textContent = "";
// }, 200);

// setTimeout(() => {
//     texto.textContent = "";
// }, 100);

boton.addEventListener("click", () => {
    const id = parseInt(document.getElementById("texto").value);
    buscar(id)
        .then((usuario) => {
            const result = document.getElementById("texto");
            
            result.textContent =`Nombre: ${usuario.name} - Email: ${usuario.email}`;

            if(id===1){
                tarjeta.textContent = "name:"+ "Juan Pérez"+"juan.perez@example.com";
                
                contenedor.appendChild(tarjeta);
            }else if(id===2 ){
                tarjeta.textContent = "nombre: Maria Gomes"+"email: juan.perez@example.com";
                contenedor.appendChild(tarjeta);
            }else if(id===3 ){
                tarjeta.textContent = "nombre: Carlos Rodríguez"+"email: carlos.rodriguez@example.com";
                contenedor.appendChild(tarjeta);
            }else if(id===4 ){
                tarjeta.textContent = "nombre: Laura Martínez"+"email: laura.martinez@example.com";
                contenedor.appendChild(tarjeta);
            }else if(id===5 ){
                tarjeta.textContent = "nombre: Andrés López"+"email: andres.lopez@example.com";
                contenedor.appendChild(tarjeta);
            }

            // const texto = document.createElement("p");
            // texto.textContent = result.value;
            // tarjeta.appendChild(texto);
            // contenedor.appendChild(tarjeta);
        })
        .catch((err) => alert(err));
});
