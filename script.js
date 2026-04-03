// Nosso banco de dados bruto.
let estoque = [
    {nome: "Espada Longa", tipo: "Arma", preco: 150},
    {nome: "Poção de Vida superior", tipo: "Pocao", preco: 250},
    {nome: "Escudo de Madeira", tipo: "Armadura", preco: 80},
    {nome: "Poção de Mana superior", tipo: "Pocao", preco: 300},
    {nome: "Espada Curta", tipo: "Arma", preco: 90},
    {nome: "Poção de Vida media", tipo: "Pocao", preco: 120},
    {nome: "Escudo de Aço", tipo: "Armadura", preco: 280},
    {nome: "Poção de Mana média", tipo: "Pocao", preco: 160},
    {nome: "Katana", tipo: "Arma", preco: 350},
    {nome: "Poção de Vida baixa", tipo: "Pocao", preco: 50},
    {nome: "Escudo de Mithril", tipo: "Armadura", preco: 480},
    {nome: "Poção de Mana simples", tipo: "Pocao", preco: 30}

];

function processarPocoes(){
    // 1. FILTER: Pega a lista original e deixa só quem tem tipo == "Poção"
    let apenasPocoes = estoque.filter(function(item){
        return item.tipo === "Pocao";
    });
    // 2. MAP: Pega a lista de poções e transforma cada uma em um bloco de HTML

    let cartoesHtml = apenasPocoes.map(function(item){
        return `
        <div class="col-md-4 mb-3">
            <div class="card bg-secondary text-white p-3 cartao">
                <h4>${item.nome}</h4>
                <p>Preço: ${item.preco} Ouros</p>
            </div>
        </div>
        `;
    });
    // O Map devolve um Array de textos HTML. Usamos o join('') para juntar tudo em um texto só.
    
    document.getElementById('vitrine').innerHTML = cartoesHtml.join('');
    calcularTotal(apenasPocoes);
    
    // Chamamos o cálculo matemático na sequencia.

        function calcularTotal(apenasPocoes){
    
    // 3. REDUCE: Pega a lista inteira, vai espremendo e somando numa variável chamada 'acumulador'
    
    let somaFinal = apenasPocoes.reduce(function(acumulador,itemAtual){
        return acumulador + itemAtual.preco;
        }, 0);
    
    // Esse 0 é o valor inicial do acumulador!
    
    document.getElementById('valor-total').innerHTML = `
    Valor do Estoque: ${somaFinal} Ouros`;
    }
    
}

function processarArmas(){
    // 1. FILTER: Pega a lista original e deixa só quem tem tipo == "Armas"
    let apenasArmas = estoque.filter(function(item){
        return item.tipo === "Arma";
    });
    // 2. MAP: Pega a lista de Armas e transforma cada uma em um bloco de HTML

    let cartoesHtml = apenasArmas.map(function(item){
        return `
        <div class="col-md-4 mb-3">
            <div class="card bg-secondary text-white p-3 cartao">
                <h4>${item.nome}</h4>
                <p>Preço: ${item.preco} Ouros</p>
            </div>
        </div>
        `;
    });
    // O Map devolve um Array de textos HTML. Usamos o join('') para juntar tudo em um texto só.
    
    document.getElementById('vitrine').innerHTML = cartoesHtml.join('');
    calcularTotal(apenasArmas);
    
    // Chamamos o cálculo matemático na sequencia.

        function calcularTotal(apenasArmas){
    
    // 3. REDUCE: Pega a lista inteira, vai espremendo e somando numa variável chamada 'acumulador'
    
    let somaFinal = apenasArmas.reduce(function(acumulador,itemAtual){
        return acumulador + itemAtual.preco;
        }, 0);
    
    // Esse 0 é o valor inicial do acumulador!
    
    document.getElementById('valor-total').innerHTML = `
    Valor do Estoque: ${somaFinal} Ouros`;
    }
    
}

function processarArmaduras(){
    let apenasArmaduras = estoque.filter(function(item){
        return item.tipo === "Armadura";
    });

    let cartoesHtml = apenasArmaduras.map(function(item){
        return `
        <div class="col-md-4 mb-3">
            <div class="card bg-secondary text-white p-3 cartao">
                <h4>${item.nome}</h4>
                <p>Preço: ${item.preco} Ouros</p>
            </div>
        </div>
        `;
    });
    
    document.getElementById('vitrine').innerHTML = cartoesHtml.join('');
    calcularTotal(apenasArmaduras);
    
    function calcularTotal(apenasArmaduras){
       
    let somaFinal = apenasArmaduras.reduce(function(acumulador,itemAtual){
        return acumulador + itemAtual.preco;
        }, 0);
    
    document.getElementById('valor-total').innerHTML = `
    Valor do Estoque: ${somaFinal} Ouros`;
    }
    
}


