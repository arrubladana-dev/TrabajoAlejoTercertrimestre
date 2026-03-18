
import { añadirEvento, wi } from "./ui.js";
import { getDatosClimaticos } from "./serves.js";

function start() {
    añadirEvento(async () => {
        const ciudadTexto = wi();


        return await getDatosClimaticos(ciudadTexto);
    });
}

start();