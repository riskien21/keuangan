# 🚀 Demo Dashboard Pondok Pesantren

## 🎯 Fitur yang Dapat Dicoba

### 1. 🎨 Dark Mode Toggle
- Klik tombol **🌙/☀️** di header untuk mengubah tema
- Tema akan tersimpan di localStorage
- Semua komponen mendukung dark mode

### 2. 📊 Navigasi Grafik
- **Tombol ◀️ ▶️** untuk navigasi antar grafik
- **Indikator titik** untuk quick select grafik
- 3 jenis grafik:
  - Pemasukan vs Pengeluaran
  - Kategori Pemasukan
  - Kategori Pengeluaran

### 3. 💫 Animasi & Hover Effects
- **Kartu Statistik:** Hover untuk scale effect
- **Menu Sidebar:** Hover untuk highlight
- **Transaksi:** Hover untuk ring effect
- **Loading Animations:** Fade-in, slide-in, bounce-in

### 4. 📱 Responsive Design
- Resize browser untuk melihat adaptasi layout
- Breakpoint: Mobile, Tablet, Desktop
- Grid yang responsif

## 🎭 Data Mock yang Tersedia

### 📈 Statistik Keuangan
- **Total Saldo:** Rp 150.500.000 (+12.5%)
- **Total Pemasukan:** Rp 85.750.000 (+8.2%)
- **Total Pengeluaran:** Rp 35.250.000 (-3.1%)
- **Total Santri:** 324 (+5 santri)
- **Total Tunggakan:** Rp 12.500.000 (45 santri)

### 💰 Transaksi Terbaru
1. **Pembayaran Syahriyah** - Ahmad Fauzi (Rp 500.000)
2. **Pembelian Beras** - Konsumsi (Rp 2.500.000)
3. **Donasi Ramadhan** - Yayasan Al-Ikhlas (Rp 5.000.000)
4. **Listrik & Air** - Utilitas (Rp 1.200.000)
5. **Kas Santri** - Muhammad Rizki (Rp 100.000)

### 📊 Data Grafik
**Pemasukan vs Pengeluaran:**
- Pemasukan: Rp 85.750.000
- Pengeluaran: Rp 35.250.000

**Kategori Pemasukan:**
- Syahriyah: Rp 45.000.000
- Kas Santri: Rp 25.750.000
- Donasi: Rp 15.000.000

**Kategori Pengeluaran:**
- Konsumsi: Rp 18.500.000
- Sarana & Prasarana: Rp 12.250.000
- Operasional: Rp 4.500.000

## 🎨 Elemen Visual

### Warna Tema
- **Primary:** Indigo-Violet gradient
- **Success:** Emerald (pemasukan)
- **Danger:** Red (pengeluaran)
- **Warning:** Yellow (tunggakan)
- **Info:** Blue (santri)

### Tipografi
- **Font:** Inter (modern, clean)
- **Weights:** 300, 400, 500, 600, 700
- **Tracking:** Wide untuk heading

### Efek Khusus
- **Glassmorphism:** bg-white/20 + backdrop-blur-xl
- **Hover Scale:** hover:scale-105
- **Smooth Transitions:** transition-all duration-300
- **Ring Effects:** hover:ring-1 ring-emerald-300

## 🔧 Customization Tips

### Mengubah Warna Tema
```css
/* Ubah di tailwind.config.js */
colors: {
  primary: {
    500: '#your-color'
  }
}
```

### Menambah Animasi
```css
/* Tambah di index.css */
.custom-animation {
  animation: customFade 0.5s ease-in-out;
}
```

### Responsive Breakpoints
```css
/* Tailwind breakpoints */
sm: '640px'    # Small devices
md: '768px'    # Medium devices  
lg: '1024px'   # Large devices
xl: '1280px'   # Extra large devices
```

## 📝 Catatan Penggunaan

1. **Performance:** Grafik akan reload saat navigasi untuk animasi
2. **Accessibility:** Semua button memiliki focus states
3. **Mobile:** Sidebar dapat dikembangkan untuk mobile menu
4. **SEO:** Metadata dapat ditambahkan di head
5. **PWA:** Dapat ditambahkan service worker untuk offline

## 🚀 Next Steps

1. **Backend Integration:** Connect dengan API real
2. **Authentication:** Tambah login system
3. **Database:** Implementasi dengan database
4. **Reports:** Export PDF/Excel functionality
5. **Notifications:** Real-time notifications
6. **Mobile App:** React Native version

---
**Selamat mencoba! 🎉**