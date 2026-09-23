
const services=[{"name": "سواري او ترانسپورټ", "icon": "🚕", "desc": "ټکسي، رکشه، موټرسایکل او اطرافي موټر"}, {"name": "باربري او انتقالات", "icon": "🚚", "desc": "پیکپ، ډاټسن، لارۍ او د کور سامان انتقال"}, {"name": "کارګر او مسلکي کسان", "icon": "🛠️", "desc": "برېښناکار، نلدوان، نجار، رنګمال او ترمیم"}, {"name": "کور او جایداد", "icon": "🏠", "desc": "کور، ځمکه، دوکان، دفتر، کرایه او خرڅلاو"}, {"name": "موټر پلورنځی", "icon": "🚙", "desc": "موټر او موټرسایکل اخیستل او پلورل"}, {"name": "آنلاین بازار", "icon": "🛍️", "desc": "موبایل، برقي وسایل، جامې او د کور سامان"}, {"name": "رستورانت او خواړه", "icon": "🍽️", "desc": "نږدې رستورانتونه او کور ته د خوړو رسونه"}, {"name": "هوټل او مېلمستون", "icon": "🏨", "desc": "نږدې هوټلونه، مېلمستونونه او اړیکه"}, {"name": "روغتیايي خدمتونه", "icon": "🏥", "desc": "کلینیک، ډاکټر، لابراتوار او امبولانس"}, {"name": "درملتون او دوا", "icon": "💊", "desc": "نږدې درملتون، نسخه او د لوکیشن له لارې رسونه"}, {"name": "کوریر او پارسل", "icon": "📦", "desc": "اسناد، وړې بستې او سودا رسول"}, {"name": "برېښنا او سولر", "icon": "☀️", "desc": "سولر، بیټرۍ، انورټر، جنراتور او ترمیم"}, {"name": "کرنه او مالداري", "icon": "🚜", "desc": "ټراکټور، تخم، سره، وترنر او کرنیز بازار"}, {"name": "ساختماني خدمات", "icon": "🏗️", "desc": "انجینر، معمار، ماشینونه او ساختماني مواد"}, {"name": "ښوونه او روزنه", "icon": "📚", "desc": "ښوونکي، کورسونه، ژبې او کمپیوټر"}, {"name": "ډیجیټل خدمات", "icon": "💻", "desc": "ویب، ډیزاین، چاپ او کمپیوټري خدمتونه"}, {"name": "محفل او مراسم", "icon": "📸", "desc": "عکاسي، ویډیو، تالار، ډیکور او غږیز سیستم"}, {"name": "موټر خدمات", "icon": "🛞", "desc": "میخانیک، پنچر، بیټرۍ، پرزې او موټر مینځل"}];
const box=document.getElementById('services');
function draw(q=''){
 box.innerHTML='';
 services.filter(s=>(s.name+s.desc).includes(q)).forEach(s=>{
  const el=document.createElement('article'); el.className='card';
  el.innerHTML=`<div class="icon">${s.icon}</div><b>${s.name}</b><span>${s.desc}</span>`;
  el.onclick=()=>openService(s); box.appendChild(el);
 });
}
draw();
document.getElementById('search').addEventListener('input',e=>draw(e.target.value.trim()));
function openService(s){
 document.getElementById('mTitle').textContent=s.icon+' '+s.name;
 document.getElementById('mDesc').textContent=s.desc;
 document.getElementById('modal').classList.add('show');
}
document.getElementById('close').onclick=()=>document.getElementById('modal').classList.remove('show');
document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')e.currentTarget.classList.remove('show')};
document.getElementById('locBtn').onclick=()=>{
 if(!navigator.geolocation) return alert('ستاسو براوزر GPS نه ملاتړ کوي.');
 document.getElementById('locText').textContent='موقعیت اخلو...';
 navigator.geolocation.getCurrentPosition(
  p=>document.getElementById('locText').textContent='موقعیت فعال شو ✓',
  ()=>document.getElementById('locText').textContent='د موقعیت اجازه ورکړئ'
 );
};
