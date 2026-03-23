import { getState } from "./state.js";

const botonPrimero = document.getElementById("botonPrimero");
const botonDos = document.getElementById("botonMas2");
const botonCinco = document.getElementById("botonMas5");
const botonultimo = document.getElementById("botonUltimo");
const botonSig = document.getElementById("botonSigui");
const botonAntes = document.getElementById("botonAntes");
const contenedorPer = document.getElementById("contenedorPersonajes");
const error = document.getElementById("errorMsg");
const mensaje = document.getElementById("mensaje");
const contadorPaginas = document.getElementById("contadorPaginas");

//siguiente pagina
export function addBotonAntesEvent(action) {
    botonAntes.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        botonContraErrores()
        render();
    });
}
// Boton de la primera pagina
export function addBotonPrimeraPagi(action) {
    botonPrimero.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        botonContraErrores()
        render();
    });
}
// depues
export function addBotonDespuesEvent(action) {
    botonSig.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        render();
        botonContraErrores();
    });
}
// dos en dos
export function addBotonDosEvent(action) {
    botonDos.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        render();
        botonContraErrores();
    });
}
// de a cinco
export function addBotonCincoEvent(action) {
    botonCinco.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        render();
        botonContraErrores();
    });
}
// ultima
export function addBotonUltimoEvent(action) {
    botonultimo.addEventListener("click", async () => {
        mensaje.classList.remove("hide");
        mensaje.classList.add("show");
        await action();
        mensaje.classList.add("hide");
        mensaje.classList.remove("show");
        render();
        botonContraErrores();
    });
}
// lo que hice antes 
// export async function añadirEvento(callback) {
//     boton.addEventListener("click", async () => {
//         error.textContent = "";
//         contenedorPer.innerHTML = "";

//         try {
//             const users = await callback();
//             users.forEach((user) => {
//                 const card = document.createElement("div");
//                 card.className = "card";
//                 card.innerHTML = getCard(user);
//                 contenedorPer.appendChild(card);
//             });
//         } catch (error) {
//             errorMsg.textContent = error.message;
//         }
//     });
    
// }
// renderizar 

export function render() {
    contenedorPer.innerHTML = "";
    const users = getState("users");
    
    mensaje.classList.remove("hide");
    mensaje.classList.add("show");
    try {
        users.forEach((user) => {
            mensaje.classList.add("hide");
            mensaje.classList.remove("show");
        const card = document.createElement("div");
                card.className = "card";
                card.innerHTML += getCard(user);
        contenedorPer.appendChild(card);
        contadorPaginas.textContent ="En la pagina "+ getState("pages") +" con total "+ getState("totalPages"); ;
    });
    } catch (message) {

        error.textContent = message;
    }
    
}

async function botonContraErrores() {
    botonSig.disabled = true; // Bloquea el botón para evitar clics dobles
    botonAntes.disabled = true;
    botonPrimero.disabled = true;
    botonDos.disabled = true;
    botonCinco.disabled = true;
    botonultimo.disabled = true;
    await render();
    botonSig.disabled = false; // Lo libera cuando la API responde
    botonAntes.disabled = false;
    botonPrimero.disabled = false;
    botonDos.disabled = false;
    botonCinco.disabled = false;
    botonultimo.disabled = false;
}


function getCard(user) {
    return `
            <h3>${user.name}</h3>
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Especie:</strong> ${user.species}</p>
            <p><strong>Estado:</strong> ${user.status}</p>
            <img src="${user.image}" alt="imagen">
            `;

}