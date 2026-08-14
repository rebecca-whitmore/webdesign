document.querySelector('#year').textContent = new Date().getFullYear();
const modal = document.querySelector('.template-modal');
const modalTitle = document.querySelector('#modal-title');
const modalContent = document.querySelector('.modal-content');
const externalPreview = document.querySelector('.modal-external');
const previewFrame = externalPreview.querySelector('iframe');
const externalPreviewLink = externalPreview.querySelector('.external-preview-link');
document.querySelectorAll('.template-card[data-preview-url]').forEach((card) => card.addEventListener('click', () => {
  modalTitle.textContent = `${card.dataset.template} canvas preview`;
  const isExternal = Boolean(card.dataset.previewUrl);
  modalContent.hidden = isExternal;
  externalPreview.classList.toggle('is-active', isExternal);
  previewFrame.title = `${card.dataset.template} canvas preview`;
  previewFrame.src = isExternal ? card.dataset.previewUrl : 'about:blank';
  externalPreviewLink.href = isExternal ? card.dataset.previewUrl : '#';
  modal.showModal();
}));
const closeModal = () => { previewFrame.src = 'about:blank'; modal.close(); };
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
const contactForm = document.querySelector('[data-contact-form]');
const formStatus = contactForm.querySelector('.form-status');
const submitButton = contactForm.querySelector('[type="submit"]');
const forminit = typeof Forminit !== 'undefined' ? new Forminit() : null;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!forminit) {
    formStatus.textContent = 'The form could not load. Please email contact@rebeccawhitmore.com instead.';
    return;
  }
  submitButton.disabled = true;
  formStatus.textContent = 'Sending your enquiry…';
  const { error } = await forminit.submit('fkhraaoc993', new FormData(contactForm));
  if (error) {
    formStatus.textContent = error.message || 'Something went wrong. Please try again or email contact@rebeccawhitmore.com.';
    submitButton.disabled = false;
    return;
  }
  contactForm.reset();
  formStatus.textContent = 'Thank you — your enquiry has been sent. I’ll be in touch soon.';
  submitButton.disabled = false;
});
