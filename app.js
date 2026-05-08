/* ===== PARTICLES ===== */
(function initParticles(){
  const container = document.querySelector('.particles');
  if(!container) return;
  for(let i=0;i<30;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      animation-duration:${6+Math.random()*10}s;
      animation-delay:${Math.random()*10}s;
      width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;
      opacity:0;
    `;
    container.appendChild(p);
  }
})();

/* ===== TOGGLE COMPARE ===== */
(function initCompare(){
  const toggle = document.getElementById('modeToggle');
  const display = document.getElementById('chainDisplay');
  const warningTags = document.getElementById('warningTags');
  const dataLines = document.getElementById('dataLines');
  const middleNodes = document.querySelectorAll('.chain-node.middle');
  const middleArrows = document.querySelectorAll('.chain-arrow.middle');

  if(!toggle) return;

  toggle.addEventListener('change', function(){
    const isHTX = this.checked;
    display.classList.toggle('htx-mode', isHTX);

    // Animate middle nodes out/in
    middleNodes.forEach(n => n.classList.toggle('hidden', isHTX));
    middleArrows.forEach(a => a.classList.toggle('hidden', isHTX));

    // Switch warning tags
    warningTags.innerHTML = isHTX ? htxTags() : oldTags();

    // Show data lines
    if(dataLines) dataLines.classList.toggle('visible', isHTX);

    // Update node styles
    document.querySelectorAll('.chain-node').forEach(n => {
      if(!n.classList.contains('hidden')){
        n.classList.toggle('safe', isHTX);
        n.classList.toggle('danger', !isHTX && !n.classList.contains('safe'));
      }
    });
  });

  function oldTags(){
    return `
      <span class="warning-tag bad">⚠ Ép giá</span>
      <span class="warning-tag bad">📈 Chi phí đội lên</span>
      <span class="warning-tag bad">❓ Mất nguồn gốc</span>
      <span class="warning-tag bad">⏰ Thời gian dài</span>
    `;
  }
  function htxTags(){
    return `
      <span class="warning-tag good">✅ Giá minh bạch</span>
      <span class="warning-tag good">🔗 Blockchain truy xuất</span>
      <span class="warning-tag good">🚀 Chuỗi rút ngắn</span>
      <span class="warning-tag good">💚 Nông dân hưởng lợi</span>
    `;
  }
})();

/* ===== SCROLL REVEAL ===== */
(function initScrollReveal(){
  const steps = document.querySelectorAll('.process-step');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'), i*150);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.15});
  steps.forEach(s=>obs.observe(s));
})();

/* ===== DRONE ANIMATION ===== */
(function initDrone(){
  const drone = document.getElementById('droneEl');
  if(!drone) return;
  const obs = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      drone.style.animation = 'droneFly 4s linear forwards';
    }
  },{threshold:.5});
  obs.observe(drone.parentElement);
})();

/* ===== QR MODAL ===== */
(function initQR(){
  const btn = document.getElementById('qrBtn');
  const overlay = document.getElementById('qrModal');
  const closeBtn = document.getElementById('closeQR');
  if(!btn||!overlay) return;

  btn.addEventListener('click',()=>overlay.classList.add('open'));
  closeBtn && closeBtn.addEventListener('click',()=>overlay.classList.remove('open'));
  overlay.addEventListener('click',(e)=>{if(e.target===overlay) overlay.classList.remove('open')});
})();

/* ===== COUNTER ANIMATION ===== */
(function initCounters(){
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix||'';
        const duration = 1800;
        const step = target/(duration/16);
        let current = 0;
        const timer = setInterval(()=>{
          current = Math.min(current+step, target);
          el.textContent = (Number.isInteger(target)?Math.round(current):current.toFixed(1)) + suffix;
          if(current>=target) clearInterval(timer);
        },16);
        obs.unobserve(el);
      }
    });
  },{threshold:.5});
  counters.forEach(c=>obs.observe(c));
})();
