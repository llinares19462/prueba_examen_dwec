
let registros = [];
let idRegistro = 0;
// funcion constructora
function creaRegistro (nombre, apellidos, direccion, fecha_nacimiento) {

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.fecha_nacimiento = (!fecha_nacimiento) ? new Date() : Date.parse(fecha_nacimiento);


}

function anyadirRegistro(objeto) {
    objeto.id = idRegistro;
    registros.push(objeto);
}

function mostrarRegistros(registro) {

    let contenedor = document.getElementById("resultado");

    let div_registro = document.createElement("div");
    div_registro.className = "registro";
    contenedor.appendChild(div_registro);

    let div_nombre = document.createElement("div");
    div_nombre.className = "nombre";
    div_registro.appendChild(div_nombre);
    div_registro.innerHTML = registros.nombre;

    
}