var nome = document.querySelector("#first").value;
var sobrenome = document.querySelector("#last").value;
var email = document.querySelector("#email");
var senha = document.querySelector("#pass");
var btn = document.querySelector("#btn-form");

// Funcoes de validacao
//validacaonome
function validaNome(){
    var input = document.getElementById('first').value;
    if(input === "" || input.length < 2){
      swal({
        title: "Erro!!",
        text: "Digite o nome com minimo dois caracteres",
        button: "Aww yiss!", })
    }else{
      return true;
    }
}
//validacao do sobrenome
function validaSobre(){
    var input = document.getElementById('last').value;
    if(input === "" || input.length < 2){
      swal({
        title: "Erro!!",
        text: "Digite o Sobrenome com minimo dois caracteres",
        button: "Aww yiss!", })
    }else{
      return true;
    }
}
//validacao do email
function validaEmail(){
    var email = document.getElementById('email').value;

    if((email != "") && (email.indexOf("@")  != -1)){
        if(email.indexOf(".") > email.indexOf("@")){
          return true;
        }else{
          swal({
            title: "Erro!!",
            text: "Digite um Email valido",
            button: "Aww yiss!", });
        }
      }else{
        swal({
          title: "Erro!!",
          text: "Digite um Email valido",
          button: "Aww yiss!", });
      }

}
//validacao da senha
function validaPass(){
    var pass = document.getElementById('pass').value;
    var re;

    if(pass.length < 6) {
      swal({
        title: "Erro!!",
        text: "Pelo menos 6 caracteres!",
        button: "Aww yiss!", });
      return false;
    }
    re = /[0-9]/;
      if(!re.test(pass)) {
        swal({
          title: "Erro!!",
          text: "a senha deve conter pelo menos um número (0-9)!",
          button: "Aww yiss!", });
        pass.focus();
        return false;
      }
      re = /[a-z]/;
     if(!re.test(pass)) {
       swal({
         title: "Erro!!",
         text: "a senha deve conter pelo menos uma letra minúscula (a-z)!",
         button: "Aww yiss!", });
       pass.focus();
       return false;
     }
     else {
       return true;
     }

}
//verificandoInputs
var inputs = $('input').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('button').prop('disabled', !preenchidos);
}
