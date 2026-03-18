const boton = document.getElementById("boton");
const input = document.getElementById("lugar");
const error = document.getElementById("errorMsg");
const contenedorDatos = document.getElementById("contenedorDatos");

export async function añadirEvento(callback) {
    boton.addEventListener("click", async () => {
        error.textContent = "";
        contenedorDatos.innerHTML = "";

        try {
            const climaD = await callback();

                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = getCard(climaD);
                contenedorDatos.appendChild(card);

        } catch (error) {
            errorMsg.textContent = error.message;
        }
    });
    
}
export function wi() {
    const valor = input.value;
    return valor ;

}
function getCard(climaD) {
    return `
            <h3>${input.value}</h3>
            <p><strong>Temperatura:</strong> ${climaD.temperatura}</p>
            <p><strong>Viento:</strong> ${climaD.viento}</p>
            <p><strong>Estado:</strong> ${climaD.codigo}</p>
            <p><strong>Estado:</strong> ${climaD.hora}</p>
            `;

}


