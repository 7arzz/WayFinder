# WayFinder Roadmap Platform

Selamat datang di **WayFinder Roadmap Platform**!

WayFinder adalah platform orkestrasi roadmap yang premium, modern, dan sangat interaktif. Platform ini mengubah daftar tugas standar menjadi pelacak kemajuan yang fungsional dan menarik secara visual, memungkinkan Anda untuk mengelola langkah-langkah proyek dengan lancar dan melacak kemajuan penyelesaian melalui antarmuka yang dibuat dengan indah.

## 🌟 Fitur Utama

- **Manajemen Langkah Interaktif**: Tambah, edit, dan atur ulang langkah-langkah roadmap dengan mudah.
- **Estetika Desain Premium**: Nikmati UI glassmorphic modern yang dilengkapi dengan token warna HSL, animasi mikro yang halus (didukung oleh Framer Motion), dan ikonografi yang indah (Lucide React).
- **Dukungan Mode Gelap/Terang**: Beralih dengan mulus antara tema gelap dan terang yang disesuaikan untuk visibilitas dan kenyamanan optimal.
- **Pelacakan Kemajuan**: Terdapat bilah kemajuan (progress bar) secara real-time dan statistik dasbor untuk membantu Anda memantau target Anda.

## 🚀 Memulai

Ikuti langkah-langkah berikut untuk mengatur proyek secara lokal di komputer Anda.

### Prasyarat

Pastikan Anda telah menginstal utilitas berikut:

- [Node.js](https://nodejs.org/) (disarankan minimal versi 16)
- `npm` (Node Package Manager)

### Instalasi

1. **Klon repositori ini** (jika belum):

   ```bash
   git clone <url-repositori-anda>
   cd Roadmap-app
   ```

2. **Instal dependensi**:
   Jalankan perintah berikut untuk menginstal semua paket dan library yang dibutuhkan:

   ```bash
   npm install
   ```

3. **Mulai server pengembangan**:
   Jalankan aplikasi secara lokal:

   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Buka browser web Anda dan navigasikan ke URL lokal yang ditampilkan di terminal Anda (biasanya `http://localhost:5173`).

## 🛠️ Teknologi yang Digunakan

- **Framework**: React 19 + Vite untuk pengembangan secepat kilat dan pembangunan (build) yang dioptimalkan.
- **Styling**: Vanilla CSS modern dengan kustom properti (variabel HSL) dan desain responsif.
- **Animasi**: [Framer Motion](https://www.framer.com/motion/) untuk transisi UI yang dinamis dan berasa hidup (physics-based).
- **Ikon**: [Lucide React](https://lucide.dev/) untuk ikon vektor yang tajam dan terukur.

## 📖 Cara Menggunakan

1. **Beranda Dasbor**: Saat pertama kali dibuka, Anda akan melihat ringkasan roadmap aktif dan kemajuan Anda saat ini.
2. **Membuat Roadmap**:
   - Atau, buat secara manual dan tentukan tugas-tugas proyek Anda sendiri.
3. **Kelola Tugas**: Klik langkah roadmap mana pun secara interaktif untuk mengedit detailnya, menandainya sebagai selesai, atau menghapusnya sama sekali. Perhatikan bilah kemajuan yang diperbarui secara real-time setiap kali Anda mencentang sebuah tugas.
4. **Cari & Filter**: Temukan tugas tertentu dengan cepat menggunakan fungsi pencarian real-time bawaan yang kami sediakan.

## 📁 Struktur Direktori

Berikut adalah gambaran umum tentang bagaimana direktori proyek ini disusun:

```text
Roadmap-app/
│
├── public/               # Aset statis seperti favicon atau gambar
├── src/                  # Kode sumber utama aplikasi
│   ├── components/       # Komponen UI React yang dapat digunakan ulang
│   ├── styles/           # File konfigurasi CSS dan desain sistem
│   ├── App.jsx           # Komponen akar aplikasi (Layout utama)
│   └── main.jsx          # Titik masuk utama aplikasi React
│
├── index.html            # Template HTML utama
├── package.json          # Sekumpulan dependensi dan skrip proyek
└── vite.config.js        # Konfigurasi untuk Vite builder
```

## 📜 Skrip NPM

Di dalam direktori proyek, Anda dapat menjalankan beberapa perintah di terminal Anda:

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan lokal dengan fitur Hot Module Replacement (HMR).
- `npm run build`: Membangun aplikasi yang telah dioptimalkan untuk siap rilis ke tahap produksi dalam folder `dist`.
- `npm run lint`: Menjalankan proses linting untuk melacak dan mencari potensi kesalahan format pada kode menggunakan ESLint.
- `npm run preview`: Mempratinjau hasil build produksi secara lokal di komputer Anda sebelum diluncurkan ke server.

## 🤝 Dukungan & Kontribusi

Jika Anda mengalami masalah teknis, memiliki pertanyaan mengenai pengaturan proyek, atau ingin mengusulkan fitur (berkontribusi), silakan hubungi pemelihara utama (maintainer) atau buat _Pull Request_ / _Issue_ langsung di platform repositori Anda.

---

_Dibuat sepenuh hati untuk memastikan semua proyek Anda selalu terkontrol, terpantau, dan tervisualisasi dengan indah._

## Website Link

[wayfinder-flame.vercel.app](https://wayfinder-flame.vercel.app/)
