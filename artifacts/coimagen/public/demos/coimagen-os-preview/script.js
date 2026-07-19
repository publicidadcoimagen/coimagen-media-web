const navitems = document.querySelectorAll('.navitem');
navitems.forEach(nav=>{
  nav.addEventListener('click', ()=>{
    navitems.forEach(n=>n.classList.remove('active'));
    nav.classList.add('active');
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+nav.dataset.view).classList.add('active');
  });
});

document.querySelectorAll('.swatch').forEach(s=>{
  s.addEventListener('click', ()=>{
    s.parentElement.querySelectorAll('.swatch').forEach(x=>x.classList.remove('sel'));
    s.classList.add('sel');
  });
});
document.querySelectorAll('.format-chip').forEach(s=>{
  s.addEventListener('click', ()=>{
    s.parentElement.querySelectorAll('.format-chip').forEach(x=>x.classList.remove('sel'));
    s.classList.add('sel');
  });
});
document.querySelectorAll('.net-chip').forEach(s=>{
  s.addEventListener('click', ()=> s.classList.toggle('sel'));
});

const palettes = [
  ['var(--purple)','var(--blue)'], ['var(--teal)','var(--green)'],
  ['var(--orange)','var(--coral)'], ['var(--yellow)','var(--orange)']
];

function generarCreativos(){
  const wrap = document.getElementById('canvasWrap');
  const name = document.getElementById('prodName').value || 'Tu producto';
  const count = parseInt(document.getElementById('prodVariations').value);
  const animate = document.getElementById('prodAnimate').checked;
  wrap.innerHTML = '<div class="spin"></div><div style="color:var(--muted); font-size:13px;">Generando '+count+' variaciones para "'+name+'"…</div>';

  // Integration point: replace this timeout with a real call to your
  // AI image/video generation provider (e.g. Anthropic API orchestrating
  // an image model, or Runway/Ideogram) using the fields above as the prompt.
  // The copy field below is where you'd insert the text-generation call.
  setTimeout(()=>{
    document.getElementById('prodCopy').value = '"'+name+': la solución que estabas buscando. Probalo hoy y sentí la diferencia." (copy de ejemplo — reemplazar con salida real del modelo de texto)';
    let html = '<div class="creative-grid" style="width:100%;">';
    for(let i=0;i<count;i++){
      const p = palettes[i % palettes.length];
      const badge = (animate && i===0) ? 'Video generado' : 'Vista previa';
      html += `<div class="creative-card" style="background:linear-gradient(150deg,${p[0]},${p[1]})">
        <span class="tag">${badge}</span>${name} — Variación ${i+1}
      </div>`;
    }
    html += '</div><button class="btn btn-ghost" style="margin-top:16px;" onclick="generarCreativos()">↻ Generar de nuevo</button>';
    wrap.innerHTML = html;
  }, 1400);
}

const angulosData = [
  {t:'Ángulo dolor — alivio', d:'Se enfoca en el problema cotidiano del avatar y cómo la oferta lo resuelve al instante.'},
  {t:'Ángulo prueba social', d:'Muestra testimonios y resultados reales para generar confianza inmediata.'},
  {t:'Ángulo urgencia/oferta', d:'Resalta el precio, el stock limitado o el tiempo de la promoción.'},
];
function generarAngulos(){
  const wrap = document.getElementById('angulosWrap');
  wrap.className = '';
  wrap.innerHTML = '<div class="spin"></div>';
  setTimeout(()=>{
    let html = '<div class="two-col" style="grid-template-columns:repeat(3,1fr);">';
    angulosData.forEach((a,i)=>{
      const p = palettes[i % palettes.length];
      html += `<div class="panel">
        <div class="creative-card" style="background:linear-gradient(150deg,${p[0]},${p[1]}); aspect-ratio:4/3; margin-bottom:12px;"><span class="tag">Imagen del ángulo</span></div>
        <h3 style="font-size:14px;">${a.t}</h3>
        <p style="font-size:12.5px; color:var(--muted); line-height:1.5; margin-top:6px;">${a.d}</p>
        <button class="btn btn-ghost" style="margin-top:12px; width:100%; justify-content:center;">Generar 9 variaciones →</button>
      </div>`;
    });
    html += '</div>';
    wrap.innerHTML = html;
  }, 1200);
}

// Library mock
const libGrid = document.getElementById('libGrid');
const libItems = ['Lanzamiento Julio','Testimonio Cliente','Beneficios Producto','Detrás de cámaras','Oferta Flash','Antes y Después'];
libItems.forEach((t,i)=>{
  const p = palettes[i % palettes.length];
  const div = document.createElement('div');
  div.className='creative-card';
  div.style.background = `linear-gradient(150deg,${p[0]},${p[1]})`;
  div.innerHTML = `<span class="tag">Feed 4:5</span>${t}`;
  libGrid.appendChild(div);
});

// Accounts mock
const accGrid = document.getElementById('accGrid');
const networks = [
  {n:'Instagram', c:'#e1306c', s:'Conectada · @coimagenmedia'},
  {n:'Facebook', c:'#1877f2', s:'Conectada · Coimagen Media'},
  {n:'TikTok', c:'#111', s:'Conectada · @coimagen'},
  {n:'LinkedIn', c:'#0a66c2', s:'Conectada · Coimagen Media Agency'},
  {n:'X (Twitter)', c:'#111', s:'Conectada · @coimagenmedia'},
  {n:'YouTube', c:'#ff0000', s:'Sin conectar'},
  {n:'Pinterest', c:'#e60023', s:'Sin conectar'},
  {n:'Threads', c:'#111', s:'Sin conectar'},
];
networks.forEach(net=>{
  const div = document.createElement('div');
  div.className='acc-card';
  const connected = net.s.startsWith('Conectada');
  div.innerHTML = `<div class="acc-top">
      <div class="acc-icon" style="background:${net.c}"></div>
      <div><div class="acc-name">${net.n}</div><div class="acc-sub">${net.s}</div></div>
    </div>
    <button class="btn ${connected ? 'btn-ghost' : 'btn-primary'}" style="justify-content:center;">${connected ? 'Desconectar' : 'Conectar cuenta'}</button>`;
  accGrid.appendChild(div);
});