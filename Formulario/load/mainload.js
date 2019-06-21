var load;

function loading() {
    load = setTimeout(showPage, 3000);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  swal({
  title: "Bom trabalho!",
  text: "Cadastro Concluído com Sucesso",
  icon: "success",
}).then((result) => {
  if (result.value) {
    location.href = "../index.html"
  }
});
}
