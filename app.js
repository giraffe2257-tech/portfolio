// shared chrome: background, fixed left sidebar nav, dark/light toggle, reveal
const PAGES = [
  {id:'home',         label:'Home',          file:'index.html', di:'00'},
  {id:'about',        label:'About',         file:'about.html', di:'01'},
  {id:'experience',   label:'Work',          file:'experience.html', di:'02'},
  {id:'side-projects',label:'Projects', file:'side-projects.html', di:'03'},
  {id:'contact',      label:'Contact',       file:'contact.html', di:'04'},
];

(function(){
  const cur = document.body.dataset.page || 'home';
  document.body.classList.add('has-sidebar');

  // current variant (a/b/c) from ?v param or the homepage body class — keeps nav within one style
  const _vp = new URLSearchParams(location.search).get('v');
  const vv = _vp || (document.body.classList.contains('va') ? 'a'
            : document.body.classList.contains('vb') ? 'b'
            : document.body.classList.contains('vc') ? 'c' : '');
  const isHome = !!document.querySelector('.hero');
  const singlePage = isHome && !!vv;          // variant homepages become one scrolling page
  const linkFor = p => {
    if (singlePage) return '#' + p.id;        // scroll to section
    if (isHome) return p.id === 'home' ? p.file : p.file + (vv ? '?v=' + vv : '');
    const base = 'index.html';   // inner standalone -> home anchors (always clean root home)
    return p.id === 'home' ? base : base + '#' + p.id;
  };

  // load thin display font (Josefin Sans) once
  if(!document.querySelector('link[data-josefin]')){
    const l=document.createElement('link');l.rel='stylesheet';l.dataset.josefin='1';
    l.href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500&display=swap';
    document.head.appendChild(l);
  }

  // background
  document.body.insertAdjacentHTML('afterbegin',
    `<div class="field"><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div></div><div class="grain"></div>`);

  const ICON={
    li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4z"/></svg>',
    gh:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>'
  };

  // sidebar + top-right mode toggle
  document.body.insertAdjacentHTML('beforeend', `
    <aside class="sidebar">
      <nav class="snav">
        ${PAGES.map(p=>`<a href="${linkFor(p)}" class="${p.id===cur?'cur':''}"><i>${p.di}</i><span data-i18n="nav.${p.id}">${p.label}</span></a>`).join('')}
      </nav>
      <div class="socials">
        <a href="https://www.linkedin.com/in/vivian-wang-8319b1239/" aria-label="LinkedIn" target="_blank" rel="noopener">${ICON.li}</a>
        <a href="https://github.com/giraffe2257-tech" aria-label="GitHub" target="_blank" rel="noopener">${ICON.gh}</a>
        <a href="mailto:giraffe2257@gmail.com" aria-label="Email">${ICON.mail}</a>
      </div>
    </aside>
    <button class="mode" id="modeBtn" aria-label="Toggle dark / light"><span class="mi">${ICON.moon}</span></button>
    <button class="sb-toggle" id="sbToggle" aria-label="Menu"><i></i><i></i><i></i></button>`);

  if(window.applyLang) window.applyLang(document);   // localise nav + chrome

  // mobile sidebar toggle
  const sbToggle=document.getElementById('sbToggle');
  sbToggle.onclick=()=>document.body.classList.toggle('sb-open');

  // dark / light toggle (dark = dusk, light = fog)
  const modeBtn=document.getElementById('modeBtn'), mi=modeBtn.querySelector('.mi');
  function setMode(m){
    if(m==='light') document.body.setAttribute('data-theme','fog'); else document.body.removeAttribute('data-theme');
    mi.innerHTML = m==='light' ? ICON.sun : ICON.moon;
    try{localStorage.setItem('mode',m)}catch(e){}
  }
  modeBtn.onclick=()=>setMode(document.body.getAttribute('data-theme')==='fog'?'dark':'light');
  const params=new URLSearchParams(location.search);
  setMode(params.get('mode')||localStorage.getItem('mode')||'dark');

  // live local time (London)
  const clock=document.getElementById('clock');
  if(clock){
    const tick=()=>{try{clock.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())+' GMT';}catch(e){}};
    tick(); setInterval(tick,15000);
  }

  // ===== entrance reveal: fade-up + pop, auto-applied & staggered per section =====
  const revIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revIO.unobserve(e.target);} }),{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  function revTag(el,i){ el.classList.add('r'); el.style.setProperty('--d',(i*70)+'ms'); revIO.observe(el); }
  function reveal(scope){
    (scope||document).querySelectorAll('.hero,.ipage').forEach(sec=>{
      if(sec.dataset.rev) return; sec.dataset.rev='1';
      const T='.ip-head,.wk,.xp,.ab-edu .e,.skills-col,.ab-col,.pillrow,.readout,.ct-links a,.ct-meta,.pcar-top,.pcar-stage,.pcar-pager,.pcar-foot';
      let targets=[...sec.querySelectorAll(T)];
      if(!targets.length) targets=[...sec.children].filter(c=>!c.classList.contains('field')&&!c.classList.contains('grain'));
      targets.forEach(revTag);
    });
    (scope||document).querySelectorAll('.r:not(.in)').forEach(el=>revIO.observe(el));
  }
  reveal(document);
  setTimeout(()=>document.querySelectorAll('.r:not(.in)').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight+40)el.classList.add('in')}),1500);

  // ===== Projects: case-study expand. A = side drawer, B = centre modal, C = own page =====
  function wireProjects(){
    if(!window.renderCase) return;
    const cards=[...document.querySelectorAll('.cs-card[data-case]')];
    if(!cards.length) return;
    const mode = vv==='a' ? 'drawer' : vv==='b' ? 'modal' : 'page';

    if(mode==='page'){
      cards.forEach(c=>{ c.classList.add('cs-link');
        c.addEventListener('click',()=>{ location.href='case.html?id='+c.dataset.case+'&v=c'; }); });
      return;
    }

    // overlay (A drawer or B modal) — both render the same case doc into a panel
    const panelClass = mode==='drawer' ? 'cs-drawer' : 'cs-modal';
    let scrim=document.querySelector('.cs-scrim'), panel=document.querySelector('.'+panelClass);
    if(!panel){
      document.body.insertAdjacentHTML('beforeend',
        '<div class="cs-scrim"></div><aside class="'+panelClass+'" aria-hidden="true"><button class="cs-x" aria-label="Close">&times;</button><div class="cs-panel-body"></div></aside>');
      scrim=document.querySelector('.cs-scrim'); panel=document.querySelector('.'+panelClass);
      const close=()=>{document.body.classList.remove('cs-open');panel.setAttribute('aria-hidden','true');};
      scrim.addEventListener('click',close);
      panel.querySelector('.cs-x').addEventListener('click',close);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    }
    cards.forEach(c=>{ c.classList.add('cs-link');
      c.addEventListener('click',()=>{
        panel.querySelector('.cs-panel-body').innerHTML=renderCase(c.dataset.case);
        panel.scrollTop=0;
        document.body.classList.add('cs-open');
        panel.setAttribute('aria-hidden','false');
      });
    });
  }

  // variant C: drag / wheel horizontal scroll for the project gallery tracks
  function initHScroll(){
    if(vv!=='c') return;
    document.querySelectorAll('.ip-work .pg-grid').forEach(track=>{
      if(track.dataset.hs) return; track.dataset.hs='1';
      let down=false,moved=false,sx=0,sl=0;
      track.addEventListener('pointerdown',e=>{down=true;moved=false;sx=e.clientX;sl=track.scrollLeft;});
      track.addEventListener('pointermove',e=>{ if(!down)return; const dx=e.clientX-sx;
        if(Math.abs(dx)>5){moved=true;track.classList.add('dragging');}
        if(moved) track.scrollLeft=sl-dx; });
      const up=()=>{ down=false; setTimeout(()=>track.classList.remove('dragging'),0); };
      window.addEventListener('pointerup',up);
      track.addEventListener('click',e=>{ if(moved){e.preventDefault();e.stopPropagation();moved=false;} },true);
      track.addEventListener('wheel',e=>{ if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){track.scrollLeft+=e.deltaY;e.preventDefault();} },{passive:false});
    });
  }

  // full-screen case overlay (variant C): renders the full case doc + image gallery in place
  function openCaseOverlay(id){
    if(!window.renderCase || !window.CASES || !window.CASES[id]) return;
    let ov=document.querySelector('.cs-full');
    if(!ov){
      // semi-transparent centred modal — the page stays visible (dimmed) behind it;
      // a top bar gives a "← Projects" back affordance plus a close button.
      document.body.insertAdjacentHTML('beforeend',
        '<div class="cs-full" aria-hidden="true"><div class="cs-full-panel"><div class="cs-full-bar"><button class="cs-full-back" type="button"><span class="cs-back-arrow">←</span> <span data-i18n="nav.side-projects">Projects</span></button><button class="cs-full-x" aria-label="Close">&times;</button></div><div class="cs-full-scroll"><div class="cs-full-doc"></div></div></div></div>');
      ov=document.querySelector('.cs-full');
      const close=()=>{ document.body.classList.remove('cs-full-open'); ov.setAttribute('aria-hidden','true'); };
      ov.addEventListener('click',e=>{ if(e.target===ov) close(); });   // click the dimmed backdrop to close
      ov.querySelector('.cs-full-x').addEventListener('click',close);
      ov.querySelector('.cs-full-back').addEventListener('click',close);
      document.addEventListener('keydown',e=>{ if(e.key==='Escape' && document.body.classList.contains('cs-full-open')) close(); });
    }
    ov.querySelector('.cs-full-doc').innerHTML=renderCase(id,'page');
    ov.querySelector('.cs-full-scroll').scrollTop=0;
    document.body.classList.add('cs-full-open');
    ov.setAttribute('aria-hidden','false');
    if(window.applyLang) window.applyLang(ov);   // localise the Back / breadcrumb label
  }

  // variant C: coverflow carousel for projects (centre slide, prev/next, numbered pager, click -> case overlay)
  function buildProjectsCarousel(){
    if(!window.CASES) return;
    const sec=document.querySelector('.ip-work'); if(!sec || sec.dataset.pcar) return; sec.dataset.pcar='1';
    const ids=[...sec.querySelectorAll('.cs-card[data-case]')].map(c=>c.dataset.case);
    if(!ids.length) return;
    const ct=(c,f)=>window.caseT?window.caseT(c,f):c[f];   // localised case field
    const head=sec.querySelector('.ip-head'); if(head){ const _l=head.querySelector('.ip-lead'); if(_l) _l.style.display='none'; }
    const body=sec.querySelector('.ip-body'); if(body) body.style.display='none';

    const slideHTML=(id,i)=>{
      const c=CASES[id];
      const SCENES={clip:clipSceneHTML,collage:collageSceneHTML,mosaic:mosaicSceneHTML,pipeline:pipelineSceneHTML,course:courseSceneHTML,dashboard:dashboardSceneHTML,vtuber:vtuberSceneHTML};
      if(c.scene && SCENES[c.scene]){   // custom illustrated cover (no stock photo)
        return `<a class="pcar-slide" data-i="${i}" href="case.html?id=${id}&v=c" target="_blank" rel="noopener" draggable="false">
          <div class="pcar-frame"><div class="pcar-img pcar-cover pcar-scene pcar-scene--${c.scene}">
            ${SCENES[c.scene]()}
            <span class="pcar-c-metric">${c.title}</span>
          </div></div></a>`;
      }
      const img=c.cover||(c.images&&c.images[0]);
      const cls='pcar-img pcar-cover'+(img?' pcar-cover--photo':'');
      const attr=img?` style="background-image:url('${img}')"`:` data-g="${i%4}"`;
      return `<a class="pcar-slide" data-i="${i}" href="case.html?id=${id}&v=c" target="_blank" rel="noopener" draggable="false">
        <div class="pcar-frame"><div class="${cls}"${attr}>
          <span class="pcar-c-metric">${c.title}</span>
        </div></div></a>`;
    };
    const wrap=document.createElement('div');
    wrap.className='pcar';
    wrap.innerHTML=`
      <div class="pcar-top">
        <button class="pcar-nav pcar-prev" type="button" data-i18n="pcar.prev">PREV</button>
        <button class="pcar-nav pcar-next" type="button" data-i18n="pcar.next">NEXT</button>
      </div>
      <div class="pcar-stage"><div class="pcar-track">${ids.map(slideHTML).join('')}</div></div>
      <div class="pcar-caption"><div class="pcar-tags"></div><p class="pcar-cap-desc"></p></div>
      <div class="pcar-pager">${ids.map((id,i)=>`<button class="pcar-num" type="button" data-i="${i}">${i+1}</button>`).join('')}</div>
      <div class="pcar-foot"><span class="pcar-count"></span><span class="pcar-status"><i></i> <span data-i18n="pcar.playing">PLAYING</span></span></div>`;
    sec.appendChild(wrap);

    const track=wrap.querySelector('.pcar-track');
    const stage=wrap.querySelector('.pcar-stage');
    const slides=[...wrap.querySelectorAll('.pcar-slide')];
    const numEls=[...wrap.querySelectorAll('.pcar-num')];
    const capTags=wrap.querySelector('.pcar-tags');
    const capDesc=wrap.querySelector('.pcar-cap-desc');
    const countEl=wrap.querySelector('.pcar-count');
    const statusEl=wrap.querySelector('.pcar-status');
    let active=0, baseTX=0;

    function layout(){
      const sw=stage.clientWidth, slideW=slides[0].offsetWidth;
      const gap=parseFloat(getComputedStyle(track).columnGap||getComputedStyle(track).gap)||0;
      baseTX=sw/2-(active*(slideW+gap)+slideW/2);
      track.style.transform=`translateX(${baseTX}px)`;
    }
    function render(){
      slides.forEach((s,i)=>s.classList.toggle('is-active',i===active));
      numEls.forEach((n,i)=>n.classList.toggle('on',i===active));
      const ac=CASES[ids[active]];
      capTags.innerHTML=(ct(ac,'tags')||ac.tags||[]).map(t=>`<span class="pcar-pill">${t}</span>`).join('');
      capDesc.textContent=ct(ac,'summary')||'';
      countEl.textContent=(active+1)+' / '+ids.length;
      layout();
    }
    function go(i){ active=(i+ids.length)%ids.length; render(); }

    wrap.querySelector('.pcar-prev').onclick=()=>go(active-1);
    wrap.querySelector('.pcar-next').onclick=()=>go(active+1);
    numEls.forEach(n=>n.onclick=()=>go(+n.dataset.i));

    // drag to slide. Capture ONLY once a real drag starts, so a plain click still
    // reaches the slide <a> (capturing on pointerdown would retarget the click to the stage).
    let down=false,moved=false,sx=0,pid=null;
    stage.addEventListener('dragstart',e=>e.preventDefault());
    stage.addEventListener('pointerdown',e=>{down=true;moved=false;sx=e.clientX;pid=e.pointerId;track.style.transition='none';});
    stage.addEventListener('pointermove',e=>{ if(!down)return; const dx=e.clientX-sx;
      if(!moved && Math.abs(dx)>6){ moved=true; try{stage.setPointerCapture(pid);}catch(_){} }
      if(moved) track.style.transform=`translateX(${baseTX+dx}px)`; });
    const endDrag=e=>{ if(!down)return; down=false; track.style.transition=''; const dx=(e.clientX||sx)-sx;
      if(moved){ if(dx<-50)go(active+1); else if(dx>50)go(active-1); else render(); } };
    stage.addEventListener('pointerup',endDrag);
    stage.addEventListener('pointercancel',endDrag);
    // one horizontal gesture = exactly one slide. After a slide change, hold a FIXED
    // cooldown that ignores trackpad momentum. (The old version re-armed only after a
    // 160ms gap with no wheel events, but momentum keeps firing events for ~1s, so the
    // lock never cleared and the carousel froze until the next click.)
    let wheelCooling=false, wheelAccum=0, wheelIdle=null;
    stage.addEventListener('wheel',e=>{ if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return; e.preventDefault();
      if(wheelIdle)clearTimeout(wheelIdle);
      wheelIdle=setTimeout(()=>{wheelAccum=0;},140);   // gesture paused -> drop stale accumulation
      if(wheelCooling)return;
      wheelAccum+=e.deltaX;
      if(Math.abs(wheelAccum)>=60){ go(active+(wheelAccum>0?1:-1)); wheelAccum=0;
        wheelCooling=true; setTimeout(()=>{wheelCooling=false;},620); } },{passive:false});
    slides.forEach(s=>s.addEventListener('click',e=>{
      const i=+s.dataset.i;
      if(moved){ e.preventDefault(); e.stopPropagation(); return; }   // swallow click after drag
      e.preventDefault();
      if(i!==active) go(i);                  // side slide -> focus it
      else openCaseOverlay(ids[i]);          // centre slide -> full-page case overlay (with images)
    }));

    // autoplay, pause on hover / interaction
    let timer=null;
    const play=()=>{ if(timer)clearInterval(timer); timer=setInterval(()=>go(active+1),7000); statusEl.classList.remove('paused'); };
    const stop=()=>{ if(timer){clearInterval(timer);timer=null;} statusEl.classList.add('paused'); };
    wrap.addEventListener('pointerenter',stop);
    wrap.addEventListener('pointerleave',play);

    render();
    window.addEventListener('resize',layout);
    setTimeout(layout,60);   // re-measure after images/fonts settle
    ['.pcar-top','.pcar-stage','.pcar-pager','.pcar-foot'].forEach((s,i)=>{const el=wrap.querySelector(s); if(el)revTag(el,i);});
    window.addEventListener('langchange',()=>{
      slides.forEach((s,i)=>{ const m=s.querySelector('.pcar-c-metric'); if(m) m.textContent=CASES[ids[i]].title; });
      render();
    });
    play();
  }

  // variant C: 90-second clip cover = a recreated UI mockup (no real internal screenshots)
  function clipSceneHTML(){
    return `<svg class="scene-scissors" viewBox="0 0 132 80" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="16" cy="22" r="9" stroke-width="3"/><circle cx="16" cy="58" r="9" stroke-width="3"/>
        <path d="M24 26 L94 54" stroke-width="3" stroke-linecap="round"/><path d="M24 54 L94 26" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="40" r="2.8" fill="currentColor" stroke="none"/>
        <line x1="94" y1="40" x2="130" y2="40" stroke-width="2.4" stroke-dasharray="2 6" stroke-linecap="round" opacity=".75"/>
      </svg>
      <svg class="scene-clipfx" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M118 78 l-9 -9 a5.6 5.6 0 1 1 9 -7.2 a5.6 5.6 0 1 1 9 7.2 z" fill="#ff5e8a" opacity=".9"/>
        <path d="M64 134 l-6 -6 a3.8 3.8 0 1 1 6 -4.8 a3.8 3.8 0 1 1 6 4.8 z" fill="#ff9bb5" opacity=".75"/>
        <g fill="#ffd76b" opacity=".7"><path d="M44 90 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z"/><path d="M176 70 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 z"/></g>
        <g font-family="monospace" opacity=".92"><rect x="40" y="196" width="156" height="22" rx="11" fill="rgba(120,80,165,.55)"/><text x="51" y="211" font-size="11" fill="#fff">luna: amazing clip!</text>
        <rect x="40" y="226" width="120" height="20" rx="10" fill="rgba(90,120,200,.5)"/><text x="50" y="240" font-size="10" fill="#fff">nori: save it</text></g>
      </svg>
      <div class="scene-phones">
      <svg class="ph ph-back" viewBox="0 0 300 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clip editor mockup">
        <defs><linearGradient id="vidBp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b5742"/><stop offset=".55" stop-color="#3a2e24"/><stop offset="1" stop-color="#15110e"/></linearGradient><clipPath id="scrBp"><rect x="12" y="12" width="276" height="596" rx="26"/></clipPath></defs>
        <rect x="2" y="2" width="296" height="616" rx="36" fill="#0b0b0c" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>
        <g clip-path="url(#scrBp)">
          <rect x="12" y="12" width="276" height="596" fill="url(#vidBp)"/>
          <g fill="rgba(255,255,255,.12)"><circle cx="150" cy="235" r="62"/><path d="M58 472 q92 -150 184 0 z"/></g>
          <text x="30" y="46" fill="rgba(255,255,255,.85)" font-size="13" font-family="sans-serif">Cancel</text>
          <text x="150" y="46" text-anchor="middle" fill="#fff" font-size="14" font-family="sans-serif" font-weight="600">Stream Clip</text>
          <text x="270" y="46" text-anchor="end" fill="rgba(255,255,255,.85)" font-size="13" font-family="sans-serif">Next</text>
          <rect x="24" y="554" width="252" height="36" rx="6" fill="rgba(0,0,0,.5)"/>
          <g fill="rgba(255,255,255,.18)"><rect x="30" y="559" width="36" height="26"/><rect x="70" y="559" width="36" height="26"/><rect x="110" y="559" width="36" height="26"/><rect x="150" y="559" width="36" height="26"/><rect x="190" y="559" width="36" height="26"/><rect x="230" y="559" width="40" height="26"/></g>
          <rect x="28" y="555" width="120" height="34" rx="4" fill="none" stroke="#ff3b30" stroke-width="3"/>
          <rect x="28" y="555" width="9" height="34" rx="2" fill="#ff3b30"/><rect x="139" y="555" width="9" height="34" rx="2" fill="#ff3b30"/>
          <text x="30" y="606" fill="rgba(255,255,255,.8)" font-size="11" font-family="monospace">00:00</text>
        </g>
      </svg>
      <svg class="ph ph-front" viewBox="0 0 300 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="90-second clip mockup">
        <defs><linearGradient id="vidFp" x1="0" y1="0" x2=".25" y2="1"><stop offset="0" stop-color="#9a6f8e"/><stop offset=".42" stop-color="#6d5742"/><stop offset="1" stop-color="#141019"/></linearGradient><radialGradient id="glowFp" cx=".5" cy=".34" r=".62"><stop offset="0" stop-color="#ffcaa0" stop-opacity=".42"/><stop offset="1" stop-color="#ffcaa0" stop-opacity="0"/></radialGradient><clipPath id="scrFp"><rect x="12" y="12" width="276" height="596" rx="26"/></clipPath></defs>
        <rect x="2" y="2" width="296" height="616" rx="36" fill="#0b0b0c" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>
        <g clip-path="url(#scrFp)">
          <rect x="12" y="12" width="276" height="596" fill="url(#vidFp)"/>
          <ellipse cx="150" cy="195" rx="162" ry="188" fill="url(#glowFp)"/>
          <g fill="rgba(255,255,255,.15)"><circle cx="148" cy="232" r="62"/><path d="M52 474 q96 -156 192 0 z"/></g>
          <rect x="20" y="26" width="60" height="22" rx="11" fill="#ff2d55"/><circle cx="33" cy="37" r="4" fill="#fff"/><text x="43" y="41" fill="#fff" font-size="12" font-family="sans-serif" font-weight="700">LIVE</text>
          <rect x="86" y="26" width="58" height="22" rx="11" fill="rgba(0,0,0,.42)"/><text x="96" y="41" fill="#fff" font-size="11" font-family="monospace">1.2k</text>
          <g stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"><line x1="260" y1="32" x2="276" y2="48"/><line x1="276" y1="32" x2="260" y2="48"/></g>
          <path d="M252 432 l-8 -8 a5 5 0 1 1 8 -6.4 a5 5 0 1 1 8 6.4 z" fill="#ff5e8a"/>
          <path d="M236 392 l-5.5 -5.5 a3.5 3.5 0 1 1 5.5 -4.4 a3.5 3.5 0 1 1 5.5 4.4 z" fill="#ff9bb5" opacity=".85"/>
          <path d="M259 358 l-4 -4 a2.6 2.6 0 1 1 4 -3.2 a2.6 2.6 0 1 1 4 3.2 z" fill="#ffd1dd" opacity=".7"/>
          <g transform="translate(256,372)">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#fff" stroke-width="2.4"/>
            <path d="M0 54 l-12 -12 a7.5 7.5 0 1 1 12 -9.5 a7.5 7.5 0 1 1 12 9.5 z" fill="none" stroke="#fff" stroke-width="2.4"/>
            <text x="0" y="80" text-anchor="middle" fill="#fff" font-size="12" font-family="monospace">0</text>
            <rect x="-12" y="98" width="24" height="19" rx="3" fill="none" stroke="#fff" stroke-width="2.2"/><line x1="0" y1="98" x2="0" y2="117" stroke="#fff" stroke-width="2.2"/>
            <rect x="-19" y="134" width="38" height="42" rx="6" fill="none" stroke="#ff3b30" stroke-width="2.6"/>
            <g stroke="#fff" stroke-width="2.2" fill="none"><circle cx="-6" cy="151" r="4"/><circle cx="-6" cy="162" r="4"/><line x1="-2.5" y1="151" x2="13" y2="142"/><line x1="-2.5" y1="162" x2="13" y2="171"/></g>
            <text x="0" y="190" text-anchor="middle" fill="#fff" font-size="12" font-family="monospace">1</text>
            <path d="M-13 214 l26 -11 l-26 -11 l7 11 z" fill="#fff"/>
          </g>
          <rect x="20" y="476" width="148" height="18" rx="9" fill="rgba(120,80,165,.5)"/><text x="28" y="489" fill="#fff" font-size="10" font-family="monospace">@luna  so good</text>
          <rect x="20" y="500" width="186" height="20" rx="10" fill="rgba(150,60,170,.52)"/><text x="29" y="514" fill="#fff" font-size="10.5" font-family="monospace">@happydolphin · I am Here</text>
          <text x="20" y="544" fill="#fff" font-size="16" font-weight="700" font-family="sans-serif">Let's sing pop songs!</text>
          <text x="20" y="565" fill="rgba(255,255,255,.72)" font-size="11" font-family="monospace">131 views · 6 days ago</text>
          <rect x="20" y="581" width="236" height="3" rx="1.5" fill="rgba(255,255,255,.3)"/><rect x="20" y="581" width="152" height="3" rx="1.5" fill="#fff"/><circle cx="172" cy="582.5" r="4.5" fill="#fff"/>
        </g>
      </svg>
    </div>`;
  }

  // Rent Radar: a photo collage (London street + interiors), no single hero photo
  function collageSceneHTML(){
    return `<div class="scene-collage">
      <img class="cphoto cp-a" src="assets/cases/rental-ext.jpg" alt="London street" loading="lazy">
      <img class="cphoto cp-b" src="assets/cases/rental-int1.jpg" alt="Flat interior" loading="lazy">
      <img class="cphoto cp-c" src="assets/cases/rental-int2.jpg" alt="Flat interior" loading="lazy">
    </div>`;
  }

  // Rent / Hearth: full-bleed mosaic — several photos tiled edge-to-edge (no black gaps)
  function mosaicSceneHTML(){
    return `<div class="scene-mosaic">
      <img src="assets/cases/rental-cover2.jpg" alt="London skyline" loading="lazy">
      <img src="assets/cases/rental-int1.jpg" alt="Flat interior" loading="lazy">
      <img src="assets/cases/rental-ext.jpg" alt="London street" loading="lazy">
    </div>`;
  }

  // Knowledge pipeline: a full-bleed 6-stage icon flow diagram on a dot-grid field
  function pipelineSceneHTML(){
    const C=['#E8B14C','#5AA9E6','#7FC8A9','#9B8CE0','#E07A5F','#5AA9E6'];
    const node=(x,icon,c)=>`<g transform="translate(${x},170)">
      <rect x="-32" y="-32" width="64" height="64" rx="15" fill="rgba(255,255,255,.05)" stroke="${c}" stroke-width="2"/>
      ${icon(c)}</g>`;
    const I={
      db:c=>`<g stroke="${c}" stroke-width="2.6" fill="none"><ellipse cx="0" cy="-11" rx="15" ry="5.5"/><path d="M-15 -11 V11 a15 5.5 0 0 0 30 0 V-11"/><path d="M-15 0 a15 5.5 0 0 0 30 0"/></g>`,
      llm:c=>`<g fill="${c}"><path d="M0 -18 L4 -4 L18 0 L4 4 L0 18 L-4 4 L-18 0 L-4 -4 Z"/></g>`,
      filter:c=>`<g stroke="${c}" stroke-width="2.6" fill="none" stroke-linejoin="round"><path d="M-15 -13 H15 L4 2 V15 L-4 11 V2 Z"/></g>`,
      enrich:c=>`<g stroke="${c}" stroke-width="2.6" fill="none"><circle cx="0" cy="0" r="14"/><path d="M0 -7 V7 M-7 0 H7" stroke-linecap="round"/></g>`,
      review:c=>`<g stroke="${c}" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-13 0 L-3 10 L14 -11"/></g>`,
      kb:c=>`<g stroke="${c}" stroke-width="2.4" fill="none" stroke-linejoin="round"><path d="M0 -16 L16 -8 L0 0 L-16 -8 Z"/><path d="M-16 0 L0 8 L16 0"/><path d="M-16 8 L0 16 L16 8"/></g>`
    };
    const xs=[68,182,296,410,524,612-28];
    const icons=[I.db,I.llm,I.filter,I.enrich,I.review,I.kb];
    const labels=['ingest','LLM ×3','clean','enrich','review','RAG KB'];
    let arrows=''; for(let k=0;k<xs.length-1;k++){const a=xs[k]+34,b=xs[k+1]-34;
      arrows+=`<line x1="${a}" y1="170" x2="${b-6}" y2="170" stroke="rgba(255,255,255,.28)" stroke-width="2" stroke-dasharray="1 7" stroke-linecap="round"/><path d="M${b-8} 165 L${b} 170 L${b-8} 175" fill="none" stroke="${C[k+1]}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`; }
    const nodes=xs.map((x,k)=>node(x,icons[k],C[k])).join('');
    const labs=xs.map((x,k)=>`<text x="${x}" y="222" text-anchor="middle" font-family="monospace" font-size="13" fill="rgba(255,255,255,.6)">${labels[k]}</text>`).join('');
    // raw data particles flowing into the first node
    let parts=''; const pp=[[24,60],[40,44],[56,70],[30,90],[50,100],[20,120]];
    pp.forEach(([x,y])=>{parts+=`<circle cx="${x}" cy="${y}" r="2.4" fill="rgba(255,255,255,.4)"/>`;});
    return `<svg class="scene-pipe" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="creator-voice content engine">
      <defs><radialGradient id="pipebg" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="#1a2230"/><stop offset="1" stop-color="#0e1420"/></radialGradient>
      <pattern id="pdot" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.07)"/></pattern></defs>
      <rect x="0" y="0" width="640" height="360" fill="url(#pipebg)"/><rect x="0" y="0" width="640" height="360" fill="url(#pdot)"/>
      <text x="40" y="52" font-family="monospace" font-size="13" fill="#E8B14C" letter-spacing="2">PERSONA MODELS · MULTI-LLM · AUTO-POST</text>
      ${parts}${arrows}${nodes}${labs}
      <text x="40" y="300" font-family="monospace" font-size="12" fill="#7FC8A9">▸ KOL posts + videos → personas</text>
      <text x="600" y="300" text-anchor="end" font-family="monospace" font-size="12" fill="#E07A5F">▸ Threads · Instagram</text>
    </svg>`;
  }

  // Agentic-coding course: full dark workshop scene — terminal + code + friendly robot
  function courseSceneHTML(){
    let rays=''; for(let k=0;k<12;k++){const a=k*30*Math.PI/180,x=Math.cos(a),y=Math.sin(a);
      rays+=`<line x1="${(10*x).toFixed(1)}" y1="${(10*y).toFixed(1)}" x2="${(22*x).toFixed(1)}" y2="${(22*y).toFixed(1)}" stroke="#E8895B" stroke-width="4" stroke-linecap="round"/>`; }
    const codeLines=[['#E8895B',40,150],['rgba(255,255,255,.6)',64,210],['#7FC8A9',64,120],['#9B8CE0',64,180],['#5AA9E6',40,160],['rgba(255,255,255,.45)',64,90]];
    const lines=codeLines.map(([c,x,w],i)=>`<rect x="${x}" y="${118+i*22}" width="${w}" height="8" rx="4" fill="${c}" opacity=".85"/>`).join('');
    const bg=`<svg class="sc-bg" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a1410"/><stop offset="1" stop-color="#0b0907"/></linearGradient></defs>
      <rect width="640" height="360" fill="url(#cbg)"/>
      <rect x="24" y="86" width="300" height="218" rx="12" fill="rgba(255,255,255,.04)" stroke="rgba(232,137,91,.4)"/>
      <circle cx="42" cy="104" r="4" fill="#e0564b"/><circle cx="56" cy="104" r="4" fill="#e8b14c"/><circle cx="70" cy="104" r="4" fill="#5ab07a"/>
      <text x="300" y="108" text-anchor="end" font-family="monospace" font-size="10" fill="rgba(255,255,255,.4)">claude code</text>
      ${lines}
      <text x="40" y="290" font-family="monospace" font-size="11" fill="#7FC8A9">$ claude ▸ shipping…</text>
    </svg>`;
    return `<div class="scene-course">
      ${bg}
      <span class="sc-eyebrow">Claude Code · automate your work in 3 hours</span>
      <svg class="sc-burst" viewBox="-30 -30 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${rays}</svg>
      <svg class="sc-bot" viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" aria-label="Claude Code robot">
        <line x1="100" y1="34" x2="100" y2="14" stroke="#E8895B" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="10" r="6" fill="#E8895B"/>
        <rect x="46" y="34" width="108" height="84" rx="20" fill="#1c1714" stroke="#E8895B" stroke-width="4"/>
        <rect x="60" y="52" width="80" height="46" rx="12" fill="#0f0c0a"/>
        <circle cx="84" cy="76" r="9" fill="#E8895B"/><circle cx="116" cy="76" r="9" fill="#E8895B"/>
        <circle cx="86" cy="73" r="2.6" fill="#fff"/><circle cx="118" cy="73" r="2.6" fill="#fff"/>
        <path d="M92 90 Q100 96 108 90" fill="none" stroke="#E8895B" stroke-width="3" stroke-linecap="round"/>
        <rect x="64" y="124" width="72" height="58" rx="14" fill="#1c1714" stroke="#E8895B" stroke-width="4"/>
        <rect x="78" y="138" width="44" height="22" rx="5" fill="#0f0c0a"/>
        <g stroke="#E8895B" stroke-width="3" stroke-linecap="round"><line x1="84" y1="149" x2="92" y2="149"/><line x1="98" y1="149" x2="110" y2="149"/></g>
        <line x1="46" y1="150" x2="30" y2="138" stroke="#E8895B" stroke-width="5" stroke-linecap="round"/><circle cx="27" cy="136" r="5" fill="#E8895B"/>
        <line x1="154" y1="150" x2="172" y2="132" stroke="#E8895B" stroke-width="5" stroke-linecap="round"/><circle cx="175" cy="129" r="5" fill="#E8895B"/>
      </svg>
    </div>`;
  }

  // User Feedback Dashboard: a full-bleed, colourful, content-dense dashboard
  function dashboardSceneHTML(){
    const bars=[34,52,40,64,48,72,58], bw=20, bx=40, gp=22;
    const cols=['#5AA9E6','#7FC8A9','#E8B14C','#E07A5F','#9B8CE0','#5AA9E6','#7FC8A9'];
    const barEls=bars.map((h,k)=>`<rect x="${bx+k*(bw+gp)}" y="${250-h}" width="${bw}" height="${h}" rx="4" fill="${cols[k]}"/>`).join('');
    const lp=[[0,30],[1,46],[2,34],[3,58],[4,44],[5,70],[6,62]];
    const pts=lp.map(([x,y])=>`${360+x*40},${250-y}`).join(' ');
    const area=`360,250 `+pts+` ${360+6*40},250`;
    const dots=lp.map(([x,y])=>`<circle cx="${360+x*40}" cy="${250-y}" r="3.5" fill="#fff" stroke="#E8B14C" stroke-width="2"/>`).join('');
    return `<svg class="scene-dash" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="feedback dashboard">
      <defs><linearGradient id="dashbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d2740"/><stop offset="1" stop-color="#141a2c"/></linearGradient>
      <linearGradient id="dareag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(232,177,76,.5)"/><stop offset="1" stop-color="rgba(232,177,76,0)"/></linearGradient></defs>
      <rect x="0" y="0" width="640" height="360" fill="url(#dashbg)"/>
      <g opacity=".5" stroke="rgba(255,255,255,.05)"><line x1="0" y1="90" x2="640" y2="90"/><line x1="0" y1="180" x2="640" y2="180"/><line x1="0" y1="270" x2="640" y2="270"/></g>
      <!-- header -->
      <circle cx="28" cy="28" r="4" fill="#e0564b"/><circle cx="42" cy="28" r="4" fill="#e8b14c"/><circle cx="56" cy="28" r="4" fill="#5ab07a"/>
      <text x="612" y="32" text-anchor="end" font-family="monospace" font-size="12" fill="rgba(255,255,255,.45)">VOC · last 30 days</text>
      <!-- KPI cards -->
      ${[['RESOLUTION','+15%','#7FC8A9',24],['VOC POSITIVE','+30%','#7FC8A9',174],['TICKETS','1,284','#fff',324],['NEGATIVE','-10%','#E07A5F',474]].map(([l,v,c,x])=>`<g><rect x="${x}" y="48" width="140" height="58" rx="9" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)"/><text x="${+x+14}" y="72" font-family="monospace" font-size="10" fill="rgba(255,255,255,.55)">${l}</text><text x="${+x+14}" y="96" font-family="monospace" font-size="22" font-weight="700" fill="${c}">${v}</text></g>`).join('')}
      <!-- bar chart -->
      <text x="40" y="138" font-family="monospace" font-size="10" fill="rgba(255,255,255,.55)">FEEDBACK / WEEK</text>
      ${barEls}
      <line x1="36" y1="250" x2="320" y2="250" stroke="rgba(255,255,255,.15)"/>
      <!-- trend area + line -->
      <text x="360" y="138" font-family="monospace" font-size="10" fill="rgba(255,255,255,.55)">RESOLUTION TREND</text>
      <polygon points="${area}" fill="url(#dareag)"/>
      <polyline points="${pts}" fill="none" stroke="#E8B14C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${dots}
      <!-- donut -->
      <g transform="translate(566,210)">
        <circle r="42" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="14"/>
        <circle r="42" fill="none" stroke="#7FC8A9" stroke-width="14" stroke-dasharray="132 264" stroke-linecap="round" transform="rotate(-90)"/>
        <circle r="42" fill="none" stroke="#5AA9E6" stroke-width="14" stroke-dasharray="66 264" stroke-dashoffset="-132" stroke-linecap="round" transform="rotate(-90)"/>
        <text y="6" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#fff">70%</text>
      </g>
      <text x="566" y="300" text-anchor="middle" font-family="monospace" font-size="9" fill="rgba(255,255,255,.5)">SENTIMENT</text>
    </svg>`;
  }

  // Avatar On/Off: original flat "virtual streamer" avatar on a full, colourful stream scene
  function vtuberSceneHTML(){
    const star=(x,y,r,c)=>`<path d="M${x} ${y-r} L${x+r*0.3} ${y-r*0.3} L${x+r} ${y} L${x+r*0.3} ${y+r*0.3} L${x} ${y+r} L${x-r*0.3} ${y+r*0.3} L${x-r} ${y} L${x-r*0.3} ${y-r*0.3} Z" fill="${c}"/>`;
    const heart=(x,y,r,c,o)=>`<path d="M${x} ${y+r} l${-r} ${-r} a${r*0.62} ${r*0.62} 0 1 1 ${r} ${-r*0.8} a${r*0.62} ${r*0.62} 0 1 1 ${r} ${r*0.8} z" fill="${c}" opacity="${o||1}"/>`;
    const chat=(x,y,w,c,t)=>`<g><rect x="${x}" y="${y}" width="${w}" height="22" rx="11" fill="${c}"/><text x="${x+11}" y="${y+15}" font-family="monospace" font-size="10" fill="#fff">${t}</text></g>`;
    return `<svg class="scene-vtuber" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="virtual avatar">
      <defs><radialGradient id="vtbg" cx=".62" cy=".4" r=".8"><stop offset="0" stop-color="#7d5bb0"/><stop offset=".5" stop-color="#4a3a86"/><stop offset="1" stop-color="#241f44"/></radialGradient></defs>
      <rect x="0" y="0" width="640" height="360" fill="url(#vtbg)"/>
      <g opacity=".5">${star(70,60,9,'#ffd76b')}${star(150,250,6,'#9fe0ff')}${star(600,90,7,'#ff9bd0')}${star(560,300,9,'#ffd76b')}${star(40,200,6,'#fff')}${star(610,210,5,'#9fe0ff')}</g>
      ${heart(95,140,11,'#ff5e8a')}${heart(60,300,9,'#ff9bb5',.85)}${heart(610,150,10,'#ff5e8a',.9)}
      <g opacity=".92">${chat(34,250,150,'rgba(120,80,170,.6)','luna: so cute!')}${chat(34,286,176,'rgba(150,60,170,.6)','@happydolphin · here')}${chat(34,322,120,'rgba(90,120,200,.55)','nori: hi!')}</g>
      <rect x="34" y="28" width="60" height="24" rx="12" fill="#ff2d55"/><circle cx="48" cy="40" r="4.5" fill="#fff"/><text x="59" y="45" fill="#fff" font-size="13" font-family="sans-serif" font-weight="700">LIVE</text>
      <rect x="100" y="28" width="74" height="24" rx="12" fill="rgba(0,0,0,.35)"/><text x="112" y="45" fill="#fff" font-size="12" font-family="monospace">1.2k watching</text>
      <g transform="translate(430,206) scale(1.16)">
        <!-- shoulders -->
        <path d="M-96 150 Q-96 56 0 56 Q96 56 96 150 Z" fill="#3a4658"/>
        <path d="M-96 150 Q-96 70 0 70 Q96 70 96 150" fill="none" stroke="#5cc6d6" stroke-width="4" opacity=".6"/>
        <!-- neck -->
        <rect x="-15" y="34" width="30" height="34" rx="10" fill="#f3c9a8"/>
        <!-- hair back -->
        <path d="M-78 0 Q-86 -96 0 -100 Q86 -96 78 0 L70 40 Q40 -6 0 -6 Q-40 -6 -70 40 Z" fill="#3fb6cc"/>
        <!-- face -->
        <ellipse cx="0" cy="-8" rx="58" ry="62" fill="#fbd7b6"/>
        <!-- blush -->
        <ellipse cx="-34" cy="14" rx="11" ry="7" fill="#ff9eb0" opacity=".55"/>
        <ellipse cx="34" cy="14" rx="11" ry="7" fill="#ff9eb0" opacity=".55"/>
        <!-- eyes -->
        <g>
          <ellipse cx="-24" cy="-6" rx="14" ry="18" fill="#fff"/><ellipse cx="24" cy="-6" rx="14" ry="18" fill="#fff"/>
          <circle cx="-23" cy="-4" r="10" fill="#6a4cc7"/><circle cx="25" cy="-4" r="10" fill="#6a4cc7"/>
          <circle cx="-23" cy="-4" r="4.5" fill="#1a1430"/><circle cx="25" cy="-4" r="4.5" fill="#1a1430"/>
          <circle cx="-19" cy="-9" r="3" fill="#fff"/><circle cx="29" cy="-9" r="3" fill="#fff"/>
        </g>
        <path d="M-34 -26 Q-24 -32 -12 -26" fill="none" stroke="#caa07a" stroke-width="3" stroke-linecap="round"/>
        <path d="M12 -26 Q24 -32 34 -26" fill="none" stroke="#caa07a" stroke-width="3" stroke-linecap="round"/>
        <path d="M-9 18 Q0 26 9 18" fill="none" stroke="#d98a86" stroke-width="3" stroke-linecap="round"/>
        <!-- hair front bangs + buns -->
        <path d="M-60 -16 Q-66 -86 0 -90 Q66 -86 60 -16 Q40 -54 22 -44 Q14 -70 0 -68 Q-14 -70 -22 -44 Q-40 -54 -60 -16 Z" fill="#4ec3d8"/>
        <circle cx="-58" cy="-58" r="20" fill="#4ec3d8"/><circle cx="58" cy="-58" r="20" fill="#4ec3d8"/>
        <circle cx="-58" cy="-58" r="8" fill="#ff8fb0"/><circle cx="58" cy="-58" r="8" fill="#ff8fb0"/>
        <!-- headphones -->
        <path d="M-66 -8 Q-66 -78 0 -82 Q66 -78 66 -8" fill="none" stroke="#2c333f" stroke-width="7" stroke-linecap="round"/>
        <rect x="-80" y="-14" width="20" height="34" rx="8" fill="#2c333f"/><rect x="60" y="-14" width="20" height="34" rx="8" fill="#2c333f"/>
        <rect x="-78" y="-9" width="6" height="24" rx="3" fill="#5cc6d6"/><rect x="72" y="-9" width="6" height="24" rx="3" fill="#5cc6d6"/>
      </g>
    </svg>`;
  }

  // variant C: projects as a Style 05 card grid (title on image, gold tags, description)
  function buildProjectsGrid(){
    if(!window.CASES) return;
    const sec=document.querySelector('.ip-work'); if(!sec || sec.dataset.pgrid) return; sec.dataset.pgrid='1';
    const ids=[...sec.querySelectorAll('.cs-card[data-case]')].map(c=>c.dataset.case);
    if(!ids.length) return;
    const body=sec.querySelector('.ip-body'); if(body) body.style.display='none';
    const grid=document.createElement('div'); grid.className='pjt-grid';
    grid.innerHTML=ids.map(id=>{
      const c=CASES[id]; if(!c) return '';
      const isScene=c.scene==='clip';
      const cover=c.cover||(c.images&&c.images[0]);
      const tags=(c.tags||[]).map(t=>`<span class="pjt-pill">${t}</span>`).join('');
      const imgAttr=(!isScene && cover)?` style="background-image:url('${cover}')"`:'';
      return `<a class="pjt" href="case.html?id=${id}&v=c" data-case="${id}" draggable="false">
        <div class="pjt-card"><div class="pjt-img${isScene?' pjt-scene':''}"${imgAttr}>${isScene?clipSceneHTML():''}<h3 class="pjt-title">${c.title}</h3></div></div>
        <div class="pjt-foot"><div class="pjt-tags">${tags}</div><p class="pjt-desc">${c.summary||''}</p></div>
      </a>`;
    }).join('');
    sec.appendChild(grid);
    grid.querySelectorAll('.pjt').forEach(a=>a.addEventListener('click',e=>{
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1) return;   // allow open-in-new-tab
      e.preventDefault(); openCaseOverlay(a.dataset.case);
    }));
    [...grid.querySelectorAll('.pjt')].forEach((el,i)=>revTag(el,i));
  }

  // ===== single-page scroll: pull inner sections in, scroll-spy the sidebar =====
  if (singlePage) {
    const hero = document.querySelector('.hero');
    hero.id = 'home';
    const SECS = [
      {id:'about',         file:'about.html'},
      {id:'experience',    file:'experience.html'},
      {id:'side-projects', file:'side-projects.html'},
      {id:'contact',       file:'contact.html'},
    ];
    Promise.all(SECS.map(s => fetch(s.file).then(r=>r.text()).then(t=>{
      const sec = new DOMParser().parseFromString(t,'text/html').querySelector('.ipage');
      if (sec) sec.setAttribute('id', s.id);
      return sec;
    }).catch(()=>null))).then(list => {
      let anchor = hero;
      list.forEach(sec => { if (sec) { const n = document.importNode(sec, true); anchor.insertAdjacentElement('afterend', n); anchor = n; } });

      // scroll-spy: highlight the section currently centred in the viewport
      const navA = {};
      document.querySelectorAll('.snav a').forEach(a => { const h = a.getAttribute('href'); if (h && h[0] === '#') navA[h.slice(1)] = a; });

      // click a nav item -> smooth-scroll to its section (robust for injected content)
      Object.keys(navA).forEach(id => navA[id].addEventListener('click', e => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
        if (document.body.classList.contains('sb-open')) document.body.classList.remove('sb-open');
        try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}   // keep the URL clean (no section hash) so a refresh always replays the intro
      }));
      const spy = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.snav a').forEach(a => a.classList.remove('cur'));
          if (navA[e.target.id]) navA[e.target.id].classList.add('cur');
        }
      }), {rootMargin:'-48% 0px -48% 0px', threshold:0});
      ['home','about','experience','side-projects','contact'].forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
      projectsView();
      reveal(document);
      if(window.applyLang) window.applyLang(document);   // localise injected sections

      // fix #5: honour an initial / changed URL hash once the sections exist.
      // Sections are injected here asynchronously, AFTER the browser already tried to
      // resolve the hash, so nothing scrolled. Map external aliases (#work, #projects)
      // to the real section ids, reveal gated content, then scroll — so a shared
      // deep-link never lands on the hero or a blank panel.
      const HASH_ALIAS = { work:'experience', projects:'side-projects' };
      function scrollToHash(smooth){
        const raw = (location.hash || '').replace('#',''); if(!raw) return;
        const el = document.getElementById(HASH_ALIAS[raw] || raw); if(!el) return;
        el.querySelectorAll('.r:not(.in)').forEach(e => e.classList.add('in'));  // target not blank on arrival
        el.scrollIntoView({block:'start', behavior: smooth ? 'smooth' : 'auto'});
      }
      // initial deep-link: let the hero entrance animation play first, then glide to the section.
      if ((location.hash || '').replace('#','')) {
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) { scrollToHash(false); }       // no intro to wait on — jump straight there
        else {
          let waited = 0;
          const t = setInterval(() => {            // hero adds .vh-settled ~1.7s in
            if (document.body.classList.contains('vh-settled') || (waited += 100) > 2600) {
              clearInterval(t); setTimeout(() => scrollToHash(true), 250);   // glide after the intro settles
            }
          }, 100);
        }
      }
      window.addEventListener('hashchange', () => scrollToHash(true));
    });
  } else {
    projectsView();
  }

  // vc Projects = coverflow carousel; a/b = expand cards + (vc would-be) hscroll
  function projectsView(){
    if (vv === 'c' && document.querySelector('.ip-work .cs-card[data-case]')) buildProjectsCarousel();
    else { wireProjects(); initHScroll(); }
  }
})();
