function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

/* COUNTER */
function counter(id, max) {
  let n = 0;
  const el = document.getElementById(id);
  const i = setInterval(() => {
    n += Math.ceil(max / 40);
    if (n >= max) { n = max; clearInterval(i) }
    el.textContent = n;
  }, 40);
}
counter('c1', 250);
counter('c2', 400);
counter('c3', 5);

/* BOOKING -> WHATSAPP */
function sendBooking() {
  const nama = b_nama.value.trim();
  const wa = b_wa.value.trim();
  const layanan = b_layanan.value;
  const keluhan = b_keluhan.value.trim();

  if (!nama || !wa || !keluhan) {
    alert('Lengkapi Data Booking.');
    return;
  }

  const admin = '6282354444334';
  const text = `*BOOKING SERVICE IBS KOMPUTER*%0A%0A - Nama: ${nama}%0A - WA: ${wa}%0A - Layanan: ${layanan}%0A - Keluhan: ${keluhan}`;
  window.open(`https://wa.me/${admin}?text=${text}`, '_blank');
}



/* ===== MOBILE HAMBURGER AUTO-INJECT ===== */
const nav = document.querySelector('nav');
const menu = document.querySelector('nav ul');

if (nav && menu) {
  const burger = document.createElement('div');
  burger.className = 'hamburger';
  burger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  nav.appendChild(burger);

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('show');
  });

  document.querySelectorAll('nav ul a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('show');
    });
  });
}

/* ===============================
   MOBILE ACTIVE LINE HANDLER
   =============================== */
const navLinks = document.querySelectorAll('nav ul a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});
