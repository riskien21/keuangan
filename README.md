# 🕌 Dashboard Manajemen Keuangan Pondok Pesantren

Dashboard aplikasi manajemen keuangan yang elegan dan modern untuk Pondok Pesantren Tahfidz Qur'an (PPTQ) Al-Asy'ariyyah, dibangun dengan React dan Tailwind CSS.

## ✨ Fitur Utama

### 🎯 Layout & Navigasi
- ✅ Sidebar tetap (fixed) dengan gradasi indigo-violet yang elegan
- ✅ Menu navigasi responsif dengan ikon Lucide React
- ✅ Efek hover animasi dengan scale dan transisi halus
- ✅ Active menu highlighting dengan glassmorphism

### 📊 Dashboard Konten
- ✅ Header dengan sambutan admin dan pencarian
- ✅ 5 kartu statistik dengan efek glassmorphism
- ✅ Grafik donut interaktif dengan Chart.js
- ✅ Daftar transaksi terbaru dengan ikon dinamis
- ✅ Animasi fade-in, slide-in, dan bounce-in

### 🌙 Dark Mode
- ✅ Toggle dark/light mode dengan animasi halus
- ✅ Penyimpanan preferensi tema di localStorage
- ✅ Support penuh dark mode di semua komponen

### 📱 Responsive Design
- ✅ Layout adaptif untuk desktop, tablet, dan mobile
- ✅ Grid responsif dengan breakpoint Tailwind CSS
- ✅ Komponen yang dapat digunakan ulang

## 🚀 Instalasi & Penggunaan

### Prasyarat
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repositori:**
```bash
git clone https://github.com/your-username/pondok-pesantren-dashboard.git
cd pondok-pesantren-dashboard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Jalankan development server:**
```bash
npm run dev
```

4. **Buka browser dan akses:**
```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
```

## 🎨 Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library yang modern
- **Chart.js** - Library untuk grafik interaktif
- **React Chart.js 2** - React wrapper untuk Chart.js

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── Sidebar.jsx           # Navigasi sidebar
│   ├── Dashboard.jsx         # Layout utama dashboard
│   ├── Header.jsx           # Header dengan search & dark mode
│   ├── StatsCards.jsx       # Kartu statistik
│   ├── ChartSection.jsx     # Grafik donut interaktif
│   └── RecentTransactions.jsx # Transaksi terbaru
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## 🎯 Komponen Utama

### Sidebar
- Menu navigasi dengan ikon dari Lucide React
- Background gradasi indigo ke violet
- Efek hover dengan scale dan backdrop-blur
- Active state dengan highlight

### Dashboard Stats
- 5 kartu statistik: Saldo, Pemasukan, Pengeluaran, Santri, Tunggakan
- Efek glassmorphism dengan backdrop-blur
- Hover animasi scale dengan durasi 300ms
- Ikon berwarna sesuai kategori

### Chart Section
- 3 jenis grafik donut: Pemasukan vs Pengeluaran, Kategori Pemasukan, Kategori Pengeluaran
- Navigasi slide dengan tombol prev/next
- Animasi easeOutBounce dengan durasi 1000ms
- Tooltip dengan format mata uang Rupiah

### Recent Transactions
- List 5 transaksi terbaru
- Ikon dinamis (⬆ pemasukan, ⬇ pengeluaran)
- Status badge (Selesai/Pending)
- Hover effect dengan ring emerald

## 🎨 Kustomisasi

### Warna Tema
Ubah warna tema di `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Kustomisasi warna primary
      }
    }
  }
}
```

### Animasi
Tambah animasi kustom di `tailwind.config.js`:

```js
animation: {
  'custom-bounce': 'customBounce 1s ease-in-out',
},
keyframes: {
  customBounce: {
    // Definisi keyframe
  }
}
```

## 📱 Responsiveness

- **Mobile (< 768px):** Stack layout, sidebar collapse
- **Tablet (768px - 1024px):** 2-column grid untuk stats
- **Desktop (> 1024px):** Full layout dengan 3-5 column grid

## 🔧 Konfigurasi

### Dark Mode
Dark mode menggunakan class strategy:

```js
// tailwind.config.js
darkMode: 'class'
```

### Font
Menggunakan Inter font family untuk konsistensi:

```css
font-family: 'Inter', ui-sans-serif, system-ui
```

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload folder dist/ ke Netlify
```

## 📝 Data Mock

Aplikasi menggunakan data mock untuk demonstrasi:
- Statistik keuangan pondok pesantren
- Transaksi pembayaran syahriyah dan pengeluaran
- Data santri dan tunggakan

## 🤝 Kontribusi

1. Fork repositori
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Pengembang

Dikembangkan dengan ❤️ untuk kemajuan pendidikan pesantren di Indonesia.

---

**PPTQ Al-Asy'ariyyah** - *Dashboard Manajemen Keuangan Modern*
