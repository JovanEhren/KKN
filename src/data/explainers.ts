export interface ExplainerScene {
  emoji: string;
  text: string;
}

export interface ExplainerTopic {
  icon: string;
  label: string;
  theme: 'red' | 'teal' | 'yellow' | 'green';
  scenes: ExplainerScene[];
}

export const explainers: ExplainerTopic[] = [
  {
    icon: '🎤',
    label: 'Public Speaking',
    theme: 'red',
    scenes: [
      { emoji: '😬', text: 'Kamu pernah disuruh maju ke depan kelas?' },
      { emoji: '😌', text: 'Itu namanya PUBLIC SPEAKING!' },
      { emoji: '🗣️', text: 'Berbicara di depan orang lain dengan percaya diri.' },
      { emoji: '🎯', text: 'Kenapa penting? Biar idemu didengar semua orang!' },
      { emoji: '🧍', text: 'Tips 1: Berdiri tegak, dan senyum 😊' },
      { emoji: '👀', text: 'Tips 2: Lihat pendengarmu, bukan lantai!' },
      { emoji: '🐢', text: 'Tips 3: Bicara pelan-pelan, jangan buru-buru.' },
      { emoji: '💪', text: 'Gugup itu wajar! Semakin sering coba, semakin berani.' },
      { emoji: '🎉', text: 'Yuk, jadi pembicara hebat mulai sekarang!' },
    ],
  },
  {
    icon: '🤝',
    label: 'Komunikasi Nonverbal',
    theme: 'teal',
    scenes: [
      { emoji: '🤫', text: "Tahukah kamu? Kita bisa 'ngomong' tanpa kata-kata!" },
      { emoji: '😊', text: 'Itu namanya KOMUNIKASI NONVERBAL.' },
      { emoji: '👍', text: 'Senyum = ramah. Jempol = setuju!' },
      { emoji: '👋', text: "Lambaian tangan = 'Hai, apa kabar?'" },
      { emoji: '😢', text: 'Wajah sedih cerita perasaan tanpa sepatah kata.' },
      { emoji: '👏', text: 'Tepuk tangan = kamu keren banget!' },
      { emoji: '👁️', text: 'Coba tatap mata teman saat ngobrol, biar mereka merasa didengar.' },
      { emoji: '⭐', text: 'Bahasa tubuh kadang lebih kuat dari kata-kata, lho!' },
      { emoji: '🎉', text: 'Sekarang kamu jago baca bahasa tubuh!' },
    ],
  },
  {
    icon: '💡',
    label: 'Thinking Out of the Box',
    theme: 'yellow',
    scenes: [
      { emoji: '✏️', text: 'Pensilmu tiba-tiba jadi pendek banget...' },
      { emoji: '😐', text: 'Ide biasa: beli pensil baru.' },
      { emoji: '💡', text: 'Ide KREATIF: jadikan hiasan karya seni!' },
      { emoji: '🤯', text: 'Itulah THINKING OUT OF THE BOX!' },
      { emoji: '❓', text: "Rahasianya: banyak bertanya 'kenapa?' dan 'gimana kalau?'" },
      { emoji: '🎲', text: 'Berani coba hal baru, walau belum tentu berhasil.' },
      { emoji: '🌱', text: 'Tidak takut salah — salah itu bagian dari belajar!' },
      { emoji: '🏅', text: 'Ide besar selalu mulai dari ide kecil dan sederhana.' },
      { emoji: '🚀', text: 'Yuk latih otak kreatifmu setiap hari!' },
    ],
  },
  {
    icon: '🌟',
    label: 'Kreativitas Sehari-hari',
    theme: 'green',
    scenes: [
      { emoji: '🏠', text: 'Botol bekas di rumah? Jangan dibuang dulu!' },
      { emoji: '🌱', text: 'Ubah jadi pot tanaman kece!' },
      { emoji: '🎒', text: 'Di sekolah, belajar pakai gambar dan warna itu seru.' },
      { emoji: '🤝', text: 'Ajak teman main sambil belajar bareng.' },
      { emoji: '⚽', text: 'Saat main, coba ciptakan permainan baru sendiri!' },
      { emoji: '🎨', text: 'Barang bekas bisa jadi karya seni yang keren.' },
      { emoji: '🌍', text: 'Bonus: bumi jadi lebih bersih dan sehat!' },
      { emoji: '🧠', text: 'Ingat, setiap anak itu kreatif — termasuk kamu!' },
      { emoji: '🎉', text: 'Yuk mulai berkreasi dari hal kecil di sekitarmu!' },
    ],
  },
];
