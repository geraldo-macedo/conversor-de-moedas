// Definição da função assíncrona conectaAPI()
async function conectaAPI() {
    // Faz uma solicitação à API externa usando fetch e aguarda a resposta
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    // Converte a resposta em formato JSON
    const conectaTraduzido = await conecta.json();
    // Envia a resposta para o contexto que criou o objeto Worker usando postMessage
    postMessage(conectaTraduzido.USDBRL);
}

// Adiciona um ouvinte de eventos para receber mensagens do objeto Worker
addEventListener("message", () => {
    // Chama a função conectaAPI() para a primeira chamada à API
    conectaAPI();
    // Define um intervalo de tempo para chamar a função conectaAPI() a cada 5 segundos
    setInterval(() => conectaAPI(), 5000);
})
