
/*Este trecho de código realiza as seguintes ações:*/
// Importa a função selecionaCotacao do arquivo imprimeCotacao.js
import selecionaCotacao from "./imprimeCotacao.js";

// Obtém a referência do elemento HTML com o ID 'graficoDolar'
const graficoDolar = document.getElementById('graficoDolar');

// Cria uma nova instância do gráfico utilizando a biblioteca Chart.js
const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line', // Define o tipo de gráfico como uma linha
    data: {
        labels: [], // Define um array vazio para os rótulos dos dados
        datasets: [{
            label: 'Dólar', // Define o rótulo do conjunto de dados como 'Dólar'
            data: [], // Define um array vazio para os valores dos dados
            borderWidth: 1 // Define a largura da borda do gráfico como 1
        }]
    },
});



// Função para gerar o horário atual
/*Este bloco de código contém uma função chamada geraHorario, que realiza as seguintes ações:*/
function geraHorario() {
    let data = new Date(); // Cria um novo objeto de data
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds(); // Obtém as horas, minutos e segundos da data
    return horario; // Retorna o horário gerado
}

// Função para adicionar dados a um gráfico
/*Este bloco de código contém uma função chamada adicionarDados, que realiza as seguintes ações:
--Recebe como parâmetros o objeto grafico (instância do gráfico), a legenda (rótulo do novo dado) e os dados a serem adicionados.
*/
function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda); // Adiciona a legenda ao array de rótulos do gráfico
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados); // Adiciona os dados ao array de valores do conjunto de dados do gráfico
    })
    grafico.update(); // Atualiza o gráfico para refletir as mudanças nos dados
}

// Cria um novo objeto Worker para executar um script em segundo plano (worker)
let workerDolar = new Worker('./script/workers/workerDolar.js');

// Envia uma mensagem para o worker indicando que a moeda é "usd"
workerDolar.postMessage('usd');

// Adiciona um evento de escuta para receber mensagens do worker
workerDolar.addEventListener("message", event => {
    // Obtém o horário atual utilizando a função geraHorario()
    let tempo = geraHorario();
    
    // Obtém o valor da cotação (ask) a partir dos dados recebidos na mensagem
    let valor = event.data.ask;
    
    // Seleciona e exibe a cotação do dólar utilizando a função selecionaCotacao()
    selecionaCotacao("dolar", valor);
    
    // Adiciona os dados do horário e valor ao gráfico de dólar utilizando a função adicionarDados()
    adicionarDados(graficoParaDolar, tempo, valor);
})


// Seleciona o elemento HTML com o ID 'graficoIene'
const graficoIene = document.getElementById('graficoIene');

// Cria um novo gráfico do tipo 'line' utilizando o elemento selecionado e suas opções
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [], // Array vazio para os rótulos (labels) do gráfico
        datasets: [{
            label: 'Iene', // Rótulo para o conjunto de dados
            data: [], // Array vazio para os valores (dados) do conjunto de dados
            borderWidth: 1 // Largura da borda do gráfico
        }]
    }
});


// Cria um novo objeto Worker utilizando o arquivo do worker especificado no caminho "./script/workers/workerIene.js"
let workerIene = new Worker("./script/workers/workerIene.js");

// Envia uma mensagem para o worker com o conteúdo "iene" utilizando o método postMessage
workerIene.postMessage("iene");

// Adiciona um ouvinte de eventos para capturar a mensagem enviada pelo worker
workerIene.addEventListener("message", event => {
    let tempo = geraHorario(); // Gera o horário atual
    let valor = event.data.ask; // Obtém o valor do evento recebido do worker
    adicionarDados(graficoParaIene, tempo, valor); // Adiciona os dados do horário e valor ao gráfico do Iene
    selecionaCotacao("iene", valor); // Seleciona a cotação do Iene e realiza alguma ação com o valor
});

// Seleciona o elemento HTML com o ID 'graficoLibra'
const graficoLibra = document.getElementById('graficoLibra');

// Cria um novo gráfico do tipo 'line' utilizando o elemento selecionado e suas opções
const graficoParaLibra = new Chart(graficoLibra, {
    type: 'line',
    data: {
        labels: [], // Array vazio para os rótulos (labels) do gráfico
        datasets: [{
            label: 'Libra', // Rótulo para o conjunto de dados
            data: [], // Array vazio para os valores (dados) do conjunto de dados
            borderWidth: 1 // Largura da borda do gráfico
        }]
    }
});


// Cria um novo objeto Worker utilizando o arquivo do worker especificado no caminho "./script/workers/workerLibra.js"
let workerLibra = new Worker("./script/workers/workerLibra.js");

// Envia uma mensagem para o worker com o conteúdo "libra" utilizando o método postMessage
workerLibra.postMessage("libra");

// Adiciona um ouvinte de eventos para capturar a mensagem enviada pelo worker
workerLibra.addEventListener("message", event => {
    let tempo = geraHorario(); // Gera o horário atual
    let valor = event.data.ask; // Obtém o valor do evento recebido do worker
    adicionarDados(graficoParaLibra, tempo, valor); // Adiciona os dados do horário e valor ao gráfico do Libra
    selecionaCotacao("libra", valor); // Seleciona a cotação do Libra e realiza alguma ação com o valor
});