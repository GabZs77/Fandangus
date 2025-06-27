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
        "Authorization": "Bearer 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" // 🔑 Coloque sua chave da OpenAI aqui
      },
      body: JSON.stringify({
        model: "gpt-4", // Use "gpt-3.5-turbo" se não tiver acesso ao GPT-4
        messages: [
          { role: "system", content: "Você é uma IA que responde qualquer pergunta de forma precisa e certeira em português." },
          { role: "user", content: input }
        ],
        temperature: 0.7
      })
    });

    const data = await resposta.json();

    if (data.choices && data.choices[0].message) {
      respostaDiv.innerHTML = `<p>${data.choices[0].message.content.trim()}</p>`;
    } else {
      respostaDiv.innerHTML = "<p>Erro ao receber resposta da IA.</p>";
      console.error(data);
    }
  } catch (error) {
    respostaDiv.innerHTML = "<p>Erro ao conectar com a API.</p>";
    console.error(error);
  }
}
