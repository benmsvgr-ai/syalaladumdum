
const menu=document.getElementById('menu');const content=document.getElementById('content');const search=document.getElementById('search');let active=Object.keys(MATERI)[0];
function renderMenu(filter=''){menu.innerHTML='';Object.keys(MATERI).filter(k=>k.toLowerCase().includes(filter.toLowerCase())||JSON.stringify(MATERI[k]).toLowerCase().includes(filter.toLowerCase())).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.className=k===active?'active':'';b.onclick=()=>{active=k;render();renderMenu(search.value)};menu.appendChild(b)})}
function highlight(html,term){if(!term)return html;const safe=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return html.replace(new RegExp(safe,'gi'),m=>`<mark>${m}</mark>`)}
function render(){const m=MATERI[active];const term=search.value.trim();let html=`<article class="chapter"><h2>${active}</h2><p>${m.intro}</p>`;m.sections.forEach(s=>{html+=`<h3>${s.title}</h3>${s.html}`});html+='</article>';content.innerHTML=highlight(html,term);window.scrollTo({top:0,behavior:'smooth'})}
search.addEventListener('input',()=>{renderMenu(search.value);render()});renderMenu();render();
