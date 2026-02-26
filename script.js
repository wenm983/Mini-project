(function(){
  const todayEl = document.getElementById('today');
  if (todayEl) {
    const d = new Date();
    todayEl.textContent = d.toLocaleDateString(undefined, {year:'numeric', month:'long', day:'numeric'});
  }

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCap = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');

  function openLightbox(img){
    const src = img.getAttribute('src');
    const cap = img.dataset.caption || img.getAttribute('alt') || '';
    lbImg.setAttribute('src', src);
    lbImg.setAttribute('alt', cap);
    lbCap.textContent = cap;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.setAttribute('src', '');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.zoomable').forEach(img=>{
    img.setAttribute('tabindex','0');
    img.addEventListener('click', ()=>openLightbox(img));
    img.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });

  lb.addEventListener('click', (e)=>{
    if (e.target === lb) closeLightbox();
  });
  lbClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeLightbox();
  });
})();