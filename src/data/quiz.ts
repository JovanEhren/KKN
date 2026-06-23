export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface TopicQuiz {
  icon: string
  label: string
  colorClass: string
  questions: QuizQuestion[]
}

export const topicQuizzes: TopicQuiz[] = [
  {
    icon: '🎤',
    label: 'PUBLIC SPEAKING',
    colorClass: 'tc-red',
    questions: [
      {
        question: 'Apa yang dimaksud dengan public speaking?',
        options: ['Berbicara sendiri di kamar', 'Berbicara di depan banyak orang', 'Berbicara melalui telepon', 'Berbicara dalam bahasa asing'],
        correct: 1,
        explanation: 'Public speaking adalah kemampuan berbicara di depan banyak orang dengan percaya diri! 🎤',
      },
      {
        question: 'Apa yang sebaiknya dilakukan sebelum berbicara di depan umum untuk mengurangi rasa gugup?',
        options: ['Berlari-lari di sekitar ruangan', 'Makan sebanyak-banyaknya', 'Tarik napas dalam-dalam', 'Menutup mata dan diam'],
        correct: 2,
        explanation: 'Menarik napas dalam-dalam membantu menenangkan diri dan mengurangi rasa gugup! 😌',
      },
      {
        question: 'Manakah cara yang BAIK untuk berlatih public speaking?',
        options: ['Tidak pernah berbicara di depan orang', 'Latihan di depan cermin setiap hari', 'Hanya membaca buku saja', 'Bermain video game'],
        correct: 1,
        explanation: 'Latihan di depan cermin membantu kamu melihat ekspresi dan gerak tubuh sendiri saat berbicara! 🪞',
      },
      {
        question: 'Bagaimana cara berbicara yang baik saat public speaking?',
        options: ['Berbicara sangat cepat agar cepat selesai', 'Berbicara sangat pelan hingga tidak terdengar', 'Suara jelas dan tidak terlalu cepat', 'Berbicara sambil melihat ke lantai'],
        correct: 2,
        explanation: 'Berbicara dengan suara jelas dan tempo yang tepat membuat pendengar mudah memahami pesanmu! 🗣️',
      },
      {
        question: 'Apa yang membuat seseorang terlihat percaya diri saat public speaking?',
        options: ['Wajah cemberut dan tegang', 'Senyuman dan pandangan terbuka ke penonton', 'Tangan dimasukkan ke saku', 'Menundukkan kepala'],
        correct: 1,
        explanation: 'Senyuman dan tatapan yang ramah ke penonton membuat kamu terlihat percaya diri! 😊',
      },
    ],
  },
  {
    icon: '🤝',
    label: 'KOMUNIKASI NONVERBAL',
    colorClass: 'tc-teal',
    questions: [
      {
        question: 'Manakah yang merupakan contoh komunikasi nonverbal?',
        options: ['Menulis surat kepada teman', 'Menelepon orang tua', 'Tersenyum kepada seseorang', 'Membaca buku dengan keras'],
        correct: 2,
        explanation: 'Senyuman menyampaikan perasaan tanpa kata-kata — itulah komunikasi nonverbal! 😊',
      },
      {
        question: 'Apa arti gerakan menganggukkan kepala dalam komunikasi nonverbal?',
        options: ['Sedang mengantuk', 'Tidak setuju', 'Setuju atau mengerti', 'Sedang pusing'],
        correct: 2,
        explanation: 'Menganggukkan kepala umumnya berarti setuju, mengerti, atau mengiyakan! 👍',
      },
      {
        question: 'Berapa persen komunikasi manusia yang bersifat nonverbal?',
        options: ['Kurang dari 10%', 'Tepat 30%', 'Lebih dari 55%', 'Tepat 100%'],
        correct: 2,
        explanation: 'Lebih dari 55% komunikasi kita adalah nonverbal! Bahasa tubuh sangat penting. 🤯',
      },
      {
        question: 'Manakah yang BUKAN termasuk komunikasi nonverbal?',
        options: ['Ekspresi wajah saat bahagia', 'Menulis pesan teks di ponsel', 'Postur tubuh saat berdiri tegak', 'Kontak mata saat berbicara'],
        correct: 1,
        explanation: 'Menulis pesan teks menggunakan kata-kata tertulis, sehingga bukan komunikasi nonverbal! ✍️',
      },
      {
        question: 'Apa manfaat melakukan kontak mata saat berbicara dengan orang lain?',
        options: ['Membuat orang lain merasa takut', 'Menandakan kita mendengarkan dengan serius', 'Membuat mata menjadi lebih sehat', 'Tidak ada manfaatnya'],
        correct: 1,
        explanation: 'Kontak mata menunjukkan bahwa kita mendengarkan dengan serius dan peduli pada lawan bicara! 👁️',
      },
    ],
  },
  {
    icon: '💡',
    label: 'THINKING OUT OF THE BOX DASAR',
    colorClass: 'tc-yellow',
    questions: [
      {
        question: "Apa yang dimaksud dengan 'thinking out of the box'?",
        options: ['Memikirkan tentang kotak-kotak', 'Tidak mau berpikir', 'Berpikir di dalam sebuah kotak', 'Berpikir secara kreatif dan berbeda dari biasanya'],
        correct: 3,
        explanation: 'Thinking out of the box artinya berpikir kreatif dan mencari solusi yang berbeda dari cara biasa! 💡',
      },
      {
        question: 'Cara apa yang PALING baik untuk melatih kemampuan thinking out of the box?',
        options: ['Selalu melakukan hal yang persis sama setiap hari', 'Menghindari membaca buku', 'Mencoba hal-hal baru dan bermain puzzle', 'Tidur sepanjang hari'],
        correct: 2,
        explanation: 'Mencoba hal baru dan bermain puzzle membantu otak berpikir lebih kreatif dan fleksibel! 🧩',
      },
      {
        question: 'Mengapa kemampuan thinking out of the box sangat penting?',
        options: ['Agar bisa menghindari pelajaran di sekolah', 'Untuk membantu menemukan solusi masalah yang sulit', 'Agar kita tidak perlu belajar', 'Untuk membuat orang lain bingung'],
        correct: 1,
        explanation: 'Dengan berpikir kreatif, kita bisa menemukan solusi-solusi baru yang tidak terpikirkan sebelumnya! 🚀',
      },
      {
        question: 'Jika pensil kamu habis saat akan menulis, mana solusi yang menunjukkan thinking out of the box?',
        options: ['Menyerah dan tidak mengerjakan tugas', 'Menangis karena tidak bisa menulis', 'Menggunakan krayon atau kapur sebagai pengganti', 'Menunggu sampai mendapat pensil baru'],
        correct: 2,
        explanation: 'Mencari benda lain yang bisa menggantikan fungsi pensil adalah contoh berpikir kreatif! ✏️',
      },
      {
        question: 'Pertanyaan apa yang paling mencerminkan sikap thinking out of the box?',
        options: ['"Aku tidak bisa melakukan ini"', '"Ini tidak mungkin berhasil"', '"Bagaimana kalau kita coba cara yang berbeda?"', '"Sudah cukup, tidak perlu dicoba lagi"'],
        correct: 2,
        explanation: 'Pertanyaan "Bagaimana kalau?" mendorong otak untuk mencari kemungkinan-kemungkinan baru yang kreatif! 💭',
      },
    ],
  },
  {
    icon: '🌟',
    label: 'THINKING OUT OF THE BOX SEHARI-HARI',
    colorClass: 'tc-green',
    questions: [
      {
        question: 'Produk apa yang awalnya merupakan lem gagal tetapi kemudian menjadi alat tulis yang sangat populer?',
        options: ['Penghapus pensil', 'Stapler', 'Post-it Notes', 'Stabilo highlighter'],
        correct: 2,
        explanation: "Post-it Notes awalnya adalah lem yang 'gagal' karena terlalu lemah — kini jadi alat tulis super berguna! 📝",
      },
      {
        question: 'Bubble Wrap awalnya dirancang untuk digunakan sebagai...?',
        options: ['Mainan anak-anak', 'Wallpaper bertekstur untuk dinding', 'Pembungkus makanan', 'Alas sepatu'],
        correct: 1,
        explanation: 'Bubble Wrap awalnya dibuat sebagai wallpaper! Seseorang berpikir kreatif dan menggunakannya sebagai pelindung barang. 📦',
      },
      {
        question: 'Play-Doh awalnya dibuat untuk apa sebelum menjadi mainan populer?',
        options: ['Mainan anak-anak dari awal', 'Bahan makanan', 'Pembersih wallpaper', 'Cat tembok'],
        correct: 2,
        explanation: 'Play-Doh awalnya adalah pembersih wallpaper! Seorang guru berpikir kreatif dan menggunakannya sebagai mainan anak-anak. 🎨',
      },
      {
        question: 'Cara thinking out of the box yang bisa kamu lakukan saat belajar adalah...?',
        options: ['Hanya membaca buku teks', 'Membuat peta pikiran (mind map) berwarna-warni', 'Menghafal tanpa memahami', 'Tidak mencatat sama sekali'],
        correct: 1,
        explanation: 'Membuat mind map berwarna-warni adalah cara kreatif belajar yang membuat otak lebih mudah mengingat informasi! 🗺️',
      },
      {
        question: 'Apa yang sebaiknya dilakukan pertama kali saat menghadapi masalah yang sulit?',
        options: ['Langsung menyerah', 'Marah-marah kepada orang lain', 'Tuliskan semua kemungkinan solusi (brainstorming)', 'Pura-pura masalah tidak ada'],
        correct: 2,
        explanation: 'Brainstorming — menuliskan semua kemungkinan solusi — adalah cara terbaik untuk menemukan jawaban kreatif! 💡',
      },
    ],
  },
]
