// index
//preguntas y respuestas
const botonCorrecto = document.getElementById("btn-correcto")
const botonIncorrecto = document.getElementById("btn-incorrecto")
const botonCorrectoDos = document.getElementById("btn-correcto2")
const botonIncorrectoDos = document.getElementById("btn-incorrecto2")
const botonCorrectoTres =document.getElementById ("btn-correcto3")
const botonIncorrectoTres =document.getElementById ("btn-incorrecto3")
const botonFinalizar = document.getElementById("finalizarPreguntas")
let puntaje = 0 


botonCorrecto.addEventListener ("click", cambioColor1)
botonIncorrecto.addEventListener("click",cambioColorDos1)
botonCorrectoDos.addEventListener ("click", cambioColor2)
botonIncorrectoDos.addEventListener("click",cambioColorDos2)
botonCorrectoTres.addEventListener ("click", cambioColor3)
botonIncorrectoTres.addEventListener("click",cambioColorDos3)
botonFinalizar.onclick =()=> {alert(`tu puntaje es ${puntaje}`)} 


function cambioColor1 (){
    botonCorrecto.style.backgroundColor= "green";  
    puntaje++;
    console.log(puntaje);
     Swal.fire({
           title: 'Felicidades!',
           text: 'tu respuesta es correcta',
           imageUrl: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/19241.png',
           imageHeight: 200,
           imageAlt: 'Custom image',
         })}
       

function cambioColorDos1 (){
    botonIncorrecto.style.backgroundColor= "red"}


function cambioColor2 (){
    botonCorrectoDos.style.backgroundColor= "green";
    puntaje++;
    console.log(puntaje);
    Swal.fire({
        title: 'Felicidades!',
        text: 'tu respuesta es correcta',
        imageUrl: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/19241.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }


function cambioColorDos2 (){
    botonIncorrectoDos.style.backgroundColor= "red"
}

function cambioColor3 (){
    botonCorrectoTres.style.backgroundColor= "green";
    puntaje++;
    console.log(puntaje);
    Swal.fire({
        title: 'Felicidades!',
        text: 'tu respuesta es correcta',
        imageUrl: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/19241.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

}

function cambioColorDos3 (){
    botonIncorrectoTres.style.backgroundColor= "red"
}


localStorage.setItem("puntaje", puntaje)
let puntajeFinal =localStorage.getItem("puntaje")
if(puntajeFinal >= 3) {console.log("Felicidades! obtuviste uno de los mejores resultados")}
else {console.log("Parece que te queda aprender un poco más")}


// caja de comentarios
const nuevoComentario = document.getElementById ("comentarios")
const valoracion = document.getElementById("valoracionPagina");
const boton = document.getElementById("dejarComentario")
const parrafo = document.getElementById("cajaDeComentarios")


boton.onclick = () => 
{let parrafo = document.getElementById("cajaDeComentarios");
parrafo.append(nuevoComentario.value);
let puntaje = valoracion.value;
if (puntaje == 10) {alert ("Nos alegra que te haya gustado la página!")}
else if (puntaje < 10) {alert ("esperamos seguir mejorando")}; }


//Viajes 
//Recomendación
class ProvinciaRecomendada {
    constructor (nombre, localizacion) {
    this.nombre = nombre;
    this.localizacion = localizacion; 
    }
}

const ListaProvinciasRecomendadas = []

const NuevaProvincia = () =>
{let nombre = document.getElementById("ProvinciaRecomendada").value
let localizacion = document.getElementById("NorteSur").value
let NuevaProvincia = new ProvinciaRecomendada (nombre, localizacion);
ListaProvinciasRecomendadas.push(NuevaProvincia);
localStorage.setItem ("ProvinciaRecomendada", JSON.stringify(ListaProvinciasRecomendadas));
return ListaProvinciasRecomendadas
}
let agregarProvincia = document.getElementById("DejarRecomendacion")
agregarProvincia.addEventListener("click", NuevaProvincia)



//Formulario
let NombreUsuario = document.querySelector("#NombreUsuario")
let EmailUsuario = document.querySelector("#EmailUsuario")
let ConsultaUsuario = document.querySelector("#ConsultaUsuario")
let DejarConsulta = document.querySelector ("#DejarConsulta")

function agregarConsulta () {
localstorage.setItem("NombreUsuario", NombreUsuario.value);
localStorage.setItem("EmailUsuario", EmailUsuario.value);
localStorage.setItem("ConsultaUsuario", ConsultaUsuario.value)
}

DejarConsulta.addEventListener ("click", agregarConsulta)








