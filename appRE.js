const deptoscitys = {
    am: ["Leticia", "Puerto Nariño", "Tabatinga"],
    an: ["Medellín", "Envigado", "Sabaneta"],
    ar: ["Arauca", "Saravena", "Tame"],
    at: ["Barranquilla", "Soledad", "Malambo"],
    bo: ["Cartagena", "Barranquilla", "Soledad"],
    ca: ["Manizales", "Villamaría", "Chinchiná"],
    caq: ["Florencia", "San Vicente del Caguán", "Morelia"],
    cas: ["Yopal", "Villanueva", "Támara"],
    cau: ["Popayán", "Santander de Quilichao", "Patía"],
    ces: ["Valledupar", "Aguachica", "La Paz"],
    cho: ["Quibdó", "Nuquí", "Istmina"],
    cor: ["Montería", "Cereté", "Sahagún"],
    cun: ["Bogotá", "Soacha", "Zipaquirá"],
    gua: ["Inírida", "Guaviare", "Retorno"],
    gua: ["San José del Guaviare", "Calamar", "El Retorno"],
    hui: ["Neiva", "Pitalito", "Garzón"],
    lag: ["Riohacha", "Maicao", "Uribia"],
    mag: ["Santa Marta", "Ciénaga", "Fundación"],
    met: ["Villavicencio", "Granada", "Acacías"],
    nar: ["Pasto", "Tumaco", "Ipiales"],
    nsa: ["Cúcuta", "Ocaña", "Pamplona"],
    put: ["Mocoa", "Puerto Asís", "Sibundoy"],
    qui: ["Armenia", "Calarcá", "Montenegro"],
    ris: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal"],
    san: ["San Andrés", "Providencia", "San Luis"],
    san: ["Bucaramanga", "Floridablanca", "Girón"],
    suc: ["Sincelejo", "Corozal", "Tolú"],
    tol: ["Ibagué", "Espinal", "Mariquita"],
    val: ["Cali", "Buenaventura", "Palmira"],
    vau: ["Mitú", "Caruru", "Taraira"],
    vic: ["Puerto Carreño", "Cumaribo", "La Primavera"]
};



const deptosel = document.getElementById('seldepto')
const ciudades = document.getElementById('selciudad')

deptosel.addEventListener("change", function asignarciudades() {
    let depart = document.getElementById("seldepto").value;
    ciudades.innerHTML = "";
    if (depart == "am") {
        llenarselectciudades(deptoscitys.am.sort());
    }
    if (depart == "an") {
        llenarselectciudades(deptoscitys.an.sort());
    }
    if (depart == "ar") {
        llenarselectciudades(deptoscitys.ar.sort());
    }
    if (depart == "at") {
        llenarselectciudades(deptoscitys.at.sort());
    }
    if (depart == "bo") {
        llenarselectciudades(deptoscitys.bo.sort());
    }
    if (depart == "ca") {
        llenarselectciudades(deptoscitys.ca.sort());
    }
    if (depart == "caq") {
        llenarselectciudades(deptoscitys.caq.sort());
    }
    if (depart == "cas") {
        llenarselectciudades(deptoscitys.cas.sort());
    }
    if (depart == "cau") {
        llenarselectciudades(deptoscitys.cau.sort());
    }
    if (depart == "ces") {
        llenarselectciudades(deptoscitys.ces.sort());
    }
    if (depart == "cho") {
        llenarselectciudades(deptoscitys.cho.sort());
    }
    if (depart == "cor") {
        llenarselectciudades(deptoscitys.cor.sort());
    }
    if (depart == "cun") {
        llenarselectciudades(deptoscitys.cun.sort());
    }
    if (depart == "gua") {
        llenarselectciudades(deptoscitys.gua.sort());
    }
    if (depart == "gua") {
        llenarselectciudades(deptoscitys.gua.sort());
    }
    if (depart == "hui") {
        llenarselectciudades(deptoscitys.hui.sort());
    }
    if (depart == "lag") {
        llenarselectciudades(deptoscitys.lag.sort());
    }
    if (depart == "mag") {
        llenarselectciudades(deptoscitys.mag.sort());
    }
    if (depart == "met") {
        llenarselectciudades(deptoscitys.met.sort());
    }
    if (depart == "nar") {
        llenarselectciudades(deptoscitys.nar.sort());
    }
    if (depart == "nsa") {
        llenarselectciudades(deptoscitys.nsa.sort());
    }
    if (depart == "put") {
        llenarselectciudades(deptoscitys.put.sort());
    }
    if (depart == "qui") {
        llenarselectciudades(deptoscitys.qui.sort());
    }
    if (depart == "ris") {
        llenarselectciudades(deptoscitys.ris.sort());
    }
    if (depart == "san") {
        llenarselectciudades(deptoscitys.san.sort());
    }
    if (depart == "san") {
        llenarselectciudades(deptoscitys.san.sort());
    }
    if (depart == "suc") {
        llenarselectciudades(deptoscitys.suc.sort());
    }
    if (depart == "tol") {
        llenarselectciudades(deptoscitys.tol.sort());
    }
    if (depart == "val") {
        llenarselectciudades(deptoscitys.val.sort());
    }
    if (depart == "vau") {
        llenarselectciudades(deptoscitys.vau.sort());
    }
    if (depart == "vic") {
        llenarselectciudades(deptoscitys.vic.sort());
    }
});

function llenarselectciudades(arraycitys) {
    arraycitys.forEach((n) => {
        var option = document.createElement("option");
        option.text = n;
        ciudades.add(option);
    });
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{8,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras y espacios, pueden llevar acentos.
    localidad: /^[a-zA-Z0-9\_\-]{8,16}$/,
    Descripcion: /^[a-zA-Z0-9\_\-]{8,16}$/,
    telefono: /^\d{0,7}$/, // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombres: false,
    fechanac: false,
    apellidos: false,
    telmovil: false,
    correo: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "txtevento":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;

        case "txtnombres":
            validarCampo(expresiones.nombre, e.target, 'nombres');
            break;
        case "txtfechanac":
            //validarCampo(expresiones.fechanacimiento, e.target, 'fechanac');
            break;
        case "txtapell":
            validarCampo(expresiones.localidad, e.target, 'apellidos');
            break;
        case "txtcelular":
            validarCampo(expresiones.telefono, e.target, 'telmovil');
            break;
        case "txtcorreo1":
            validarCampo(expresiones.Descripcion, e.target, 'correo');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {

    if (expresion.test(input.value)) {

        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        //console.log(document.getElementById(`grupo__${campo}`).classList);
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('chkacepto');
    if (campos.usuario && campos.nombres && campos.correo && campos.telmovil && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
