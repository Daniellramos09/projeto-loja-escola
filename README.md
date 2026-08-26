# Loja Escola

Projeto educacional de front-end que simula uma pequena jornada de compra.

A base é **funcional, legível e propositalmente incompleta**. O objetivo não é entregar uma loja perfeita, mas oferecer aos estudantes um código que possa ser investigado, criticado e melhorado.

## Páginas

1. `index.html` — vitrine com vários produtos;
2. `produto.html` — detalhes de um produto;
3. `checkout.html` — formulário com dados pessoais, endereço, CEP e pagamento simulado;
4. `sucesso.html` — confirmação da compra simulada.

## Tecnologias

- HTML5 semântico;
- Bootstrap 5;
- CSS próprio;
- JavaScript puro;
- `sessionStorage`.

## Estrutura

```text
loja-escola/
├── index.html
├── produto.html
├── checkout.html
├── sucesso.html
├── README.md
├── ENUNCIADO.md
├── css/
│   └── styles.css
└── js/
    ├── main.js
    ├── product.js
    ├── checkout.js
    └── success.js
```

## Como executar

Você pode abrir `index.html` diretamente no navegador ou executar com um servidor local, por exemplo usando Live Server no VS Code.

Também é possível usar:

```bash
python -m http.server 8000
```

## O que já funciona

- navegação entre as quatro páginas;
- filtro simples de produtos;
- definição de quantidade;
- validação básica do formulário;
- formatação simples do CEP;
- finalização simulada;
- uso de `sessionStorage`;
- alguns cuidados básicos de semântica e acessibilidade.

## O que está propositalmente incompleto

- a página de produto não muda conforme o `id` recebido na URL;
- o resumo da compra é fixo;
- não existe carrinho;
- o botão Buscar CEP ainda não consulta a ViaCEP;
- o visual ainda pode ser refinado;
- a responsividade precisa ser revisada;
- os estados de foco e feedback podem melhorar;
- não existem testes;
- a página de sucesso pode ser acessada diretamente.

## ViaCEP

O checkout possui campos para CEP, logradouro, bairro, cidade e UF. O JavaScript já prepara o CEP, mas a integração com `fetch` foi deixada como atividade.

Documentação oficial: https://viacep.com.br/

## Observação

Este projeto é apenas educacional. Não use dados pessoais reais e não tente implementar pagamentos reais.
