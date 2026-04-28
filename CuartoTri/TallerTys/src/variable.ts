const name: string = "Alejo";

const num: number = 10e-10;

const num2: number = Infinity; // simbolo mate,atico

// const wiuhu: string[];
const lastname: string = "Alejo";
const geeting: string = `Hola ${name} buenos dias`;

// ------------------NO PRIMITIVOS---------------------------------------------

class Persona {};

const persona: Persona = new Persona(); // instancias

//type StrinONumero 

type Alejo = number | string;

const alejo: Alejo  = 1;
// OBJETOS
type Zycode = {
    code: number;
}
type Adress = {
    calle: string;
    city: string;
}
type Persona2 = {
    name: String;
    age: number;
    dress:Adress&Zycode;
}

const obj: Persona2 ={
    name:"",
    age:1,
    dress: {
        calle:"calle 20",
        city:"Armenio",
        code: 12344
    }
};

type Rol = "USER" | "ADMIN" | "CLENTE";

const rol: Rol = "USER";

// ------------------------------------FUNCIONES------------------------------------

//  ----------LA NORMAL
function suma(num1: number, num2: number): number{
    return num1 + num2
}
// ------------ FLECHA

type Fn = (n1:number, n2:number)=> number;

const sumaWi: Fn = (a,b) =>{
    return a+b;
}

const reta: Fn = (a,b) =>{
    return a-b;
}

const multiplicacion: Fn = (a,b) =>{
    return a*b;
}

const division: Fn = (a,b) =>{
    return a/b;
}