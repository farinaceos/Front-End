
/*
CASE SENSITIVE - Reconhece letras maiusuclas e minusculas

por Tag: getElementByTagName()
por Id:getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector("#assunto")

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = "Nome Válido";
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no maximo 100 Caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulario enviado com sucesso!')
    } else {
        alert('Preencha o formulario corretamente e tente novamente')
    }
}


function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}