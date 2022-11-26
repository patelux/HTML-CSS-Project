(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-buy-open]'),
      closeModalBtn: document.querySelector('[data-buy-close]'),
      modal: document.querySelector('[data-buy]'),
      body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();