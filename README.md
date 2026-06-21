# Steven Rantai Ponton - Website

Website profesional untuk CV. Lima Pilar Mulya - Spesialis Rantai Ponton & Excavator Amphibi

## 🚀 Fitur

- **Responsive Design** - Optimal di desktop, tablet, dan mobile
- **Modern UI** - Clean, profesional, tidak terlihat template AI
- **Fast Loading** - Pure vanilla JavaScript, tanpa framework bloat
- **Easy to Edit** - Semua data terpusat di `assets/js/data.js`
- **SEO Friendly** - Meta tags dan struktur optimal

## 📁 Struktur File

```
steven-rantai-ponton/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── main.css          # All styles
│   ├── js/
│   │   ├── data.js           # Product, portfolio, testimonial data
│   │   └── main.js           # Interactive functionality
│   └── images/
│       ├── logo.svg
│       ├── hero-excavator.jpg
│       ├── workshop.jpg
│       ├── products/         # Product images
│       └── portfolio/        # Portfolio images
└── README.md
```

## 🎨 Sections

1. **Hero** - Tagline, CTA, statistik
2. **About** - Profil perusahaan, visi misi
3. **Products** - Katalog dengan filter
4. **Portfolio** - Proyek yang sudah dikerjakan
5. **Contact** - Form dan info kontak

## ⚙️ Cara Edit Data

### Edit Produk

Buka `assets/js/data.js` dan edit array `productsData`:

```javascript
{
    id: 1,
    category: 'chain',              // chain, excavator, parts
    categoryName: 'Rantai Ponton',
    title: 'Nama Produk',
    description: 'Deskripsi produk...',
    image: 'assets/images/products/nama-file.jpg',
    badge: 'Best Seller',           // optional
    specs: {
        'Label': 'Value',
        // tambah spec lainnya
    },
    price: 'Rp 850.000',
    priceLabel: 'per meter'
}
```

### Edit Portfolio

Edit array `portfolioData`:

```javascript
{
    id: 1,
    category: 'infrastructure',
    title: 'Nama Proyek',
    description: 'Deskripsi...',
    location: 'Lokasi',
    year: '2024',
    image: 'assets/images/portfolio/nama-file.jpg'
}
```

### Edit Kontak

Buka `index.html` dan cari section `#contact`, edit:
- Nomor WhatsApp
- Email
- Alamat
- Jam operasional

## 🎯 Customization

### Ganti Warna

Edit `assets/css/main.css` di bagian `:root`:

```css
:root {
    --primary: #FF6B35;        /* Orange utama */
    --secondary: #004E89;      /* Biru */
    --accent: #F7B801;         /* Kuning */
}
```

### Ganti Logo

Replace file `assets/images/logo.svg` dengan logo baru

### Ganti Font

Edit di `index.html` bagian `<head>` dan ubah Google Fonts URL

## 🖼️ Menambah Gambar Real

Replace placeholder images di folder `assets/images/` dengan foto asli:

1. **Products**: `assets/images/products/`
2. **Portfolio**: `assets/images/portfolio/`
3. **Hero**: `assets/images/hero-excavator.jpg`
4. **Workshop**: `assets/images/workshop.jpg`

Format yang disarankan: JPG atau WebP, max 500KB per file

## 📱 Testing Responsive

Website sudah responsive, test di:
- Desktop (1920x1080)
- Tablet Landscape (1024x768)
- Tablet Portrait (768x1024)
- Mobile (375x667)

## 🚀 Deployment

### Option 1: Static Hosting (Gratis)
- **Netlify**: Drag & drop folder
- **Vercel**: Import dari GitHub
- **GitHub Pages**: Push ke repo

### Option 2: Shared Hosting
- Upload via FTP/cPanel File Manager
- Pastikan `index.html` di root directory

## 🔧 Browser Support

- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 TODO

- [ ] Replace semua placeholder images dengan foto real
- [ ] Update nomor WhatsApp di contact form
- [ ] Update email dan alamat lengkap
- [ ] Tambah Google Analytics (optional)
- [ ] Tambah sitemap.xml untuk SEO
- [ ] Optimize images (compress)

## 👤 Credits

Website by **echoezbe**  
Designed for: CV. Lima Pilar Mulya - Steven Rantai Ponton

---

**Last Updated**: 2026-06-21
