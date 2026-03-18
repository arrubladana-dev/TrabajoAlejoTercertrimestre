export async function getDatosClimaticos(wix2) {
    
    //  Obtener coordenadas
    const ubicagiGeo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${wix2}&count=1&language=es&format=json`
    );

    const ubiGeo = await ubicagiGeo.json();

    if (!ubiGeo.results || ubiGeo.results.length === 0) {
    throw new Error("Ciudad no encontrada");
}

    const lat = ubiGeo.results[0].latitude;
    const lon = ubiGeo.results[0].longitude;

    // Obtener clima
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`

    );
    if (!response.ok) {
        throw new Error("Error en la petición");
    }
    const datos = await response.json();
    // Obtener los datos

    const clima = {
    temperatura: datos.current.temperature_2m,
    viento: datos.current.wind_speed_10m,
    codigo: datos.current.weather_code,
    hora: datos.current.time
};

    return clima;
}