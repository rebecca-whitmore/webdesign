document.querySelector('#year').textContent = new Date().getFullYear();
const modal = document.querySelector('.template-modal');
const modalTitle = document.querySelector('#modal-title');
const modalContent = document.querySelector('.modal-content');
const externalPreview = document.querySelector('.modal-external');
const previewFrame = externalPreview.querySelector('iframe');
document.querySelectorAll('.template-card').forEach((card) => card.addEventListener('click', () => {
  modalTitle.textContent = `${card.dataset.template} canvas preview`;
  const isExternal = Boolean(card.dataset.previewUrl);
  modalContent.hidden = isExternal;
  externalPreview.classList.toggle('is-active', isExternal);
  previewFrame.src = isExternal ? card.dataset.previewUrl : 'about:blank';
  modal.showModal();
}));
const closeModal = () => { previewFrame.src = 'about:blank'; modal.close(); };
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.querySelector('[data-contact-form]').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-status').textContent = 'Thank you — your enquiry is ready to send once the form is connected.'; });
