const users = [
{ id: 1, name: "Laura Gómez", email: "laura@email.com", city: "Medellín" },
{ id: 2, name: "Carlos Ruiz", email: "carlos@email.com", city: "Bogotá" },
{ id: 3, name: "Sofía Martínez", email: "sofia@email.com",city: "Cali" },
{ id: 4, name: "Andrés López", email: "andres@email.com", city: "Barranquilla"},
{ id: 5, name: "Valentina Torres", email: "valentina@email.com", city: "Cartagena" }
];

// primer punto
async function getUsers(users) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (users.length===0) {
                rej("Error");
            } else {
                res(users);
            }
            
        }, 2000);
    });
}
async function loadUsers() {
    try {
        const user = await getUsers(users);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

loadUsers();


//segundo ejercicio 
const usuarios = [
    { id: 1, nombre: "Laura Gómez" },
    { id: 2, nombre: "Carlos Ruiz" },
    { id: 3, nombre: "Sofía Martínez" }
];

const tareas = [
    { userId: 1, tarea: "Crear reporte mensual" },
    { userId: 2, tarea: "Diseñar interfaz" },
    { userId: 3, tarea: "Pruebas del sistema" }
];

async function getUsers2(usuaId) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = usuarios.find((user) => user.id === usuaId);
            if (usuarios.length===0) {
                rej("Error");
            } else {
                res(user);
            }
            
        }, 1500);
    });
}
async function getTasksByUser(user) {
    return new Promise((res) => {
        setTimeout(() => {

            const tar = tareas.find((u) => u.userId ===user.id);
            
                res(tar);
            
            
        }, 2000);
    });
}

async function loadUsers2() {
    try {
        const user = await getUsers2(1);
        const tareas = await getTasksByUser(user);
        console.log(user.nombre);
        console.log(tareas.tarea);
    } catch (error) {
        console.log(error);
    }
}

loadUsers2();

//Tercer punto
const credenciales = [
    { email: "ana@mail.com", password: "Ana123" },
    { email: "luis@mail.com", password: "Luis456" },
    { email: "sofi@mail.com", password: "Sofi789" },
    { email: "juan@mail.com", password: "Juan321" },
    { email: "maria@mail.com", password: "Mari654" },
    { email: "cami@mail.com", password: "Cami987" },
    { email: "dani@mail.com", password: "Dani741" },
    { email: "pablo@mail.com", password: "Pabl852" },
    { email: "laura@mail.com", password: "Laur963" },
    { email: "nico@mail.com", password: "Nico159" }
];

async function login(email, password) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const usuariosCorreo = credenciales.find((user) => user.email === email && user.password === password);
            if (usuariosCorreo) {
                res("Login exitoso");
            } else {
                rej("“Credenciales incorrectas”");
            }
            
        }, 1500);
    });
}

async function startLogin() {
    try {
        const user = await login("ana@mail.com", "Ana123999");
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

startLogin();