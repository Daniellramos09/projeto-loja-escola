const formProduto = document.querySelector("#formProduto");
const quantidade = document.querySelector("#quantidade");
const feedback = document.querySelector("#produtoFeedback");

formProduto?.addEventListener("submit", (event) => {
  event.preventDefault();
  const quantidadeEscolhida = Number(quantidade.value);

  if (quantidadeEscolhida < 1 || quantidadeEscolhida > 10) {
    feedback.textContent = "Escolha uma quantidade entre 1 e 10.";
    quantidade.focus();
    return;
  }

  sessionStorage.setItem("quantidade", String(quantidadeEscolhida));
  window.location.href = "checkout.html";
});

document.addEventListener("DOMContentLoaded", () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const produtoId = parametrosURL.get('id');
        console.log("O ID do produto acessado é:", produtoId);

        const formProduto = document.getElementById('formProduto');
        const btnComprar = document.getElementById('btnComprar');
        const inputQuantidade = document.getElementById('quantidade');
        const feedback = document.getElementById('produtoFeedback');

        formProduto.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const quantidade = parseInt(inputQuantidade.value);
            
            if (quantidade < 1 || isNaN(quantidade)) {
                feedback.innerHTML = `<span class="text-danger">Por favor, insira uma quantidade válida.</span>`;
                return;
            }

            feedback.innerHTML = `<div class="alert alert-success mt-3 shadow-sm border-0">Sucesso! <strong>${quantidade} unidade(s)</strong> do produto adicionada(s) ao carrinho. <br><small class="text-muted">(Simulação via JS - Produto ID: ${produtoId})</small></div>`;
            
            
            const textoOriginal = btnComprar.innerHTML;
            btnComprar.innerHTML = "✅ Adicionado ao carrinho!";
            btnComprar.classList.replace('btn-laranja', 'btn-success');
            
           
            setTimeout(() => {
                btnComprar.innerHTML = textoOriginal;
                btnComprar.classList.replace('btn-success', 'btn-laranja');
                feedback.innerHTML = "";
            }, 3000);
        });
    });


    document.addEventListener("DOMContentLoaded", () => {
   
    const bancoDeProdutos = [
        {
            id: 1,
            nome: "Mochila Horizonte",
            categoria: "Acessórios",
            descricao: "Uma mochila compacta para quem carrega notebook, caderno, carregador e mais algumas pequenas histórias.",
            precoBase: 189.90,
            imagem: "./midia/img/mochila.png",
            detalhes: ["Compartimento para notebook de até 15 polegadas;", "Dois bolsos externos;", "Alças ajustáveis;", "Material resistente à água."]
        },
        {
            id: 2,
            nome: "Caderno Modular",
            categoria: "Papelaria",
            descricao: "Caderno de capa dura com divisórias e páginas reposicionáveis.",
            precoBase: 59.90,
            imagem: "./midia/img/caderno.png", 
            detalhes: ["Capa dura resistente;", "Divisórias coloridas;", "Folhas que podem ser retiradas e recolocadas."]
        },

        {
            id: 3,
            nome: "Garrafa Fluxo",
            categoria: "Papelaria",
            descricao: "Caderno de capa dura com divisórias e páginas reposicionáveis.",
            precoBase: 74.50,
            imagem: "./midia/img/garrafa", 
            detalhes: ["Capa dura resistente;", "Divisórias coloridas;", "Folhas que podem ser retiradas e recolocadas."]
        },
        {
            id: 4,
            nome: "Luminária Ponto",
            categoria: "Papelaria",
            descricao: "Luminária compacta para mesa com três níveis de intensidade.",
            precoBase: 129.00,
            imagem: "./midia/img/luminaria.png", 
            detalhes: ["Capa dura resistente;", "Divisórias coloridas;", "Folhas que podem ser retiradas e recolocadas."]
        }
        ,
        {
            id: 5,
            nome: "Fone Nuvem",
            categoria: "Eletrônicos",
            descricao: "Fone de ouvido com tecnologia de cancelamento de som.",
            precoBase: 149.90,
            imagem: "./midia/img/headset.webp",
            detalhes: ["Cancelamento de som ativo;", "Bateria de longa duração;", "Conexão Bluetooth 5.0;"]
        },
        {
            id: 6,
            nome: "Estojo Pixel",
            categoria: "Papelaria",
            descricao: "Estojo pequeno para organizar cabos, canetas e acessórios.",
            precoBase: 39.90,
            imagem: "./midia/img/canePixel.webp", 
            detalhes: ["Capa dura resistente;", "Divisórias coloridas;", "Folhas que podem ser retiradas e recolocadas."]
        }
       
    ];

    
    const parametrosURL = new URLSearchParams(window.location.search);
    
    const produtoIdUrl = parseInt(parametrosURL.get('id')) || 1; 
    
   
    const produtoAtual = bancoDeProdutos.find(produto => produto.id === produtoIdUrl);

    
    if (produtoAtual) {
        document.getElementById('imagemProduto').src = produtoAtual.imagem;
        document.getElementById('imagemProduto').alt = produtoAtual.nome;
        document.getElementById('categoriaProduto').innerText = produtoAtual.categoria;
        document.getElementById('nomeProduto').innerText = produtoAtual.nome;
        document.getElementById('descricaoProduto').innerText = produtoAtual.descricao;
        
       
        const listaDetalhes = document.getElementById('listaDetalhes');
        listaDetalhes.innerHTML = ""; 
        produtoAtual.detalhes.forEach(detalhe => {
            const li = document.createElement('li');
            li.innerText = detalhe;
            listaDetalhes.appendChild(li);
        });

       
        const atualizarPrecoNaTela = (valor) => {
            document.getElementById('precoProduto').innerText = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        };
        atualizarPrecoNaTela(produtoAtual.precoBase);

        
        const inputQuantidade = document.getElementById('quantidade');
        
        
        inputQuantidade.addEventListener('input', () => {
            let quantidade = parseInt(inputQuantidade.value);
            
            
            if (quantidade < 1 || isNaN(quantidade)) {
                quantidade = 1;
            }

           
            const precoTotal = produtoAtual.precoBase * quantidade;
            atualizarPrecoNaTela(precoTotal);
        });
    }
});