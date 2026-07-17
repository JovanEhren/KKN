export interface ArticleSection {
  icon: string;
  heading: string;
  bodyHtml: string;
}

export interface Article {
  title: string;
  colorClass: string;
  intro: string;
  sections: ArticleSection[];
  note: { title: string; text: string };
}

export const articles: Article[] = [
  {
    title: '🎤 PUBLIC SPEAKING: BERANI BERBICARA DI DEPAN UMUM',
    colorClass: 'tc-red',
    intro: 'Pernahkah kamu diminta maju ke depan kelas untuk bercerita atau presentasi? Perasaan itu wajar dialami semua orang. Yuk, kenali lebih dalam apa itu public speaking dan bagaimana cara melakukannya dengan baik!',
    sections: [
      {
        icon: '🤔',
        heading: 'Apa Itu Public Speaking?',
        bodyHtml: `<p>Public speaking adalah kemampuan berbicara di depan orang lain untuk menyampaikan ide, cerita, atau informasi dengan jelas dan percaya diri. Kemampuan ini bukan bakat bawaan — semua orang bisa mempelajarinya lewat latihan, termasuk kamu!</p>`,
      },
      {
        icon: '🎯',
        heading: 'Mengapa Public Speaking Penting?',
        bodyHtml: `<ul>
          <li>✅ <strong>Membantu menyampaikan pendapat dengan baik</strong> — orang lain jadi lebih mudah memahami maksud kita</li>
          <li>✅ <strong>Menambah rasa percaya diri</strong> — semakin sering bicara di depan orang, semakin kuat mentalmu</li>
          <li>✅ <strong>Memudahkan bekerja sama dengan teman</strong> — ide dan hasil diskusi bisa disampaikan dengan jelas saat kerja kelompok</li>
          <li>✅ <strong>Membantu saat presentasi di kelas</strong> — misalnya saat menceritakan hasil tugas atau proyek sekolah</li>
          <li>✅ <strong>Berguna untuk masa depan</strong> — hampir semua pekerjaan membutuhkan kemampuan berbicara yang baik</li>
        </ul>`,
      },
      {
        icon: '📝',
        heading: 'Tips Public Speaking',
        bodyHtml: `<ul>
          <li>🎤 <strong>Berdiri tegak dan percaya diri</strong> — sikap tubuh yang baik membuat kita terlihat lebih yakin</li>
          <li>👀 <strong>Lihat ke arah pendengar</strong> — agar mereka merasa diajak bicara, bukan diabaikan</li>
          <li>😊 <strong>Tersenyum saat berbicara</strong> — membuat suasana lebih hangat dan ramah</li>
          <li>🗣️ <strong>Gunakan suara yang jelas</strong> — supaya semua orang bisa mendengar dan memahami pesanmu</li>
          <li>🐢 <strong>Berbicara dengan pelan dan tidak terburu-buru</strong> — beri waktu bagi pendengar untuk mencerna setiap kata</li>
          <li>📋 <strong>Siapkan apa yang mau disampaikan</strong> — buat catatan kecil berisi poin-poin penting</li>
          <li>🙌 <strong>Gunakan gerakan tangan secukupnya</strong> — membantu memperjelas dan menghidupkan ceritamu</li>
        </ul>`,
      },
      {
        icon: '😥',
        heading: 'Cara Mengatasi Rasa Gugup',
        bodyHtml: `<ul>
          <li>🌬️ <strong>Tarik napas dalam-dalam</strong> sebelum mulai bicara, agar tubuh lebih rileks</li>
          <li>📖 <strong>Kenali betul apa yang mau disampaikan</strong> — semakin siap, semakin percaya diri</li>
          <li>🪞 <strong>Latihan di depan cermin</strong> atau di depan keluarga sebelum tampil di depan banyak orang</li>
          <li>💬 <strong>Ucapkan kalimat semangat pada diri sendiri</strong>, seperti "aku sudah siap dan pasti bisa!"</li>
          <li>🎯 <strong>Fokus pada pesan</strong> yang ingin disampaikan, bukan pada rasa takut</li>
        </ul>`,
      },
      {
        icon: '❌',
        heading: 'Kesalahan yang Sebaiknya Dihindari',
        bodyHtml: `<ul>
          <li>🙈 Menunduk terus dan tidak melihat pendengar sama sekali</li>
          <li>⏩ Berbicara terlalu cepat karena ingin cepat selesai</li>
          <li>🤐 Berbicara terlalu pelan hingga tidak terdengar</li>
          <li>😐 Membaca catatan tanpa henti tanpa berekspresi</li>
        </ul>`,
      },
      {
        icon: '🎬',
        heading: 'Contoh Situasi Public Speaking',
        bodyHtml: `<ul>
          <li>🏫 Bercerita di depan kelas tentang liburan</li>
          <li>👥 Menyampaikan hasil diskusi kelompok</li>
          <li>🎙️ Memimpin upacara atau menjadi MC acara sekolah</li>
          <li>🏆 Ikut lomba pidato atau bercerita</li>
          <li>🎂 Memberi ucapan selamat di acara ulang tahun keluarga</li>
        </ul>`,
      },
      {
        icon: '🏋️',
        heading: 'Yuk, Berlatih!',
        bodyHtml: `<p>Cobalah salah satu latihan berikut secara rutin: bercerita tentang hari-harimu di depan keluarga, membaca cerita dengan suara keras dan penuh ekspresi, atau merekam dirimu berbicara lalu mendengarkannya kembali. Semakin sering dicoba, kemampuanmu akan semakin terasah!</p>`,
      },
    ],
    note: { title: '🏅 Ingat!', text: 'Tidak apa-apa jika gugup. Semakin sering berlatih, kita akan semakin berani berbicara.' },
  },
  {
    title: '🤝 KOMUNIKASI NONVERBAL: BERBICARA TANPA KATA',
    colorClass: 'tc-teal',
    intro: 'Tahukah kamu, kita bisa menyampaikan pesan bahkan tanpa mengucapkan sepatah kata pun? Itulah yang disebut komunikasi nonverbal — cara berkomunikasi lewat gerakan dan ekspresi tubuh.',
    sections: [
      {
        icon: '🤔',
        heading: 'Apa Itu Komunikasi Nonverbal?',
        bodyHtml: `<p>Komunikasi nonverbal adalah cara menyampaikan pesan tanpa menggunakan kata-kata, misalnya lewat ekspresi wajah, gerakan tangan, atau sikap tubuh.</p>`,
      },
      {
        icon: '🧍',
        heading: 'Jenis-Jenis Komunikasi Nonverbal',
        bodyHtml: `<ul>
          <li>🙂 <strong>Ekspresi wajah</strong> — tersenyum, cemberut, atau terkejut menunjukkan perasaan kita</li>
          <li>👋 <strong>Gerakan tangan dan tubuh</strong> — melambai, menunjuk, atau mengangkat bahu</li>
          <li>👁️ <strong>Kontak mata</strong> — menatap seseorang saat berbicara menunjukkan perhatian</li>
          <li>🧍‍♂️ <strong>Postur tubuh</strong> — berdiri tegak atau membungkuk memberi kesan berbeda</li>
          <li>🔊 <strong>Nada suara</strong> — cara kita bicara (pelan, keras, lembut) juga menyampaikan perasaan meski katanya sama</li>
        </ul>`,
      },
      {
        icon: '😊',
        heading: 'Contohnya',
        bodyHtml: `<ul>
          <li>😊 <strong>Senyum</strong> → menunjukkan keramahan kepada orang lain</li>
          <li>👍 <strong>Jempol</strong> → menunjukkan persetujuan atau tanda "bagus, kamu hebat!"</li>
          <li>👋 <strong>Melambaikan tangan</strong> → menyapa teman saat bertemu atau berpisah</li>
          <li>😢 <strong>Wajah sedih</strong> → menunjukkan kesedihan tanpa perlu mengatakannya</li>
          <li>👏 <strong>Tepuk tangan</strong> → memberi apresiasi atas usaha atau penampilan seseorang</li>
          <li>🤷 <strong>Mengangkat bahu</strong> → menunjukkan tidak tahu atau ragu-ragu</li>
        </ul>`,
      },
      {
        icon: '⭐',
        heading: 'Mengapa Penting?',
        bodyHtml: `<ul>
          <li>⭐ <strong>Membantu orang lain memahami perasaan kita</strong>, bahkan saat kita belum sempat bicara</li>
          <li>⭐ <strong>Membuat komunikasi menjadi lebih jelas</strong>, karena ekspresi memperkuat apa yang kita katakan</li>
          <li>⭐ <strong>Membantu menunjukkan sikap sopan dan ramah</strong> kepada orang di sekitar kita</li>
          <li>⭐ <strong>Membantu kita memahami perasaan orang lain</strong>, meski mereka tidak mengatakannya secara langsung</li>
        </ul>`,
      },
      {
        icon: '✅',
        heading: 'Tips Komunikasi Nonverbal yang Baik',
        bodyHtml: `<ul>
          <li>✅ <strong>Tersenyum saat bertemu orang</strong> — kesan pertama yang ramah dan menyenangkan</li>
          <li>✅ <strong>Menatap lawan bicara dengan sopan</strong> — tanda kita benar-benar mendengarkan</li>
          <li>✅ <strong>Duduk dan berdiri dengan rapi</strong> — menunjukkan sikap sopan dan siap</li>
          <li>✅ <strong>Menganggukkan kepala saat mendengarkan</strong> — tanda kita memperhatikan lawan bicara</li>
        </ul>`,
      },
      {
        icon: '🚫',
        heading: 'Sikap yang Sebaiknya Dihindari',
        bodyHtml: `<ul>
          <li>🙄 Memutar mata saat orang lain sedang berbicara</li>
          <li>🙅 Membuang muka atau membelakangi lawan bicara</li>
          <li>😤 Menyilangkan tangan sambil cemberut, karena bisa terkesan tidak ramah</li>
        </ul>`,
      },
      {
        icon: '🔍',
        heading: 'Latihan Membaca Bahasa Tubuh',
        bodyHtml: `<p>Coba perhatikan ekspresi wajah dan gerakan tubuh teman atau anggota keluargamu. Bisakah kamu menebak perasaan mereka hanya dari raut wajah dan sikap tubuhnya, sebelum mereka mengucapkan sepatah kata pun? Latihan ini membantumu menjadi lebih peka dan berempati terhadap orang lain.</p>`,
      },
    ],
    note: { title: '🏅 Tahukah Kamu?', text: 'Kadang-kadang bahasa tubuh bisa menyampaikan pesan lebih kuat daripada kata-kata.' },
  },
  {
    title: '💡 THINKING OUT OF THE BOX DASAR',
    colorClass: 'tc-yellow',
    intro: 'Pernah punya masalah yang sepertinya sulit dipecahkan, lalu tiba-tiba menemukan cara unik untuk menyelesaikannya? Itulah yang disebut thinking out of the box!',
    sections: [
      {
        icon: '🤔',
        heading: 'Apa Itu Thinking Out of the Box?',
        bodyHtml: `<p>Thinking out of the box berarti berpikir dengan cara yang berbeda dan kreatif untuk menemukan ide atau solusi baru, bukan sekadar mengikuti cara yang biasa dilakukan orang lain.</p>`,
      },
      {
        icon: '💡',
        heading: 'Mengapa Kita Perlu Berpikir Kreatif?',
        bodyHtml: `<ul>
          <li>💡 <strong>Membantu memecahkan masalah</strong> — terutama masalah yang sulit diselesaikan dengan cara biasa</li>
          <li>💡 <strong>Membuat ide baru yang menarik</strong> — sesuatu yang belum pernah dipikirkan orang lain</li>
          <li>💡 <strong>Membantu belajar dengan cara yang menyenangkan</strong> — belajar jadi tidak membosankan</li>
        </ul>`,
      },
      {
        icon: '❄️',
        heading: 'Contoh Berpikir Kreatif',
        bodyHtml: `<p><strong>Masalah:</strong> Pensilmu terlalu pendek untuk digunakan.</p>
        <p><strong>Ide Biasa:</strong> Membeli pensil baru.</p>
        <p><strong>Ide Kreatif:</strong> Menggunakan sambungan pensil atau menjadikannya hiasan karya seni. Lihat, dari satu masalah kecil saja bisa muncul banyak solusi berbeda!</p>`,
      },
      {
        icon: '🧩',
        heading: 'Contoh Lain dalam Kehidupan Sehari-hari',
        bodyHtml: `<ul>
          <li>📏 Tidak ada penggaris? Gunakan tepi buku atau lipatan kertas untuk menggaris</li>
          <li>👕 Baju kotor mendadak sebelum acara? Padukan dengan aksesori lain agar tetap rapi</li>
          <li>🎁 Tidak sempat membeli kado? Buat kartu ucapan atau kerajinan tangan sendiri</li>
          <li>🌧️ Kehujanan tanpa payung? Gunakan tas plastik sebagai pelindung sementara</li>
        </ul>`,
      },
      {
        icon: '🧠',
        heading: 'Ciri-Ciri Orang yang Berpikir Kreatif',
        bodyHtml: `<ul>
          <li>🔎 Suka mengamati sesuatu dari berbagai sudut pandang</li>
          <li>❓ Senang bertanya "kenapa begini?" dan "bagaimana kalau begitu?"</li>
          <li>🎲 Berani mencoba cara baru meski belum pernah dilakukan sebelumnya</li>
          <li>🌱 Tidak mudah menyerah saat ide pertamanya belum berhasil</li>
        </ul>`,
      },
      {
        icon: '🌟',
        heading: 'Cara Melatih Berpikir Kreatif',
        bodyHtml: `<ul>
          <li>🌟 <strong>Banyak bertanya</strong> — "mengapa" dan "bagaimana jika" membantu menemukan sudut pandang baru</li>
          <li>🌟 <strong>Berani mencoba hal baru</strong> — meskipun belum yakin hasilnya akan berhasil</li>
          <li>🌟 <strong>Tidak takut salah</strong> — kesalahan adalah bagian dari proses belajar</li>
          <li>🌟 <strong>Mendengarkan ide orang lain</strong> — bisa jadi sumber inspirasi yang tidak terpikirkan sebelumnya</li>
        </ul>`,
      },
      {
        icon: '🎲',
        heading: 'Latihan Otak Kreatif',
        bodyHtml: `<p>Coba ambil satu benda di sekitarmu, misalnya sebuah gelas plastik. Dalam satu menit, sebutkan sebanyak mungkin kegunaan lain dari benda tersebut selain fungsi aslinya. Semakin sering berlatih seperti ini, otakmu akan semakin terbiasa menemukan ide-ide baru!</p>`,
      },
    ],
    note: { title: '🏅 Ingat!', text: 'Tidak ada ide yang langsung sempurna. Ide besar sering dimulai dari ide sederhana.' },
  },
  {
    title: '🌟 THINKING OUT OF THE BOX DALAM KEHIDUPAN SEHARI-HARI',
    colorClass: 'tc-green',
    intro: 'Berpikir kreatif tidak hanya berguna saat menghadapi masalah besar — kita bisa menerapkannya setiap hari, di rumah, di sekolah, bahkan saat bermain!',
    sections: [
      {
        icon: '🏠',
        heading: 'Berpikir Kreatif di Rumah',
        bodyHtml: `<ul>
          <li>🏠 <strong>Mengubah botol bekas menjadi pot tanaman</strong> — barang yang tadinya sampah jadi berguna kembali</li>
          <li>🏠 <strong>Membuat tempat pensil dari kardus bekas</strong> — hemat dan menyenangkan untuk dibuat sendiri</li>
          <li>🧺 <strong>Merapikan kamar dengan cara unik</strong> — misalnya membuat kotak penyimpanan sendiri dari kardus</li>
        </ul>`,
      },
      {
        icon: '🎒',
        heading: 'Berpikir Kreatif di Sekolah',
        bodyHtml: `<ul>
          <li>🎒 <strong>Membuat cara belajar yang menyenangkan dengan gambar atau warna</strong> — supaya materi lebih mudah diingat</li>
          <li>🎒 <strong>Membantu teman memahami pelajaran dengan permainan sederhana</strong> — belajar bersama jadi lebih seru</li>
          <li>📚 <strong>Membuat lagu atau pantun dari materi pelajaran</strong> — agar lebih mudah dihafal</li>
        </ul>`,
      },
      {
        icon: '⚽',
        heading: 'Berpikir Kreatif Saat Bermain',
        bodyHtml: `<ul>
          <li>⚽ <strong>Membuat permainan baru bersama teman</strong> — dengan aturan yang kalian ciptakan sendiri</li>
          <li>🎨 <strong>Membuat karya seni dari barang bekas</strong> — jadi kegiatan seru sekaligus menjaga lingkungan</li>
          <li>🏗️ <strong>Membangun sesuatu dari barang di sekitar</strong> — misalnya rumah-rumahan dari kardus atau bantal</li>
        </ul>`,
      },
      {
        icon: '🌱',
        heading: 'Manfaat bagi Lingkungan',
        bodyHtml: `<p>Selain melatih kreativitas, memanfaatkan barang bekas juga membantu mengurangi sampah di sekitar kita. Setiap kali kita mengubah barang bekas menjadi sesuatu yang baru dan berguna, kita juga sedang menjaga lingkungan tetap bersih!</p>`,
      },
      {
        icon: '🧩',
        heading: 'Tantangan Kreatif',
        bodyHtml: `<p>Coba lihat benda di sekitarmu! Pilih satu benda, lalu pikirkan:</p>
        <ul>
          <li>❓ Apa fungsi utamanya?</li>
          <li>❓ Bisakah benda itu digunakan untuk hal lain?</li>
          <li>❓ Ide baru apa yang bisa kamu buat?</li>
        </ul>`,
      },
      {
        icon: '📝',
        heading: 'Proyek Kreatif yang Bisa Kamu Coba',
        bodyHtml: `<ul>
          <li>🧴 Membuat tempat alat tulis dari botol atau kaleng bekas</li>
          <li>🖼️ Membuat hiasan dinding dari kertas atau kain perca</li>
          <li>🎲 Menciptakan permainan papan sederhana bersama keluarga</li>
        </ul>
        <p>Setelah mencoba salah satu ide di atas, coba ceritakan pengalamanmu kepada teman atau keluarga. Apa bagian yang paling sulit? Apa yang membuatmu bangga dengan hasil karyamu?</p>`,
      },
    ],
    note: { title: '🏅 Pesan Penutup', text: 'Setiap anak memiliki kreativitas. Jangan takut mencoba, bertanya, dan menemukan cara baru untuk menyelesaikan masalah. Kreativitas membuat belajar dan kehidupan sehari-hari menjadi lebih menyenangkan!' },
  },
];
