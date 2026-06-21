export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    question: 'Apa yang dimaksud dengan public speaking?',
    options: ['Berbicara sendiri di kamar', 'Berbicara di depan banyak orang', 'Berbicara melalui telepon', 'Berbicara dalam bahasa asing'],
    correct: 1,
    explanation: 'Public speaking adalah kemampuan berbicara di depan banyak orang dengan percaya diri! 🎤',
  },
  {
    question: 'Manakah yang merupakan contoh komunikasi nonverbal?',
    options: ['Menulis surat kepada teman', 'Menelepon orang tua', 'Tersenyum kepada seseorang', 'Membaca buku dengan keras'],
    correct: 2,
    explanation: 'Senyuman menyampaikan perasaan tanpa kata-kata — itulah komunikasi nonverbal! 😊',
  },
  {
    question: 'Apa yang sebaiknya dilakukan sebelum berbicara di depan umum untuk mengurangi rasa gugup?',
    options: ['Berlari-lari di sekitar ruangan', 'Makan sebanyak-banyaknya', 'Tarik napas dalam-dalam', 'Menutup mata dan diam'],
    correct: 2,
    explanation: 'Menarik napas dalam-dalam membantu menenangkan diri dan mengurangi rasa gugup! 😌',
  },
  {
    question: 'Apa arti gerakan menganggukkan kepala dalam komunikasi nonverbal?',
    options: ['Sedang mengantuk', 'Tidak setuju', 'Setuju atau mengerti', 'Sedang pusing'],
    correct: 2,
    explanation: 'Menganggukkan kepala umumnya berarti setuju, mengerti, atau mengiyakan! 👍',
  },
  {
    question: "Apa yang dimaksud dengan 'thinking out of the box'?",
    options: ['Memikirkan tentang kotak-kotak', 'Tidak mau berpikir', 'Berpikir di dalam sebuah kotak', 'Berpikir secara kreatif dan berbeda dari biasanya'],
    correct: 3,
    explanation: 'Thinking out of the box artinya berpikir kreatif dan mencari solusi yang berbeda dari cara biasa! 💡',
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
    question: 'Produk apa yang awalnya merupakan lem gagal tetapi kemudian menjadi alat tulis yang sangat populer?',
    options: ['Penghapus pensil', 'Stapler', 'Post-it Notes', 'Stabilo highlighter'],
    correct: 2,
    explanation: "Post-it Notes awalnya adalah lem yang 'gagal' karena terlalu lemah — kini jadi alat tulis super berguna! 📝",
  },
  {
    question: 'Apa manfaat melakukan kontak mata saat berbicara dengan orang lain?',
    options: ['Membuat orang lain merasa takut', 'Menandakan kita mendengarkan dengan serius', 'Membuat mata menjadi lebih sehat', 'Tidak ada manfaatnya'],
    correct: 1,
    explanation: 'Kontak mata menunjukkan bahwa kita mendengarkan dengan serius dan peduli pada lawan bicara kita! 👁️',
  },
  {
    question: 'Cara apa yang PALING baik untuk melatih kemampuan thinking out of the box?',
    options: ['Selalu melakukan hal yang persis sama setiap hari', 'Menghindari membaca buku', 'Mencoba hal-hal baru dan bermain puzzle', 'Tidur sepanjang hari'],
    correct: 2,
    explanation: 'Mencoba hal baru dan bermain puzzle membantu otak berpikir lebih kreatif dan fleksibel! 🧩',
  },
];