// Seleciona todos os elementos que possuem o atributo 'data-lista' e armazena-os na variável 'lista'
const lista = document.querySelectorAll('[data-lista]');

// Define uma função chamada 'selecionaCotacao' que recebe o nome e valor da cotação como parâmetros
function selecionaCotacao(nome, valor) {
    // Para cada elemento na lista
    lista.forEach((listaEscolhida) => {
        // Verifica se o ID do elemento é igual ao nome da cotação recebido como parâmetro
        if (listaEscolhida.id == nome) {
            // Chama a função 'imprimeCotacao' passando o elemento da lista, o nome da cotação e o valor como argumentos
            imprimeCotacao(listaEscolhida, nome, valor);
        }
    })
}

// Define uma função chamada 'imprimeCotacao' que recebe o elemento da lista, o nome e o valor da cotação como parâmetros
function imprimeCotacao(lista, nome, valor) {
    // Limpa o conteúdo atual do elemento da lista
    lista.innerHTML = '';
    
    // Define um objeto 'plurais' que mapeia os nomes das moedas para suas formas no plural
    const plurais = {
        "dolar": "dolares",
        "iene": "ienes",
        "libra": "libras"
    }
    
    // Loop que itera multiplicando o valor da cotação por potências de 10
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        // Cria um novo elemento de lista ('li')
        const listaItem = document.createElement('li');
        
        // Define o conteúdo do elemento da lista com o valor formatado da cotação
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`;
        
        // Adiciona o elemento da lista ao elemento pai
        lista.appendChild(listaItem);
    }
}
/*A declaração export default selecionaCotacao; é usada para exportar a função selecionaCotacao como o valor padrão do módulo JavaScript.
Isso permite que a função selecionaCotacao seja importada e usada em outros arquivos JavaScript. O export default indica que a função é a exportação principal do módulo, o que significa que, ao importar o módulo, o valor atribuído a selecionaCotacao será a função exportada.*/
export default selecionaCotacao;
