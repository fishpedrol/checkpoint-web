function initsys() {

    alert('Bem Vindo ao Cadastro de Usuário!');

    let name = prompt('Digite seu nome:');

    alert(`Olá, ${name}!`);

     // nao irei passar a variavel password no console.log para evitar um suposto vazamento de dados  
    
    let idade = prompt('Digite sua idade para o Cadastro:');
    let mail = prompt('Digite seu Email para o Cadastro:');
    let password = prompt('Digite sua senha para o Cadastro:');

    alert('Cadastro realizado! Veja os detalhes no console.');

    nao estou passando a variavi
    console.log(`Nome: ${name}  \n Idade: ${idade}  \n Email: ${mail}  \n Senha: XXXXXX`);

    alert('A seguir, veja os detalhes do vinho no console.');

    let vinhos = [
        { nome: "Cantinho do Vale", tipos: "Tinto, Branco, Rosé", estoque: 10 },
        { nome: "Salton", tipos: "Tinto, Branco, Rosé", estoque: 20 },
        { nome: "Dom Nogueira", tipos: "Tinto, Branco, Rosé", estoque: 30 }
    ];

    console.log("🍷 Vinhos disponíveis:");
    console.log('Nome: Cantinho do Vale, Salton, Dom Nogueira \n Tipo: Tinto, Branco, Rosé \n Safra: 2015, 2012, 2000 \n Estoque: 10, 20, 30');

    let vinho = prompt('Digite o nome do vinho que deseja comprar:');
    let type = prompt('Digite o tipo do vinho que deseja comprar:');
    let safra =  prompt('Digite a safra do vinho que deseja comprar:');
    let qtd = prompt('Digite a quantidade que deseja comprar:');

    alert(`🧾 Escolha do cliente \n Vinho ${vinho}. \n Tipo ${type}. \n Safra ${safra}. \n Quantidade ${qtd}. \n Clique Enter para confirmar sua compra!`);

    alert('✅ Compra confirmada! \n Obrigado por comprar conosco!');

}
