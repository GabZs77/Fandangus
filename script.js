function enviarPergunta() {
  const input = document.getElementById("userInput").value.trim();
  const respostaDiv = document.getElementById("respostaIA");

  if (input === "") {
    respostaDiv.innerHTML = "<p>Por favor, digite uma pergunta.</p>";
    return;
  }

  // Aqui você poderia usar uma API real (como OpenAI)
  respostaDiv.innerHTML = "<p><i>Processando resposta...</i></p>";

  setTimeout(() => {
    // Simulação de uma resposta "inteligente"
    const respostasExemplo = {
      "qual é a capital do brasil": "A capital do Brasil é Brasília.",
      "quem descobriu o brasil": "Pedro Álvares Cabral descobriu o Brasil em 1500.",
      "o que é inteligência artificial": "Inteligência Artificial é o campo da ciência que estuda como fazer máquinas pensarem como humanos."
    };

    const perguntaFormatada = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const resposta = respostasExemplo[perguntaFormatada] || "Desculpe, não tenho uma resposta precisa para isso ainda. Tente outra pergunta!";

    respostaDiv.innerHTML = `<p>${resposta}</p>`;
  }, 1000);
}
