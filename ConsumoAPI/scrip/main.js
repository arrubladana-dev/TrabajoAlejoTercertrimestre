import { addBotonAntesEvent, addBotonDespuesEvent, render, addBotonPrimeraPagi, addBotonUltimoEvent, addBotonDosEvent, addBotonCincoEvent } from "./ui.js";
import { goNextPage, goPrevPage, loadUsers, goFist, goLastPage, goTwo, goFive } from "./serves.js";
import { obtenerPersonajes } from "./persistencia.js";
import { setState } from "./state.js";

async function startApp() {
    const guardado = obtenerPersonajes();

    if (guardado) {
        setState("users", guardado.users);
        setState("pages", guardado.page);
        render();
    } else {
        await loadUsers();
        render();
    }

    addBotonAntesEvent(goPrevPage);
    addBotonDespuesEvent(goNextPage);
    addBotonPrimeraPagi(goFist);
    addBotonUltimoEvent(goLastPage);
    addBotonDosEvent(goTwo);
    addBotonCincoEvent(goFive);
    await loadUsers();
    render();
}

startApp();