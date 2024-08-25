  const sticker = document.querySelector(".sticker");
  const closeBtn = sticker.querySelector(".sticker__close");

  closeBtn.addEventListener("click", () => {
    sticker.classList.add('sticker--hidden')
    console.log(closeBtn);
  });
