
const menu=document.getElementById('menu'), content=document.getElementById('content'), search=document.getElementById('search');
let current=Object.keys(MATERI)[0];
function drawMenu(){const q=search.value.toLowerCase();menu.innerHTML='';Object.keys(MATERI).filter(k=>(k+MATERI[k].content).toLowerCase().includes(q)).forEach(k=>{const b=document.createElement('button');b.className=k===current?'active':'';b.innerHTML=`<span>${MATERI[k].icon}</span>${k}`;b.onclick=()=>{current=k;draw()};menu.appendChild(b);});}
function draw(){content.innerHTML=`<section class="page">${MATERI[current].content}</section>`;drawMenu();if(current==='Latihan SCM')startQuiz();}
function startQuiz(){const el=document.getElementById('quiz');if(!el)return;el.innerHTML='';QUESTIONS.forEach((x,i)=>{const d=document.createElement('details');d.innerHTML=`<summary>${i+1}. ${x[0]}</summary>`+x[1].map((o,j)=>`<p>${'ABCD'[j]}. ${o}</p>`).join('')+`<p><b>Jawaban: ${'ABCD'[x[2]]}</b></p><p>${x[3]}</p>`;el.appendChild(d);});}
search.oninput=drawMenu;drawMenu();draw();
