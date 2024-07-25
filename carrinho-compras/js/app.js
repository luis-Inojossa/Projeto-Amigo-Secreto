let totalGeral = 0;
document.getElementById ('lista-produtos').innerHTML = '';
document.getElementById ('valor-total').textContent = 'R$ 0';
function adicionar(){
// recuperar valores. Nome do produto, quantidade e valor
let produto = document.getElementById ('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitário = produto.split('R$')[1];
let quantidade = document.getElementById ('quantidade').value;
//calcular o preço,  o nosso subtotal
let preço = quantidade * valorUnitário;
//adicionar no carrinho
let carrinho = document.getElementById ('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
</section>`;
let totalGeral = totalGeral + preço;
let campoTotal = document.getElementById ('valor-total');
campoTotal.textContent =  `R$${totalGeral}`;





//atualizar o valor total
}


function limpar(){

}