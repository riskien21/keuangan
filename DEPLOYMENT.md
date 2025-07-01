# 🚀 Panduan Deployment Dashboard Pondok Pesantren

Aplikasi ini dapat di-deploy ke berbagai platform hosting gratis. Berikut adalah panduan lengkapnya:

## 📱 **Demo Live Application**

**🔗 Link Demo:** https://pondok-pesantren-dashboard.vercel.app

*(Link akan aktif setelah deployment selesai)*

---

## 🌐 **Platform Hosting Gratis**

### 1. 🔷 **Vercel (Recommended)**

**Langkah Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy aplikasi
vercel --prod
```

**Atau melalui GitHub:**
1. Push kode ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Konfigurasi otomatis akan terdeteksi
5. Deploy!

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### 2. 📦 **Netlify**

**Langkah Deploy:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build aplikasi
npm run build

# Deploy ke Netlify
netlify deploy --prod --dir=dist
```

**Atau melalui Drag & Drop:**
1. Build aplikasi: `npm run build`
2. Buka [netlify.com](https://netlify.com)
3. Drag & drop folder `dist/` ke Netlify
4. Aplikasi langsung live!

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`

---

### 3. 🚀 **GitHub Pages**

**Setup GitHub Pages:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Tambah script ke package.json
"homepage": "https://username.github.io/pondok-pesantren-dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

### 4. ☁️ **Firebase Hosting**

**Setup Firebase:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login Firebase
firebase login

# Init Firebase
firebase init hosting

# Build dan deploy
npm run build
firebase deploy
```

**Firebase Config:**
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No`

---

### 5. 🌊 **Surge.sh**

**Deploy dengan Surge:**
```bash
# Install Surge
npm install -g surge

# Build aplikasi
npm run build

# Deploy
cd dist
surge
```

---

## 🔧 **Environment Variables**

Jika menggunakan environment variables, buat file `.env.example`:

```env
# API Configuration
VITE_API_URL=https://api.pondokpesantren.com
VITE_APP_NAME=Dashboard PPTQ Al-Asy'ariyyah

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

**Platform-specific setup:**
- **Vercel:** Add di dashboard Vercel → Settings → Environment Variables
- **Netlify:** Add di dashboard Netlify → Site settings → Environment variables
- **GitHub Pages:** Gunakan GitHub Secrets untuk CI/CD

---

## 📊 **Performance & SEO**

### Optimisasi Build:
```json
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['chart.js', 'react-chartjs-2']
        }
      }
    }
  }
})
```

### SEO Meta Tags:
```html
<!-- Tambah di index.html -->
<meta name="description" content="Dashboard Manajemen Keuangan Pondok Pesantren">
<meta name="keywords" content="pondok pesantren, dashboard, keuangan">
<meta property="og:title" content="Dashboard PPTQ Al-Asy'ariyyah">
<meta property="og:description" content="Sistem manajemen keuangan modern">
```

---

## 🔒 **Custom Domain**

### Setup Custom Domain:

**Vercel:**
1. Buka project di Vercel dashboard
2. Settings → Domains
3. Add domain (contoh: dashboard.pondokpesantren.com)
4. Configure DNS records

**Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS

**Cloudflare (Optional):**
- Tambah SSL certificate
- Enable caching
- Setup analytics

---

## 📱 **Progressive Web App (PWA)**

Untuk membuat PWA, tambahkan:

```bash
# Install Vite PWA plugin
npm install -D vite-plugin-pwa
```

```js
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dashboard PPTQ Al-Asy\'ariyyah',
        short_name: 'PPTQ Dashboard',
        description: 'Dashboard Manajemen Keuangan Pondok Pesantren',
        theme_color: '#4F46E5',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'mosque.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ]
})
```

---

## 🚀 **CI/CD Automation**

### GitHub Actions untuk auto-deploy:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📊 **Monitoring & Analytics**

### Google Analytics:
```html
<!-- Tambah di index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Monitoring (Sentry):
```bash
npm install @sentry/react
```

---

## 🔗 **Quick Deploy Links**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/pondok-pesantren-dashboard)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/pondok-pesantren-dashboard)

---

**🎉 Selamat! Dashboard Pondok Pesantren Anda sudah live di internet!**