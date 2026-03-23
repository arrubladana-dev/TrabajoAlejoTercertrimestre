const key = "personajes";

export function guardarPersonajes(data) {
    const datos = JSON.stringify(data);
    localStorage.setItem(key, datos);
}

export function obtenerPersonajes() {
    const datos = localStorage.getItem(key);

    if (datos) {
        return JSON.parse(datos);
    }

    return null;
}