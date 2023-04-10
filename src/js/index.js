const formulario = document.getElementById("formulario")
const campoUsuarioDigida = document.querySelectorAll(".quadrado")
const validaCampo = document.querySelectorAll(".obrigatorio")
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", (validacao) => {
    validacao.preventDefault()
    validaNome()
    validaEmail()
    validaTelefone()
    validaMensagem()
})

function campoNaoPreenchido (numeroCampo){
    campoUsuarioDigida[numeroCampo].style.border = '1px solid #F52E2E';
    validaCampo[numeroCampo].style.display = 'block';
}

function campoPreenchido (numeroCampo){
    campoUsuarioDigida[numeroCampo].style.border = '1px solid #00C22B';
    validaCampo[numeroCampo].style.display = 'none';
}

function validaNome(){
    if (campoUsuarioDigida[0].value.length < 3){
        campoNaoPreenchido(0)

    } else{
        campoPreenchido(0)
    }
}

function validaEmail(){
    if(!emailRegex.test(campoUsuarioDigida[1].value)){
        campoNaoPreenchido(1)

    } else{
        campoPreenchido(1)
    }
}

function validaTelefone(){
    if (campoUsuarioDigida[2].value.length < 11){
        campoNaoPreenchido(2)

    } else{
        campoPreenchido(2)
    }
}

function validaMensagem(){
    if (campoUsuarioDigida[3].value.length < 3){
        campoNaoPreenchido(3)

    } else{
        campoPreenchido(3)
    }
}


