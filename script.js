// Nosso banco de dados bruto.
let estoque = [
    {nome: "Espada Longa", tipo: "Arma", preco: 150},
    {nome: "Poção de Vida", tipo: "Pocao", preco: 50},
    {nome: "Escudo de Madeira", tipo: "Armadura", preco: 80},
    {nome: "Poção de Mana", tipo: "Pocao", preco: 60}
];

function processarEstoque(){
    // 1. FILTER: Pega a lista original e deixa só quem tem tipo == "Poção"
    let apenasPocoes = estoque.filter(function(item){
        return item.tipo === "Pocao";
    });
    // 2. MAP: Pega a lista de poções e transforma cada uma em um bloco de HTML

    let cartoesHtml = apenasPocoes.map(function(item){
        return `
        <div class="col-md-4 mb-3">
            <div class="card bg-secondary text-white p-3">
                <h4>${item.nome}</h4>
                <p>Preço: ${item.preco} Ouros</p>
            </div>
        </div>
        `;
    });
    // O Map devolve um Array de textos HTML. Usamos o join('') para juntar tudo em um texto só.
    
    document.getElementById('vitrine').innerHTML = cartoesHtml.join('');
    calcularTotal();
    
    // Chamamos o cálculo matemático na sequencia.

        function calcularTotal(){
    
    // 3. REDUCE: Pega a lista inteira, vai espremendo e somando numa variável chamada 'acumulador'
    
    let somaFinal = estoque.reduce(function(acumulador,itemAtual){
        return acumulador + itemAtual.preco;
        }, 0);
    
    // Esse 0 é o valor inicial do acumulador!
    
    document.getElementById('valor-total').innerHTML = `
    Valor do Estoque: ${somaFinal} Ouros`;
    }
    
}


