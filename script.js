
const botoesReceita = document.querySelectorAll(".botao-receita");

botoesReceita.forEach((botao) => {
    botao.addEventListener("click", () => {
        const idReceita = botao.getAttribute("aria-controls");
        const detalhes = document.getElementById(idReceita);

        const estaAberto = botao.getAttribute("aria-expanded") === "true";

        // Alterna a exibição da receita
        botao.setAttribute("aria-expanded", String(!estaAberto));
        detalhes.hidden = estaAberto;

        // Atualiza o texto do botão
        botao.textContent = estaAberto
            ? "Ver ingredientes e preparo"
            : "Fechar receita";
    });
});
