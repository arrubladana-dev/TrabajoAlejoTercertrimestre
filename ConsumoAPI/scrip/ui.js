const boton = document.getElementById("botonCar");
const contenedorPer = document.getElementById("contenedorPersonajes");
const error = document.getElementById("errorMsg");

export async function añadirEvento(callback) {
    boton.addEventListener("click", async () => {
        error.textContent = "";
        contenedorPer.innerHTML = "";

        try {
            const users = await callback();
            users.forEach((user) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = getCard(user);
                contenedorPer.appendChild(card);
            });
        } catch (error) {
            errorMsg.textContent = error.message;
        }
    });
    
}
function getCard(user) {
    return `
            <h3>${user.name}</h3>
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Especie:</strong> ${user.species}</p>
            <p><strong>Estado:</strong> ${user.status}</p>
            `;

}