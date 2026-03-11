import { añadirEvento } from "./ui.js";
import { getUsers } from "./serves.js";

function start() {
    añadirEvento(getUsers);
}

start();