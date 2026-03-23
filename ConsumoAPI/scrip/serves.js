import { setState, getState } from "./state.js";
import { guardarPersonajes } from "./persistencia.js";

const URL = "https://rickandmortyapi.com/api/character";

export async function loadUsers() {

    try {
    
        const page = getState("pages");

        const res = await fetch(`${URL}?page=${page}`);
        
        console.log(page)

        const datos = await res.json();

        // const personajes = datos.results.slice(0, 8);
        console.log(datos);

    // setState("users", personajes);
        setState("users", datos.results);
        setState("count", datos.info.count);   // total personajes
        setState("totalPages", datos.info.pages); // total páginas

        // guardar en el localStorch
        guardarPersonajes({
            users: datos.results,
            page: page
        });
    } catch (error) {
        alert("Eroor al obtener los personajes");
    }

    
}
// primera paguina
export async function goFist()  {

    const pages = 1;
    setState("pages", pages);
    await loadUsers();
}
// siguiente
export async function  goNextPage() {
    const currentPage = getState("pages");
    const count = getState("count");
    const limit = getState("limit");
    const countPages = Math.ceil(count / limit);
    const newPage = currentPage + 1;
    const pages = newPage < countPages ? newPage : countPages;
    setState("pages", pages);
    await loadUsers();
}
// anterio 
export async function goPrevPage() {
    const currentPage = getState("pages");
    const newPage = currentPage - 1;
    const pages = newPage < 0 ? 0 : newPage;
    setState("pages", pages);
    await loadUsers();
}
//de a dos en dos 
export async function  goTwo() {
    const currentPage = getState("pages");
    const count = getState("count");
    const limit = getState("limit");
    const countPages = Math.ceil(count / limit);
    const newPage = currentPage + 2;
    const pages = newPage < countPages ? newPage : countPages;
    setState("pages", pages);
    await loadUsers();
}
// cinco
export async function  goFive() {
    const currentPage = getState("pages");
    const count = getState("count");
    const limit = getState("limit");
    const countPages = Math.ceil(count / limit);
    const newPage = currentPage + 5;
    const pages = newPage < countPages ? newPage : countPages;
    setState("pages", pages);
    await loadUsers();
}
// ultima
export async function goLastPage() {
    const total = getState("totalPages");
    setState("pages", total);
    await loadUsers();
}


// esto lo que hice antes para cargar usuario 
// export async function getUsers() {

//     const response = await fetch("https://rickandmortyapi.com/api/character");

//     if (!response.ok) {
//         throw new Error("Error en la petición");
//     }

//     const datos = await response.json();

//     const characters = datos.results.map((character) => {
//         return {
//             name: character.name,
//             species: character.species,
//             stado: character.status,
//             imagen: character.image
//         }
//     });

//     return characters;
// }