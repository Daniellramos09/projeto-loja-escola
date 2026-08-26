# Exercício — Evoluindo a Loja Escola

## Contexto

Você recebeu o código de uma pequena loja virtual criada como protótipo. Ela funciona, mas ainda possui decisões simplificadas, partes incompletas e oportunidades de melhoria.

Seu trabalho será **investigar, compreender, testar e evoluir o projeto**.

A meta não é apenas “deixar bonito”. Você deverá justificar suas decisões usando HTML semântico, acessibilidade, CSS, Bootstrap e JavaScript.

## Parte 1 — Pesquise o framework antes de modificar

O projeto utiliza **Bootstrap**.

Antes de começar as alterações, pesquise a documentação oficial e registre as respostas em um arquivo chamado `PESQUISA.md`.

Responda, com suas próprias palavras:

1. O que é Bootstrap e qual problema ele tenta resolver?
2. Como funciona o sistema de Grid?
3. O que significam classes como `container`, `row`, `col-md-6`, `d-flex` e `gap-3`?
4. O que são breakpoints?
5. Qual a diferença entre uma classe do Bootstrap e uma classe criada no `styles.css`?
6. Quais riscos existem ao depender excessivamente de um framework CSS?
7. Encontre um recurso do Bootstrap que não esteja sendo usado no projeto e explique onde poderia ser aplicado.

Não copie a documentação. O objetivo é conseguir explicar o framework.

## Parte 2 — Conheça o projeto

Antes de alterar o código:

1. execute o projeto;
2. navegue pelas quatro páginas;
3. teste o filtro de produtos;
4. altere a quantidade;
5. teste o formulário com dados inválidos;
6. conclua uma compra simulada;
7. observe HTML, Console e `sessionStorage` no DevTools.

Depois, represente o fluxo:

```text
Vitrine → Produto → Checkout → Sucesso
```

Acrescente quais dados deveriam viajar de uma etapa para outra.

## Parte 3 — HTML semântico e acessibilidade

Encontre e implemente **pelo menos quatro melhorias**.

Investigue:

- hierarquia de títulos;
- `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`;
- labels;
- navegação por teclado;
- foco visível;
- contraste;
- `aria-live`;
- feedback de erro;
- experiência com leitores de tela.

Explique o motivo de cada alteração.

## Parte 4 — Evolua o visual

O CSS atual resolve apenas o básico.

Crie uma identidade visual mais consistente.

Requisitos mínimos:

- definir uma pequena paleta;
- melhorar tipografia e espaçamento;
- melhorar `hover` e `focus`;
- revisar os cartões;
- melhorar a página de detalhes;
- melhorar o formulário;
- revisar telas menores.

Você pode usar Bootstrap, CSS próprio ou combinar os dois.

Não vale substituir tudo por um template pronto.

## Parte 5 — Produto dinâmico

A página inicial possui URLs como:

```text
produto.html?id=1
produto.html?id=2
```

Porém, `produto.html` sempre mostra a mesma mochila.

Pesquise e use:

- `URLSearchParams`;
- arrays e objetos;
- manipulação do DOM.

Faça a página carregar os dados corretos conforme o `id`.

Considere nome, categoria, descrição, preço, detalhes e imagem ou ilustração.

Trate também um `id` inexistente.

## Parte 6 — Integração com ViaCEP

O checkout já possui um campo CEP e um botão **Buscar CEP**.

Pesquise a documentação oficial da ViaCEP antes de programar.

Fluxo esperado:

1. usuário digita o CEP;
2. aplicação remove caracteres como `-`;
3. aplicação valida se existem 8 números;
4. interface informa carregamento;
5. JavaScript usa `fetch`;
6. resposta é convertida para JSON;
7. campos de endereço são preenchidos;
8. erros precisam ser tratados.

Preencha automaticamente:

- logradouro;
- bairro;
- cidade;
- UF.

O número continua sendo preenchido pelo usuário.

Trate:

- CEP incompleto;
- CEP inexistente;
- falha de internet;
- segunda busca;
- campos ausentes na resposta.

A mensagem de carregamento, sucesso ou erro deve ser acessível.

## Parte 7 — JavaScript

O JavaScript deve continuar:

- separado do HTML;
- com nomes claros;
- dividido em responsabilidades compreensíveis;
- sem duplicação desnecessária;
- sem bibliotecas extras para resolver problemas simples.

Escolha **duas melhorias adicionais**:

- resumo do checkout baseado no produto;
- cálculo de preço × quantidade;
- carrinho com `localStorage`;
- contador de itens;
- máscara de telefone;
- filtro por categoria;
- ordenação de produtos;
- impedir acesso direto à página de sucesso;
- mensagem de produto inexistente.

## Parte 8 — Testes

Teste pelo menos:

- navegação por teclado;
- modo responsivo;
- formulário vazio;
- e-mail inválido;
- CEP inválido;
- CEP real;
- CEP inexistente;
- `produto.html?id=1`;
- outro produto;
- `produto.html?id=999`;
- atualização das páginas;
- Console do navegador.

## Entregáveis

O repositório final deve conter:

```text
index.html
produto.html
checkout.html
sucesso.html
css/
js/
README.md
PESQUISA.md
```

Acrescente também ao `README.md`:

```text
## Melhorias realizadas
```

Explique ali as principais decisões do grupo.

## Critérios de avaliação

1. HTML e semântica;
2. acessibilidade;
3. compreensão do Bootstrap;
4. CSS;
5. clareza do JavaScript;
6. integração ViaCEP;
7. responsividade;
8. capacidade de explicar as decisões.

## Regra principal

Você pode pesquisar documentação, exemplos e referências. Porém, antes de usar um trecho de código, precisa ser capaz de responder:

> O que este código faz e por que ele está aqui?
