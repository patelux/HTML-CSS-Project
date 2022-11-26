(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-readmore]'),
    closeModalBtn: document.querySelector('[data-readmore-close]'),
    modal: document.querySelector('[data-readmore-open]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
