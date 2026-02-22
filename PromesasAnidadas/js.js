

const users = [
{ id: 1, name: "Laura Gómez", email: "laura@email.com", city: "Medellín" },
{ id: 2, name: "Carlos Ruiz", email: "carlos@email.com", city: "Bogotá" },
{ id: 3, name: "Sofía Martínez", email: "sofia@email.com",city: "Cali" },
{ id: 4, name: "Andrés López", email: "andres@email.com", city: "Barranquilla"},
{ id: 5, name: "Valentina Torres", email: "valentina@email.com", city: "Cartagena" }
];

const products = [
{ id: 101, userId: 1, name: "Laptop", price: 3500, status:"Enviado" },
{ id: 102, userId: 1, name: "Mouse Gamer", price: 150, status: "Entregado" },
{ id: 103, userId: 2, name: "Teclado Mecánico", price: 280, status: "En proceso" },
{ id: 104, userId: 3, name: "Monitor 24 pulgadas", price: 900, status: "Entregado" },
{ id: 105, userId: 3, name: "Base Refrigerante", price: 120, status: "Enviado" },
{ id: 106, userId: 4, name: "Audífonos Bluetooth", price: 200, status: "Cancelado" }
];


const boton = document.getElementById("boton");
const nombreUs = document.getElementById("nombreUs");
const emailUs = document.getElementById("emailUs");
const ciudadUs = document.getElementById("ciudadUs")
const nombrePro = document.getElementById("nombrePro");
const precioPro = document.getElementById("precioPro");
const estadoPro = document.getElementById("estadoPro");
const datosContenedor = document.getElementById("datosContenedor");
const conteProduc = document.getElementById("conteProduc");
const conteProduc2 = document.getElementById("conteProduc2");
const ultimoProducto = document.getElementById("ultimoProducto");
const nombrePro2 = document.getElementById("nombrePro2");
const precioPro2 = document.getElementById("precioPro2");
const estadoPro2 = document.getElementById("estadoPro2")
const nombrePro3 = document.getElementById("nombrePro3");
const precioPro3 = document.getElementById("precioPro3");
const estadoPro3 = document.getElementById("estadoPro3");
const h2 = document.getElementById("h2");
const error = document.getElementById("error");
const input = document.getElementById("input");



function buscar(id){
    return new Promise((resul, recha)=>{
        datosContenedor.classList.add("show");
        error.classList.add("show");
        boton.disabled = true;
        mensaje.classList.add("show");
        setTimeout(()=>{
            datosContenedor.classList.add("hide");
            datosContenedor.classList.remove("show");
            error.classList.add("hide");
            error.classList.remove("show");
            
            const usuario = users.find((u) => u.id === id);
            if(usuario){
                resul(usuario);
            }else{
                recha("Sabra dios usted que esta buscando");
            }
        },2000);
    });
}
function buscarPedido(usuario){
    return new Promise((resul, recha)=>{
        conteProduc2.classList.add("Show");
        conteProduc.classList.add("show");
            
        setTimeout(()=>{
            conteProduc2.classList.add("hide");
            conteProduc2.classList.remove("show");
            conteProduc.classList.add("hide");
            conteProduc.classList.remove("show");
            const productos = products.filter((u) => u.userId === usuario.id);
            if(productos.length>0){
                resul(productos);
            }else{
                recha("El usuario no tiene productos");
            }
            
        },2000);
    });
}

function buscarUltimoPedido(producto){
    return new Promise((resul, recha)=>{
        ultimoProducto.classList.add("hide");
        setTimeout(()=>{
            mensaje.classList.add("hide");
            mensaje.classList.remove("show");
            const compraRealizada =  producto.find((u) => u.status=="Entregado");
            if(compraRealizada){
                resul(compraRealizada);
            }else{
                recha("No se ha procesado ninguna compra");
            }
        },2000);
    });
}


boton.addEventListener("click", () => {
    const id = parseInt(document.getElementById("input").value);
    if (!/^\d+$/.test(id)) {
        error.classList.remove("hide");
        h2.textContent = "Solo se permiten números positivos";
        return;
    }
    buscar(id)
        .then((usuario) => {
            
            const result = document.getElementById("input");
            nombreUs.textContent = usuario.name;
            emailUs.textContent = usuario.email;
            ciudadUs.textContent = usuario.city;
            datosContenedor.classList.remove("hide");
            return buscarPedido(usuario);
            
        }).then((productos)=>{
            conteProduc.classList.remove("hide");
            conteProduc2.classList.remove("hide");
            nombrePro.textContent = productos[0].name;
            precioPro.textContent = productos[0].price;
            estadoPro.textContent = productos[0].status;
            if(productos.length>1){
                conteProduc2.classList.remove("hide");
                nombrePro2.textContent = productos[1].name;
                precioPro2.textContent = productos[1].price;
                estadoPro2.textContent = productos[1].status;
                
            }
            return buscarUltimoPedido(productos);
        }).then((compraRealizada)=>{
            ultimoProducto.classList.remove("hide");
                nombrePro3.textContent = compraRealizada.name;
                precioPro3.textContent = compraRealizada.price;
                estadoPro3.textContent =compraRealizada.status;
        })
        .catch((err) =>{
            error.classList.remove("hide");
            conteProduc2.classList.add("hide");
            h2.textContent= err;
            
        }).catch((err) =>{
            error.classList.remove("hide");
            datosContenedor.classList.add("hide");
            conteProduc.classList.add("hide");
            conteProduc2.classList.add("hide");
            h2.textContent= err;
            
        }).catch((err) =>{
            error.classList.remove("hide");
            datosContenedor.classList.add("hide");
            conteProduc2.classList.add("hide");
            h2.textContent= err;
            
        })
        .finally(() => {
            mensaje.classList.add("hide");
            boton.disabled = false;
            
        });
        document.getElementById("input").value = "";
});