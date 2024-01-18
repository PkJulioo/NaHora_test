document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let startX, scrollLeft;

  slider.addEventListener("mousedown", handleDragStart);
  slider.addEventListener("touchstart", handleDragStart);

  document.addEventListener("mouseup", handleDragEnd);
  document.addEventListener("touchend", handleDragEnd);

  function handleDragStart(e) {
    const isMobile = e.type === "touchstart";
    startX = isMobile ? e.touches[0].pageX : e.pageX;
    scrollLeft = slider.scrollLeft;

    slider.addEventListener(
      isMobile ? "touchmove" : "mousemove",
      handleDragMove
    );
  }

  function handleDragMove(e) {
    const isMobile = e.type === "touchmove";
    const currentX = isMobile ? e.touches[0].pageX : e.pageX;
    const distance = currentX - startX;

    slider.scrollLeft = scrollLeft - distance;
  }

  function handleDragEnd() {
    slider.removeEventListener("touchmove", handleDragMove);
    slider.removeEventListener("mousemove", handleDragMove);
  }

  // Adiciona um manipulador de eventos de clique para os botões de navegação
  document
    .querySelector(".bx-button-left")
    .addEventListener("click", function () {
      slider.scrollLeft -= 300;
    });

  document
    .querySelector(".bx-button-right")
    .addEventListener("click", function () {
      slider.scrollLeft += 300;
    });
});
