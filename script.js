document.addEventListener("DOMContentLoaded", function () {
  const btnOpcoes = document.querySelectorAll(".btn-opcao");
  const estrelas = document.querySelectorAll(".box-ratting input");
  const bxScore1 = document.querySelector(".bx-score1");
  const bxScore2 = document.querySelector(".bx-score2");

  btnOpcoes.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("btn-opcao-selecionado");

      // Adiciona ou remove o ícone de desfazer paeh
      const icon = document.createElement("i");
      const iconDiv = btn.querySelector(".icon-x");
      icon.classList.add("fa-x", "fa-solid", "btn-desfazer-icon");

      if (btn.classList.contains("btn-opcao-selecionado")) {
        iconDiv.style.display = "flex"; // Torna a div visível
        iconDiv.appendChild(icon); // Adiciona o ícone(minha div x) de desfazer à div
      } else {
        iconDiv.style.display = "none"; // Oculta a div x
        const existingIcon = iconDiv.querySelector(".btn-desfazer-icon");
        if (existingIcon) {
          iconDiv.removeChild(existingIcon);
        }
      }
    });
  });

  //Parte de controle das estrelass
  estrelas.forEach(function (estrela, index) {
    estrela.addEventListener("click", function () {
      // Calcula a média das avaliações
      const avaliacoes = index + 1.0; // Ajusta para começar de 1
      const media = calcularMedia(avaliacoes);

      // Atualiza o bx-score1 com o valor da média
      bxScore1.textContent = (6 - avaliacoes).toFixed(1);

      // Atualiza o bx-score2 com o número de avaliações até o momento
      bxScore2.textContent = `(${1})`;
    });
  });

  function calcularMedia(avaliacoes) { 
    // lógica para calcular a média. 
    // Estou usando um valor fixo apenas para a demonstração
    const valorFixo = 5.0;
    const novaMedia = (valorFixo + avaliacoes) / 2;
    return novaMedia;
  } 
});
