import { addBotonAntesEvent, addBotonDespuesEvent, render, addBotonPrimeraPagi, addBotonUltimoEvent, addBotonDosEvent, addBotonCincoEvent } from "./ui.js";
import { goNextPage, goPrevPage, loadUsers, goFist, goLastPage, goTwo, goFive } from "./serves.js";

async function startApp() {
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