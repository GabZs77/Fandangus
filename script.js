async function enviarPergunta() {
  const input = document.getElementById("userInput").value.trim();
  const respostaDiv = document.getElementById("respostaIA");

  if (input === "") {
    respostaDiv.innerHTML = "<p>Por favor, digite uma pergunta.</p>";
    return;
  }

  respostaDiv.innerHTML = "<p><i>Consultando a IA...</i></p>";

  try {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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" // Troque por sua chave real
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // ou "gpt-4" se você tiver acesso
        messages: [
          {
            role: "system",
            content: "Você é uma IA que responde tudo com precisão e rapidez, em português claro."
          },
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.7
      })
    });

    const data = await resposta.json();

    if (data.choices && data.choices[0].message) {
      respostaDiv.innerHTML = `<p>${data.choices[0].message.content.trim()}</p>`;
    } else {
      respostaDiv.innerHTML = `<p>Erro na resposta da IA. Detalhes: ${JSON.stringify(data)}</p>`;
      console.error(data);
    }
  } catch (error) {
    respostaDiv.innerHTML = `<p>Erro ao conectar com a API: ${error.message}</p>`;
    console.error(error);
  }
}
