// Copy blocks shared by pages. Facts come from mahabbati.com and the Mahabbati app.

export const JOURNEY = [
  {
    id: "taaruf",
    name: "Ta'aruf",
    line: "Saling mengenal lewat biodata.",
    how: "Ajukan ta'aruf dari aplikasi. Tidak dibalas dalam 7 hari, pengajuan batal otomatis dan kuotamu kembali.",
    photo: "j-taaruf",
    alt: "Seorang muslimah berkerudung biru muda dan seorang pria berdiri bersisian di serambi masjid.",
  },
  {
    id: "nadzhor",
    name: "Nadzhor",
    line: "Bertemu dan melihat calon, didampingi wali atau mahram.",
    how: "Pertemuan diatur setelah kedua pihak setuju. Tidak ada pertemuan berdua saja.",
    photo: "j-nadzhor",
    alt: "Dua orang duduk berjauhan di dalam masjid berhias kaligrafi emas.",
  },
  {
    id: "khitbah",
    name: "Khitbah",
    line: "Meminang dengan niat yang sudah mantap.",
    how: "Begitu proses serius dimulai, akunmu dikunci dari pengajuan lain.",
    photo: "j-khitbah",
    alt: "Sepasang cincin perak di dalam kotak beludru merah.",
  },
  {
    id: "pranikah",
    name: "Pranikah",
    line: "Bekal ilmu sebelum akad.",
    how: "Kajian, e-learning, dan ujian pranikah dengan sertifikat, langsung di aplikasi.",
    photo: "j-pranikah",
    alt: "Tangan memegang mushaf Al-Qur'an dan tasbih.",
  },
  {
    id: "akad",
    name: "Akad",
    line: "Ijab qabul yang khidmat.",
    how: "Ustadz pemateri dan koordinasi prosesi akad dari tim Wedding Organizer.",
    photo: "j-akad",
    alt: "Foto hitam putih pengantin pria berjabat tangan dengan wali saat ijab qabul.",
  },
  {
    id: "walimah",
    name: "Walimah",
    line: "Merayakan dengan cara yang diridhai.",
    how: "Paket Wedding Organizer syar'i, mulai Rp1,5 jt.",
    photo: "j-walimah",
    alt: "Pengantin berkebaya putih dan berpeci memegang buku nikah hijau.",
  },
] as const;

export const TAARUF_FAQ = [
  {
    q: "Bisakah aku mencari jodoh lewat website ini?",
    a: "Tidak. Pencarian, pengajuan ta'aruf, dan chat hanya ada di aplikasi Mahabbati untuk Android dan iOS. Website ini berisi informasi dan panduan.",
  },
  {
    q: "Apakah pendaftaran gratis?",
    a: "Ya. Akun gratis sudah mendapat satu pengajuan ta'aruf. Membership Silver dan Gold menambah kuota pengajuan dan membuka fitur seperti nadzhor, kajian, dan ujian pranikah.",
  },
  {
    q: "Bagaimana kalau pengajuanku tidak dibalas?",
    a: "Pengajuan yang tidak direspons dalam 7 hari dibatalkan otomatis, dan kuota yang terpakai dikembalikan ke akunmu.",
  },
  {
    q: "Siapa yang bisa melihat fotoku?",
    a: "Fotomu privat. Foto muslimah hanya ditinjau oleh admin wanita. Calon pasangan baru bisa melihatnya setelah kamu menyetujui permintaan, selama 24 jam, dan foto tidak bisa diunduh.",
  },
  {
    q: "Berapa lama proses verifikasi?",
    a: "Paling lama 3×24 jam. WNI memakai e-KTP, WNA memakai paspor, keduanya disertai foto wajah.",
  },
  {
    q: "Bagaimana proses nadzhor?",
    a: "Nadzhor adalah pertemuan untuk saling melihat dan berbincang lebih dalam. Di Mahabbati, nadzhor selalu didampingi wali atau mahram.",
  },
  {
    q: "Apakah kuota membership bisa ditabung?",
    a: "Tidak. Kuota yang tersisa tidak terbawa saat masa membership berakhir. Pembelian kuota tambahan membutuhkan membership yang aktif.",
  },
  {
    q: "Ada batasan saat chat?",
    a: "Setiap pesan maksimal 1.000 karakter, dengan jumlah pesan per ta'aruf sesuai membership: 20 untuk Silver dan 30 untuk Gold.",
  },
];

export const WO_FAQ = [
  {
    q: "Apakah vendornya sesuai syariat?",
    a: "Seluruh vendor melewati kurasi agar akad dan walimah berjalan sesuai syariat Islam.",
  },
  {
    q: "Harus pakai aplikasi Mahabbati dulu?",
    // DUMMY: konfirmasi kebijakan.
    a: "Tidak harus. Kamu bisa langsung konsultasi lewat WhatsApp, meskipun bertemu calon pasangan di luar Mahabbati.",
  },
  {
    q: "Apakah harga di website sudah final?",
    a: "Belum. Angka di website adalah estimasi awal. Harga final mengikuti jumlah tamu, lokasi, dan pilihan menu, dan dituliskan di penawaran resmi.",
  },
  {
    q: "Bisa melayani di luar Jakarta?",
    // DUMMY: konfirmasi area layanan.
    a: "Tanyakan kota dan tanggal acaramu ke tim lewat WhatsApp, kami cek ketersediaannya.",
  },
];

export const MEMBERSHIP = {
  tiers: ["Free", "Silver", "Gold"] as const,
  rows: [
    { label: "Pengajuan ta'aruf", values: ["1", "10", "25"] },
    { label: "Pesan per ta'aruf", values: [null, "20", "30"] },
    { label: "Minta lihat foto", values: [false, true, true] },
    { label: "Nadzhor dan khitbah", values: [false, true, true] },
    { label: "Kajian dan e-learning", values: [false, true, "Semua materi"] },
    { label: "Ujian pranikah dan sertifikat", values: [false, true, true] },
    { label: "Benefit merchant", values: [false, true, "Diskon eksklusif"] },
    { label: "Tiket acara Mahabbati", values: [false, false, true] },
    { label: "Jalur prioritas tim admin", values: [false, false, true] },
  ] as { label: string; values: (string | boolean | null)[] }[],
};
