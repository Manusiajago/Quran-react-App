# 📖 Al-Qur'an Digital

Aplikasi web Al-Qur'an Digital yang modern dan responsif, memungkinkan Anda untuk membaca, mendengarkan, dan memahami Al-Qur'an dengan terjemahan bahasa Indonesia.

![Al-Qur'an Digital](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)

## ✨ Fitur Utama

-  **114 Surah Lengkap** - Akses seluruh surah dalam Al-Qur'an
-  **Audio Tilawah** - Dengarkan bacaan Al-Qur'an dengan suara Qari pilihan
-  **Terjemahan Indonesia** - Terjemahan resmi Kementerian Agama RI
-  **Pencarian Surah** - Cari surah dengan mudah berdasarkan nama
-  **Mode Gelap/Terang** - Pilihan tema untuk kenyamanan membaca
-  **Responsif** - Tampilan optimal di semua perangkat
-  **Cepat & Ringan** - Dibangun dengan teknologi modern untuk performa terbaik
-  **UI/UX Modern** - Antarmuka yang indah dan mudah digunakan

##  Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern:

- **[React 18](https://react.dev/)** - Library JavaScript untuk membangun UI
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript dengan type safety
- **[Vite](https://vitejs.dev/)** - Build tool yang sangat cepat
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Komponen UI yang dapat disesuaikan
- **[React Query](https://tanstack.com/query)** - Manajemen state server yang powerful
- **[React Router](https://reactrouter.com/)** - Routing untuk aplikasi React
- **[Lucide React](https://lucide.dev/)** - Ikon SVG yang indah

##  Instalasi

### Prasyarat

Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- npm atau yarn atau bun

### Langkah Instalasi

1. **Clone repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
bun install
```

3. **Jalankan development server**
```bash
npm run dev
# atau
yarn dev
# atau
bun dev
```

4. **Buka di browser**
```
http://localhost:8080
```

##  Struktur Proyek

```
src/
├── components/          # Komponen React yang dapat digunakan kembali
│   ├── ui/             # Komponen UI dari shadcn
│   ├── AudioPlayer.tsx # Player audio tilawah
│   ├── AyahCard.tsx    # Kartu tampilan ayat
│   ├── LoadingSpinner.tsx
│   ├── ModalKelompok.tsx
│   ├── Navbar.tsx      # Navigasi header
│   ├── ScrollToTop.tsx
│   ├── SearchBar.tsx   # Pencarian surah
│   └── SurahCard.tsx   # Kartu surah
├── pages/              # Halaman aplikasi
│   ├── Home.tsx        # Halaman utama (daftar surah)
│   ├── Surah.tsx       # Halaman detail surah
│   └── NotFound.tsx    # Halaman 404
├── hooks/              # Custom React hooks
├── lib/                # Utilities dan helpers
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles & design tokens
```

##  Kustomisasi

### Tema dan Warna

Aplikasi ini menggunakan design system yang dapat dikustomisasi melalui:
- `src/index.css` - CSS variables untuk tema dan warna
- `tailwind.config.ts` - Konfigurasi Tailwind CSS

### Font

- **Poppins** - Untuk teks Latin
- **Amiri** - Untuk teks Arab

Font dapat diubah di `tailwind.config.ts`

## 🌐 API

Aplikasi ini menggunakan [eQuran API](https://equran.id/apidev) untuk mendapatkan data Al-Qur'an:
- Daftar surah: `https://equran.id/api/v2/surat`
- Detail surah: `https://equran.id/api/v2/surat/{nomor}`

##  Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production secara lokal
- `npm run lint` - Menjalankan ESLint

##  Kontribusi

Kontribusi selalu diterima! Berikut cara untuk berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

##  Deployment

### Deploy ke Platform Lain

Aplikasi ini dapat di-deploy ke platform hosting modern seperti:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag & drop folder `dist` hasil build
- **GitHub Pages** - Gunakan GitHub Actions
- **Railway** - Connect repository dan deploy otomatis

Pastikan untuk menjalankan `npm run build` terlebih dahulu.

## 📄 Lisensi

Proyek ini dibuat untuk tujuan pendidikan dan ibadah. Silakan gunakan dengan bijak.

## 👥 Tim Pengembang

Dibuat dengan : Elzha mismaea

##  Kontak & Dukungan

Jika Anda memiliki pertanyaan atau saran, silakan buka issue di repository ini.

---

**Catatan:** Aplikasi ini menggunakan data dari eQuran API. Terima kasih kepada tim eQuran atas API yang luar biasa.

## 🎯 Roadmap

- [ ] Bookmark ayat favorit
- [ ] Mode hafalan
- [ ] Tafsir Al-Qur'an
- [ ] Pencarian ayat berdasarkan kata kunci
- [ ] Progress tracking membaca
- [ ] Sharing ayat ke sosial media
- [ ] Aplikasi PWA (offline-capable)

## 💡 Tips Penggunaan

- Gunakan **Dark Mode** untuk membaca di malam hari
- Klik tombol **Audio** untuk mendengarkan tilawah ayat
- Gunakan **Search Bar** untuk mencari surah dengan cepat
- Scroll ke bawah dan klik tombol **↑** untuk kembali ke atas

---

⭐ Jika proyek ini bermanfaat, jangan lupa berikan bintang di GitHub!
