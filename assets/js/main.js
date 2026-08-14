document.querySelector('#year').textContent = new Date().getFullYear();
const modal = document.querySelector('.template-modal');
const modalTitle = document.querySelector('#modal-title');
document.querySelectorAll('.template-card').forEach((card) => card.addEventListener('click', () => { modalTitle.textContent = `${card.dataset.template} canvas preview`; modal.showModal(); }));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
document.querySelector('[data-contact-form]').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-status').textContent = 'Thank you — your enquiry is ready to send once the form is connected.'; });
