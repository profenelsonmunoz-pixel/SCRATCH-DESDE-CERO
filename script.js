// script.js - Lógica Principal

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('temario-container');
  const modal = document.getElementById('lesson-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const okBtn = document.getElementById('ok-btn');
  
  // Renderizar la cuadrícula del temario
  function renderCurriculum() {
    for (let p = 1; p <= 3; p++) {
      const pModules = CURRICULUM.filter(m => m.period === p);
      if (pModules.length === 0) continue;
      
      const periodDiv = document.createElement('div');
      periodDiv.className = 'period-container';
      
      const titleClass = 'p' + p;
      const titleText = p === 1 ? 'Primer Periodo' : p === 2 ? 'Segundo Periodo' : 'Tercer Periodo';
      
      periodDiv.innerHTML = `
        <div class="period-header-section">
          <h3 class="period-title ${titleClass}">${titleText}</h3>
        </div>
        <div class="modules-grid" id="grid-p${p}"></div>
      `;
      
      container.appendChild(periodDiv);
      const grid = document.getElementById(`grid-p${p}`);
      
      pModules.forEach(mod => {
        const card = document.createElement('div');
        card.className = `module-card type-${mod.type} period-${mod.period}`;
        card.onclick = () => openModal(mod);
        
        let icon = mod.emoji || '🐱';
        
        card.innerHTML = `
          <div class="card-header">
            <span class="week-badge">Semana ${mod.week}</span>
            <span class="card-icon">${icon}</span>
          </div>
          <h4 class="card-title">${mod.title}</h4>
          <p class="card-desc">${mod.desc}</p>
          <div class="card-dates" style="margin-top:auto; font-size:0.85rem; font-weight:bold; color:var(--primary-color);">¡Clic para abrir la guía! ✨</div>
        `;
        
        grid.appendChild(card);
        
        // Verificar recesos escolares
        const receso = RECESOS.find(r => r.period === p && r.afterWeek === mod.week);
        if (receso) {
          const banner = document.createElement('div');
          banner.className = 'receso-banner';
          banner.innerHTML = `<h3>🏖️ ${receso.term}</h3><p>${receso.startDate} al ${receso.endDate}</p>`;
          grid.appendChild(banner);
        }
      });
    }
  }

  // Lógica del Modal
  function openModal(moduleData) {
    const badge = document.getElementById('modal-badge');
    const title = document.getElementById('modal-title');
    const guideContainer = document.getElementById('modal-guide');
    
    // Configurar fechas de inicio si existen en los datos
    let dateStr = '';
    if (moduleData.startDate && moduleData.endDate) {
      dateStr = ` (${moduleData.startDate} al ${moduleData.endDate})`;
    }
    badge.textContent = 'Semana ' + moduleData.week + dateStr;
    title.textContent = moduleData.title;
    
    guideContainer.innerHTML = moduleData.guide || '<p>¡Prepárate para una gran clase llena de diversión mágica con código!</p>';
    
    // Forzar el scroll hacia arriba para las guías extremadamente largas
    modal.querySelector('.modal-body').scrollTop = 0;

    modal.showModal();
    // Prevenir scroll en el fondo
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.close();
    document.body.style.overflow = 'auto'; // restaurar scroll
  }

  closeBtn.addEventListener('click', closeModal);
  okBtn.addEventListener('click', closeModal);

  // Cerrar modal si se hace clic afuera del content
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });

  // Inicializar
  renderCurriculum();
});
