type Tareas = {
    id: string;
    descripcion: string;
    estado: "pendiente"|"en_progreso" | "finalizada";
}

function listaTareas(tareasW: Tareas[]){
    return tareasW.filter(t => t.estado === "en_progreso"|| "finalizada");

}
// --------------------SEGUNDO-----------------
type Transaccion = {
    monto: number;
    tipo: "ingreso" | "egreso";
    categoria: string;
};

function sumaPorTipo(transacciones: Transaccion[]) {
    return transacciones.reduce(
    (acc, cur) => {
        if (cur.tipo === "ingreso") {
        acc.ingreso += cur.monto;
        } else {
        acc.egreso += cur.monto;
        }

        return acc;
    },
    { ingreso: 0, egreso: 0 },
    );
}

// -----------------------------TERCERA-------------------

type Email = {
    tipo: "email";
    correo: String;
    asunto: String;
    contenido: String;
}

type SMS = {
    telefono: number;
    tipo: "sms";
}

type Push = {
    pocicion: String;
    tipo: "push";
}

type Notificacion = Email|SMS|Push;


function enviarNotificacion(noti: Notificacion){
    if (noti.tipo==="email"){
        console.log("Email");
    }else if(noti.tipo==="push"){
        console.log("Push");
    }else{
        console.log("SMS");
    }
}

// ------------CUARTA------------
type TipoC = "texto"|"numero"|"email"

type CampoFormulario ={
    nombre: string;
    tipo:TipoC;
    valor: number|string;
}


function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = []
    campos.forEach(c => {
        if (c.tipo === "email" && !c.valor.toString().includes("@")) {
            camposInvalidos.push(c.nombre)
        } else if (c.tipo === "numero" && typeof c.valor !== "number") {
            camposInvalidos.push(c.nombre)
        } else {
            if (typeof c.valor !== "string") {
                camposInvalidos.push(c.nombre)
            }
        }
    })

    return camposInvalidos

}

//----------------------QUINTA------------------------------
// function name(validaCampos:CampoFormulario[]) {
//     if(validaCampos.filter(t => t.tipo==="email"||"texto"||"numero")){
//         return validaCampos.filter(nombre =>nombre.nombre);
//     }
// }

