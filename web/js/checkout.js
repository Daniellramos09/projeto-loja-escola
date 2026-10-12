// 
const form = document.querySelector("#checkoutForm");
//const form = document.getElementById("checkoutForm");
const cepInput = document.querySelector("#cep");
const buscarCepButton = document.querySelector("#buscarCep");
const cepFeedback = document.querySelector("#cepFeedback");

function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

function formatarCep(valor) {
  const numeros = somenteNumeros(valor).slice(0, 8);
  if (numeros.length <= 5) return numeros;
  return `${numeros.slice(0, 5)}-${numeros.slice(5)}`;
}

function cepValido(cep) {
  return somenteNumeros(cep).length === 8;
}


form?.addEventListener("submit", (event) => {
  event.preventDefault();

  cepInput.setCustomValidity(cepValido(cepInput.value) ? "" : "CEP inválido");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    form.querySelector(":invalid")?.focus();
    return;
  }

  const nome = document.querySelector("#nome").value.trim();
  sessionStorage.setItem("clienteNome", nome);
  sessionStorage.setItem("pedidoNumero", `PED-${Math.floor(100000 + Math.random() * 900000)}`);
  window.location.href = "sucesso.html";
});




document.addEventListener("DOMContentLoaded", () => {

  const inputCep = document.getElementById('cep');
  const inputEndereco = document.getElementById('logradouro');
  const inputBairro = document.getElementById('bairro');
  const inputCidade = document.getElementById('cidade');
  const inputUf = document.getElementById('estado');
  const inputNumero = document.getElementById('numero');


  const buscarCep = async () => {

    const cepLimpo = inputCep.value.replace(/\D/g, '');


    if (cepLimpo.length === 8) {
      try {

        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const dados = await resposta.json();


        if (dados.erro) {
          alert("CEP não encontrado.");
          return;
        }


        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;
        inputUf.value = dados.uf;


        inputNumero.focus();

      } catch (erro) {
        console.error("Erro ao buscar o CEP:", erro);
        alert("Erro ao conectar com o servidor de CEP.");
      }
    }
  };


  inputCep.addEventListener('blur', buscarCep);


});
