export async function getUsers() {

    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
        throw new Error("Error en la petición");
    }

    const datos = await response.json();

    const characters = datos.results.map((character) => {
        return {
            name: character.name,
            species: character.species,
            image: character.status
        }
    });

    return characters;
}