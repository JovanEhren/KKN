# 🎓 Belajar Komunikasi

Website edukatif interaktif untuk anak-anak dalam mempelajari dunia komunikasi — mulai dari public speaking, komunikasi nonverbal, hingga cara berpikir kreatif (thinking out of the box).

Dibuat sebagai bagian dari proyek **KKN (Kuliah Kerja Nyata)**.

---

## Fitur

- 📚 **Modul Membaca** — 4 artikel untuk 4 topik materi
- 🎬 **Bagian Video** — video YouTube per topik
- ✏️ **Sistem Kuis** — 4 kuis per topik (5 soal masing-masing) dengan nyawa dan skor
- 🎵 **Dual BGM** — musik latar berbeda untuk mode belajar dan kuis
- 📱 **Ramah Mobile** — tampilan responsif dengan peringatan rotasi layar
- ℹ️ **Halaman Tentang** — informasi aplikasi dan topik pembelajaran

---

## Apa yang Dipakai?

| Teknologi | Versi |
|---|---|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| pnpm | 11 |

---

## Cara Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v11+

### Install & Jalankan

```bash
# Install dependensi
pnpm install

# Jalankan server pengembangan
pnpm dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Build untuk Produksi

```bash
pnpm build
```

Hasil build akan tersimpan di folder `dist/`.

### Preview Hasil Build

```bash
pnpm preview
```

---

## 📁 Struktur Proyek

```
KKN/
├── public/
│   ├── hill.svg                  # Ilustrasi bukit latar belakang
│   ├── LobbyStudy_bgm.mp3        # BGM untuk layar belajar
│   ├── Quiz_bgm.mp3              # BGM untuk layar kuis
│   └── SoundEffect/
│       ├── pop.mp3               # Suara klik tombol
│       ├── correctPop.mp3        # Suara jawaban benar
│       └── wrongPop.mp3          # Suara jawaban salah
├── src/
│   ├── components/
│   │   ├── screens/              # Semua komponen layar
│   │   ├── Background.tsx        # Animasi langit
│   │   ├── LandscapeWarning.tsx  # Peringatan mode landscape
│   │   └── VideoModal.tsx        # Modal embed YouTube
│   ├── data/
│   │   ├── articles.ts           # Konten artikel (4 topik)
│   │   ├── quiz.ts               # Soal kuis (4 topik × 5 soal)
│   │   └── tips.ts               # Kumpulan tip acak
│   ├── App.tsx                   # Komponen utama & state
│   ├── index.css                 # Gaya global
│   └── main.tsx                  # Entry point
└── index.html
```

---

## Menambahkan Video YouTube

Buka [src/components/screens/VideoScreen.tsx](src/components/screens/VideoScreen.tsx) dan ganti ID video placeholder:

```ts
const videos = [
  { id: 'ID_VIDEO_DISINI', ... },
  ...
]
```

ID video adalah bagian setelah `?v=` pada URL YouTube:
`https://www.youtube.com/watch?v=`**`dQw4w9WgXcQ`**

---

## Kustomisasi

| Yang Ingin Diubah | Lokasi File |
|---|---|
| Konten artikel | `src/data/articles.ts` |
| Soal kuis | `src/data/quiz.ts` |
| Tip harian | `src/data/tips.ts` |
| Teks halaman Tentang | `src/components/screens/TentangScreen.tsx` |
| Palet warna | `src/index.css` — variabel `:root` |
| Ilustrasi bukit | `public/hill.svg` |

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan edukatif dan pengabdian masyarakat Guyangan Kidul.
