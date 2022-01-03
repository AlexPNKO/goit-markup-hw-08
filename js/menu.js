(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-menu-btn"),
    closeMenuBtn: document.querySelector(".close-menu-btn"),
    modal: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

  (() =>{
  const menuBtnRef = document.querySelector("[data-menu-button]");
  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
  });
  })();