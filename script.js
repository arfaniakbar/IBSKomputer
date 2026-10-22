// Toggle Menu Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-xmark');
});

// Tutup menu mobile saat link diklik
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-xmark');
    });
});

// Data Detail Layanan & Hardware Toko
const serviceData = {
    'install-ulang': {
        title: 'Daftar Harga Install Ulang & Software',
        description: 'Termasuk aktivasi permanen, Driver lengkap, dan Office standar.',
        items: [
            { name: 'Install Windows 7 (32/64-bit)', price: 'Rp 50.000' },
            { name: 'Install Windows 8 / 8.1', price: 'Rp 50.000' },
            { name: 'Install Windows 10 (Home/Pro)', price: 'Rp 60.000' },
            { name: 'Install Windows 11 (Terbaru)', price: 'Rp 70.000' },
            { name: 'Install MacOS (MacBook / iMac)', price: 'Rp 150.000' },
            { name: 'Aplikasi Tambahan (Adobe, Corel, Office, Game)', price: 'Mulai Rp 20.000' }
        ]
    },
    'service-hardware': {
        title: 'Daftar Harga Service Hardware',
        description: 'Pengerjaan profesional oleh teknisi berpengalaman.',
        items: [
            { name: 'Pembersihan Fan + Ganti Thermal Paste', price: 'Rp 75.000' },
            { name: 'Perbaikan Engsel Laptop Patah', price: 'Rp 100.000 - Rp 200.000' },
            { name: 'Ganti Keyboard / Layar LCD Laptop', price: 'Jasa Rp 50.000 - Rp 75.000' },
            { name: 'Service Laptop / PC Mati Total', price: 'Rp 150.000 - Rp 350.000' },
            { name: 'Service Printer (Macet / Infus / Eror)', price: 'Mulai Rp 60.000' }
        ]
    },
    'jual-hardware': {
        title: 'Katalog Penjualan Hardware & Perangkat',
        description: 'Tersedia unit baru & bergaransi resmi di toko kami.',
        items: [
            { name: 'Laptop Baru & Second Berkualitas (Asus, Lenovo, Acer, dll)', price: 'Cek Ketersediaan' },
            { name: 'Printer (Canon, Epson, HP - Print, Scan, Copy)', price: 'Mulai Rp 850.000' },
            { name: 'Processor (Intel Core & AMD Ryzen)', price: 'Bervariasi' },
            { name: 'Motherboard & VGA Card', price: 'Bervariasi' },
            { name: 'Power Supply & Casing PC Gaming', price: 'Mulai Rp 250.000' }
        ]
    },
    'sparepart-upgrade': {
        title: 'Estimasi Biaya Upgrade',
        description: 'Solusi cepat bikin laptop/PC ngebut kembali.',
        items: [
            { name: 'Upgrade SSD 128GB / 256GB / 512GB / 1TB', price: 'Mulai Rp 200.000' },
            { name: 'Upgrade RAM Laptop / PC (4GB / 8GB / 16GB)', price: 'Mulai Rp 180.000' },
            { name: 'Baterai Laptop Original (Garansi)', price: 'Mulai Rp 250.000' },
            { name: 'Adaptor / Charger Laptop', price: 'Mulai Rp 150.000' }
        ]
    }
};

// Fungsi Membuka Modal
function openModal(serviceKey) {
    const modal = document.getElementById('priceModal');
    const modalBody = document.getElementById('modalBody');
    const data = serviceData[serviceKey];

    if (!data) return;

    let rowsHTML = '';
    data.items.forEach(item => {
        rowsHTML += `
            <tr>
                <td>${item.name}</td>
                <td><strong>${item.price}</strong></td>
            </tr>
        `;
    });

    modalBody.innerHTML = `
        <h3 class="modal-header-title">${data.title}</h3>
        <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 5px;">${data.description}</p>
        <table class="price-table">
            <thead>
                <tr>
                    <th>Produk / Layanan</th>
                    <th>Harga / Estimasi</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>
        <div class="modal-footer-btn">
            <a href="#booking" class="btn btn-primary" onclick="closeModal()">Pesan / Tanya via WhatsApp</a>
        </div>
    `;

    modal.style.display = 'block';
}

// Fungsi Menutup Modal
function closeModal() {
    const modal = document.getElementById('priceModal');
    modal.style.display = 'none';
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('priceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Integrasi Form Booking ke WhatsApp
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ganti dengan nomor WhatsApp Toko Anda
    const noWA = "087777284234";

    const nama = document.getElementById('nama').value;
    const hp = document.getElementById('hp').value;
    const perangkat = document.getElementById('perangkat').value;
    const keluhan = document.getElementById('keluhan').value;

    // Format Pesan WhatsApp
    const pesan = `Halo IBS Komputer, saya ingin melakukan pemesanan/service.%0A%0A` +
                  `*Nama:* ${nama}%0A` +
                  `*No. HP:* ${hp}%0A` +
                  `*Perangkat/Kategori:* ${perangkat}%0A` +
                  `*Keterangan:* ${keluhan}`;

    // Buka link WhatsApp
    window.open(`https://wa.me/${noWA}?text=${pesan}`, '_blank');
});
