// pembelajaran.js - KOMPONEN SISTEM PEMBELAJARAN SDN SAMPANGAN 01
const PembelajaranContent = () => {
  const { useEffect, useState } = React;

  // State untuk responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState("kurikulum");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Effect untuk mendeteksi perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data Sistem Pembelajaran
  const learningData = {
    // Kurikulum yang digunakan
    curriculum: {
      name: "Kurikulum Merdeka",
      description:
        "SDN Sampangan 01 menerapkan Kurikulum Merdeka yang berfokus pada pengembangan karakter, kompetensi, dan literasi siswa sesuai dengan tahap perkembangan mereka.",
      features: [
        "Pembelajaran berdiferensiasi sesuai kemampuan siswa",
        "Projek Penguatan Profil Pelajar Pancasila",
        "Fokus pada literasi dan numerasi",
        "Assesmen formatif yang berkelanjutan",
        "Pembelajaran kontekstual dan bermakna",
      ],
      benefits: [
        "Siswa belajar sesuai dengan minat dan bakat",
        "Pengembangan karakter yang kuat",
        "Keterampilan abad 21 yang terintegrasi",
        "Pembelajaran yang menyenangkan dan relevan",
      ],
    },

    // Metode Pembelajaran
    methods: [
      {
        id: 1,
        name: "Pembelajaran Berbasis Proyek (PjBL)",
        icon: "fas fa-project-diagram",
        description:
          "Siswa belajar melalui proyek nyata yang memecahkan masalah dalam kehidupan sehari-hari.",
        implementation:
          "Diterapkan dalam Projek Penguatan Profil Pelajar Pancasila dan tema-tema pembelajaran tematik",
        benefits: [
          "Meningkatkan kreativitas",
          "Mengembangkan kemampuan kolaborasi",
          "Melatih pemecahan masalah",
          "Membuat pembelajaran lebih bermakna",
        ],
        examples: [
          'Projek "Taman Sekolah Hijau"',
          'Projek "Kampung Literasi"',
          'Projek "Budaya Lokal"',
        ],
      },
      {
        id: 2,
        name: "Pembelajaran Kooperatif",
        icon: "fas fa-users",
        description:
          "Siswa bekerja dalam kelompok kecil untuk mencapai tujuan belajar bersama.",
        implementation:
          "Digunakan dalam pembelajaran kelompok, diskusi, dan presentasi",
        benefits: [
          "Meningkatkan kerjasama tim",
          "Mengembangkan komunikasi",
          "Saling membantu dalam belajar",
          "Membangun rasa percaya diri",
        ],
        examples: [
          "Kelompok belajar matematika",
          "Diskusi kelompok bahasa Indonesia",
          "Presentasi kelompok IPA",
        ],
      },
      {
        id: 3,
        name: "Pembelajaran Kontekstual (CTL)",
        icon: "fas fa-globe-asia",
        description:
          "Menghubungkan materi pelajaran dengan kehidupan nyata siswa dan lingkungan sekitar.",
        implementation:
          "Materi pembelajaran dikaitkan dengan pengalaman sehari-hari siswa",
        benefits: [
          "Pembelajaran lebih relevan",
          "Mudah dipahami siswa",
          "Meningkatkan minat belajar",
          "Mengembangkan kecakapan hidup",
        ],
        examples: [
          "Belajar matematika dengan jual beli di kantin",
          "Belajar IPA dengan observasi lingkungan",
          "Belajar IPS dengan kunjungan ke tempat bersejarah",
        ],
      },
      {
        id: 4,
        name: "Pembelajaran Diferensiasi",
        icon: "fas fa-user-graduate",
        description:
          "Menyediakan berbagai cara belajar untuk memenuhi kebutuhan individu setiap siswa.",
        implementation:
          "Tugas dan aktivitas disesuaikan dengan tingkat kemampuan siswa",
        benefits: [
          "Setiap siswa belajar sesuai kemampuan",
          "Mengurangi kesenjangan belajar",
          "Meningkatkan kepercayaan diri",
          "Memaksimalkan potensi setiap siswa",
        ],
        examples: [
          "Tugas dengan tingkat kesulitan berbeda",
          "Pilihan cara menyelesaikan tugas",
          "Waktu belajar yang fleksibel",
        ],
      },
      {
        id: 5,
        name: "Pembelajaran Berbasis Teknologi",
        icon: "fas fa-laptop",
        description:
          "Memanfaatkan teknologi digital untuk mendukung proses pembelajaran.",
        implementation:
          "Penggunaan komputer, proyektor, dan aplikasi edukasi dalam pembelajaran",
        benefits: [
          "Meningkatkan keterampilan digital",
          "Pembelajaran lebih interaktif",
          "Akses sumber belajar yang luas",
          "Mempersiapkan siswa untuk era digital",
        ],
        examples: [
          "Presentasi dengan PowerPoint",
          "Belajar dengan aplikasi edukasi",
          "Video pembelajaran interaktif",
        ],
      },
      {
        id: 6,
        name: "Pembelajaran Outdoor",
        icon: "fas fa-tree",
        description:
          "Proses belajar yang dilakukan di luar ruangan untuk pengalaman langsung.",
        implementation: "Kegiatan belajar di lingkungan sekolah dan komunitas",
        benefits: [
          "Belajar melalui pengalaman langsung",
          "Meningkatkan kesehatan fisik",
          "Mengembangkan rasa cinta lingkungan",
          "Pembelajaran lebih menyenangkan",
        ],
        examples: [
          "Belajar IPA di taman sekolah",
          "Observasi tanaman dan hewan",
          "Kegiatan berkebun dan bercocok tanam",
        ],
      },
    ],

    // Mata Pelajaran
    subjects: [
      {
        id: 1,
        name: "Pendidikan Agama Islam",
        icon: "fas fa-mosque",
        grade: "Kelas 1-6",
        description:
          "Membentuk siswa yang beriman, bertakwa, dan berakhlak mulia sesuai ajaran agama Islam.",
        learningObjectives: [
          "Mengenal dan memahami rukun iman dan islam",
          "Membaca dan menulis huruf hijaiyah",
          "Menghafal surat-surat pendek dan doa harian",
          "Mengamalkan akhlak terpuji dalam kehidupan",
        ],
        activities: [
          "Hafalan surat pendek",
          "Praktek wudhu dan shalat",
          "Kisah keteladanan nabi",
          "Pembelajaran akhlak melalui permainan",
        ],
        assessment:
          "Penilaian sikap, pengetahuan, dan keterampilan praktik ibadah",
      },
      {
        id: 2,
        name: "Pendidikan Pancasila dan Kewarganegaraan",
        icon: "fas fa-flag",
        grade: "Kelas 1-6",
        description:
          "Membentuk warga negara yang baik, memahami hak dan kewajiban, serta mencintai tanah air.",
        learningObjectives: [
          "Memahami nilai-nilai Pancasila",
          "Mengenal simbol dan lambang negara",
          "Memahami hak dan kewajiban sebagai warga",
          "Mengembangkan rasa cinta tanah air",
        ],
        activities: [
          "Diskusi nilai Pancasila",
          "Praktek musyawarah",
          "Kegiatan upacara bendera",
          "Projek kebersihan lingkungan",
        ],
        assessment: "Observasi sikap, tes tertulis, dan penilaian proyek",
      },
      {
        id: 3,
        name: "Bahasa Indonesia",
        icon: "fas fa-book-open",
        grade: "Kelas 1-6",
        description:
          "Mengembangkan kemampuan berbahasa Indonesia yang baik dan benar dalam berkomunikasi.",
        learningObjectives: [
          "Keterampilan menyimak dan berbicara",
          "Kemampuan membaca pemahaman",
          "Keterampilan menulis kreatif",
          "Penguasaan kosakata dan tata bahasa",
        ],
        activities: [
          "Membaca cerita dan dongeng",
          "Berbicara di depan kelas",
          "Menulis pengalaman pribadi",
          "Drama dan role play",
        ],
        assessment: "Portofolio tulisan, presentasi, dan tes membaca",
      },
      {
        id: 4,
        name: "Matematika",
        icon: "fas fa-calculator",
        grade: "Kelas 1-6",
        description:
          "Mengembangkan kemampuan berpikir logis, sistematis, dan pemecahan masalah melalui matematika.",
        learningObjectives: [
          "Konsep bilangan dan operasi hitung",
          "Pengukuran dan satuan",
          "Geometri dan pengenalan bangun",
          "Pengolahan data dan statistika sederhana",
        ],
        activities: [
          "Permainan matematika",
          "Pemecahan masalah sehari-hari",
          "Praktek pengukuran",
          "Eksplorasi pola dan bentuk",
        ],
        assessment: "Tes kemampuan, tugas proyek, dan observasi proses",
      },
      {
        id: 5,
        name: "Ilmu Pengetahuan Alam",
        icon: "fas fa-flask",
        grade: "Kelas 1-6",
        description:
          "Mengembangkan rasa ingin tahu dan kemampuan ilmiah melalui eksplorasi alam sekitar.",
        learningObjectives: [
          "Pengenalan makhluk hidup dan lingkungan",
          "Sifat-sifat benda dan materi",
          "Energi dan perubahannya",
          "Bumi dan antariksa",
        ],
        activities: [
          "Eksperimen sederhana",
          "Observasi lingkungan",
          "Proyek sains",
          "Kunjungan edukasi",
        ],
        assessment: "Laporan observasi, presentasi, dan tes konsep",
      },
      {
        id: 6,
        name: "Ilmu Pengetahuan Sosial",
        icon: "fas fa-globe-asia",
        grade: "Kelas 4-6",
        description:
          "Memahami hubungan sosial, budaya, ekonomi, dan geografi dalam masyarakat.",
        learningObjectives: [
          "Memahami lingkungan sosial",
          "Mengenal keragaman budaya",
          "Konsep ekonomi sederhana",
          "Pengetahuan geografis dasar",
        ],
        activities: [
          "Studi kasus masyarakat",
          "Peta dan denah",
          "Wawancara dengan tokoh",
          "Proyek budaya lokal",
        ],
        assessment: "Penilaian proyek, presentasi, dan tes pemahaman",
      },
      {
        id: 7,
        name: "Seni Budaya dan Prakarya",
        icon: "fas fa-palette",
        grade: "Kelas 1-6",
        description:
          "Mengembangkan kreativitas, apresiasi seni, dan keterampilan melalui berbagai bentuk karya.",
        learningObjectives: [
          "Ekspresi seni rupa",
          "Apresiasi seni musik",
          "Keterampilan seni tari",
          "Kreasi kerajinan tangan",
        ],
        activities: [
          "Menggambar dan mewarnai",
          "Bernyanyi dan bermain musik",
          "Menari dan bergerak",
          "Membuat kerajinan",
        ],
        assessment: "Portofolio karya, penampilan, dan partisipasi",
      },
      {
        id: 8,
        name: "Pendidikan Jasmani, Olahraga, dan Kesehatan",
        icon: "fas fa-running",
        grade: "Kelas 1-6",
        description:
          "Mengembangkan kebugaran jasmani, keterampilan motorik, dan pola hidup sehat.",
        learningObjectives: [
          "Keterampilan gerak dasar",
          "Olahraga tradisional dan modern",
          "Pemahaman kesehatan pribadi",
          "Kebugaran jasmani",
        ],
        activities: [
          "Permainan bola",
          "Senam dan atletik",
          "Olahraga tradisional",
          "Pendidikan kesehatan",
        ],
        assessment:
          "Keterampilan praktik, kebugaran, dan pengetahuan kesehatan",
      },
      {
        id: 9,
        name: "Bahasa Jawa",
        icon: "fas fa-language",
        grade: "Kelas 1-6",
        description:
          "Melestarikan dan mengembangkan bahasa Jawa sebagai bahasa daerah dan budaya lokal.",
        learningObjectives: [
          "Kosakata bahasa Jawa sehari-hari",
          "Tingkatan bahasa (ngoko dan krama)",
          "Budaya dan tradisi Jawa",
          "Seni dan sastra Jawa",
        ],
        activities: [
          "Percakapan bahasa Jawa",
          "Lagu dan tembang Jawa",
          "Cerita wayang dan dongeng",
          "Praktek unggah-ungguh",
        ],
        assessment: "Percakapan, tes tertulis, dan praktek budaya",
      },
    ],

    // Jadwal Pembelajaran Contoh
    schedule: {
      "Kelas 1": [
        {
          day: "Senin",
          subjects: ["Bahasa Indonesia", "Matematika", "PJOK", "Seni Budaya"],
        },
        {
          day: "Selasa",
          subjects: [
            "Pendidikan Agama",
            "Bahasa Indonesia",
            "Matematika",
            "Bahasa Jawa",
          ],
        },
        { day: "Rabu", subjects: ["IPA", "PPKn", "Bahasa Indonesia", "PJOK"] },
        {
          day: "Kamis",
          subjects: [
            "Matematika",
            "Bahasa Indonesia",
            "Seni Budaya",
            "Bahasa Jawa",
          ],
        },
        {
          day: "Jumat",
          subjects: [
            "Pendidikan Agama",
            "IPA",
            "Bahasa Indonesia",
            "Ekstrakurikuler",
          ],
        },
      ],
      "Kelas 4": [
        {
          day: "Senin",
          subjects: ["Bahasa Indonesia", "Matematika", "IPS", "PJOK"],
        },
        {
          day: "Selasa",
          subjects: ["Pendidikan Agama", "IPA", "Matematika", "Bahasa Jawa"],
        },
        {
          day: "Rabu",
          subjects: ["Bahasa Indonesia", "PPKn", "IPS", "Seni Budaya"],
        },
        {
          day: "Kamis",
          subjects: ["Matematika", "IPA", "Bahasa Indonesia", "PJOK"],
        },
        {
          day: "Jumat",
          subjects: [
            "Pendidikan Agama",
            "IPS",
            "Bahasa Jawa",
            "Ekstrakurikuler",
          ],
        },
      ],
    },

    // Fasilitas Pendukung Pembelajaran
    facilities: [
      {
        name: "Perpustakaan",
        description:
          "Koleksi buku pelajaran, buku cerita, dan referensi untuk mendukung pembelajaran",
        icon: "fas fa-book",
      },
      {
        name: "Ruang Multimedia",
        description: "Fasilitas audio visual untuk pembelajaran interaktif",
        icon: "fas fa-video",
      },
      {
        name: "Alat Peraga",
        description:
          "Berbagai alat peraga matematika, IPA, dan materi pembelajaran lainnya",
        icon: "fas fa-tools",
      },
      {
        name: "Lingkungan Sekolah",
        description:
          "Taman, lapangan, dan area outdoor untuk pembelajaran kontekstual",
        icon: "fas fa-tree",
      },
    ],
  };

  // Komponen Tab Navigation
  const TabNavigation = () => {
    const tabs = [
      { id: "kurikulum", label: "Kurikulum", icon: "fas fa-graduation-cap" },
      {
        id: "metode",
        label: "Metode Belajar",
        icon: "fas fa-chalkboard-teacher",
      },
      { id: "mata-pelajaran", label: "Mata Pelajaran", icon: "fas fa-book" },
      { id: "jadwal", label: "Jadwal", icon: "fas fa-calendar-alt" },
      { id: "fasilitas", label: "Fasilitas", icon: "fas fa-school" },
    ];

    return React.createElement(
      "div",
      { className: "tab-navigation" },
      React.createElement(
        "div",
        { className: "tab-container" },
        tabs.map((tab) =>
          React.createElement(
            "button",
            {
              key: tab.id,
              className: `tab-button ${activeTab === tab.id ? "active" : ""}`,
              onClick: () => setActiveTab(tab.id),
            },
            React.createElement("i", { className: tab.icon }),
            tab.label
          )
        )
      )
    );
  };

  // Komponen Subject Card
  const SubjectCard = ({ subject }) => {
    return React.createElement(
      "div",
      {
        className: "subject-card",
        onClick: () => setSelectedSubject(subject),
      },
      React.createElement(
        "div",
        { className: "subject-header" },
        React.createElement(
          "div",
          { className: "subject-icon" },
          React.createElement("i", { className: subject.icon })
        ),
        React.createElement(
          "div",
          { className: "subject-info" },
          React.createElement("h3", null, subject.name),
          React.createElement("p", null, subject.grade)
        )
      ),
      React.createElement("p", { className: "subject-description" }, subject.description),
      React.createElement(
        "button",
        { className: "detail-button" },
        "Detail Pelajaran"
      )
    );
  };

  // Komponen Method Card
  const MethodCard = ({ method }) => {
    return React.createElement(
      "div",
      {
        className: "method-card",
        onClick: () => setSelectedMethod(method),
      },
      React.createElement(
        "div",
        { className: "method-header" },
        React.createElement(
          "div",
          { className: "method-icon" },
          React.createElement("i", { className: method.icon })
        ),
        React.createElement("h3", null, method.name)
      ),
      React.createElement("p", { className: "method-description" }, method.description),
      React.createElement(
        "div",
        { className: "method-benefits" },
        method.benefits.slice(0, 3).map((benefit, index) =>
          React.createElement(
            "span",
            { key: index, className: "benefit-tag" },
            benefit
          )
        )
      ),
      React.createElement(
        "button",
        { className: "detail-button" },
        "Detail Metode"
      )
    );
  };

  // Modal Detail Mata Pelajaran
  const SubjectDetailModal = ({ subject, onClose }) => {
    if (!subject) return null;

    return React.createElement(
      "div",
      { className: "modal-overlay", onClick: onClose },
      React.createElement(
        "div",
        { className: "modal-content", onClick: (e) => e.stopPropagation() },
        // Modal Header
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement(
            "div",
            { className: "modal-title" },
            React.createElement(
              "div",
              { className: "modal-icon" },
              React.createElement("i", { className: subject.icon })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("h2", null, subject.name),
              React.createElement("p", null, subject.grade)
            )
          ),
          React.createElement(
            "button",
            { className: "modal-close", onClick: onClose },
            "✕"
          )
        ),

        // Modal Content
        React.createElement(
          "div",
          { className: "modal-body" },
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement(
              "h3",
              null,
              React.createElement("i", { className: "fas fa-info-circle" }),
              "Deskripsi Mata Pelajaran"
            ),
            React.createElement("p", null, subject.description)
          ),

          // Tujuan Pembelajaran
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement(
              "h3",
              null,
              React.createElement("i", { className: "fas fa-bullseye" }),
              "Tujuan Pembelajaran"
            ),
            React.createElement(
              "ul",
              null,
              subject.learningObjectives.map((objective, index) =>
                React.createElement("li", { key: index }, objective)
              )
            )
          ),

          // Aktivitas Pembelajaran
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement(
              "h3",
              null,
              React.createElement("i", { className: "fas fa-tasks" }),
              "Aktivitas Pembelajaran"
            ),
            React.createElement(
              "div",
              { className: "activities-grid" },
              subject.activities.map((activity, index) =>
                React.createElement(
                  "div",
                  { key: index, className: "activity-item" },
                  activity
                )
              )
            )
          ),

          // Sistem Penilaian
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement(
              "h3",
              null,
              React.createElement("i", { className: "fas fa-chart-bar" }),
              "Sistem Penilaian"
            ),
            React.createElement(
              "p",
              { className: "assessment-info" },
              subject.assessment
            )
          )
        )
      )
    );
  };

  // Modal Detail Metode
  const MethodDetailModal = ({ method, onClose }) => {
    if (!method) return null;

    return React.createElement(
      "div",
      { className: "modal-overlay", onClick: onClose },
      React.createElement(
        "div",
        { className: "modal-content", onClick: (e) => e.stopPropagation() },
        // Modal Header
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement(
            "div",
            { className: "modal-title" },
            React.createElement(
              "div",
              { className: "modal-icon" },
              React.createElement("i", { className: method.icon })
            ),
            React.createElement("h2", null, method.name)
          ),
          React.createElement(
            "button",
            { className: "modal-close", onClick: onClose },
            "✕"
          )
        ),

        // Modal Content
        React.createElement(
          "div",
          { className: "modal-body" },
          // Deskripsi
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement("h3", null, "Deskripsi Metode"),
            React.createElement("p", null, method.description)
          ),

          // Implementasi
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement("h3", null, "Implementasi di Sekolah"),
            React.createElement("p", null, method.implementation)
          ),

          // Manfaat
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement("h3", null, "Manfaat untuk Siswa"),
            React.createElement(
              "ul",
              null,
              method.benefits.map((benefit, index) =>
                React.createElement("li", { key: index }, benefit)
              )
            )
          ),

          // Contoh Penerapan
          React.createElement(
            "div",
            { className: "modal-section" },
            React.createElement("h3", null, "Contoh Penerapan"),
            React.createElement(
              "div",
              { className: "examples-grid" },
              method.examples.map((example, index) =>
                React.createElement(
                  "div",
                  { key: index, className: "example-item" },
                  example
                )
              )
            )
          )
        )
      )
    );
  };

  // Render konten berdasarkan tab aktif
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "kurikulum":
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "curriculum-card" },
            React.createElement(
              "h2",
              null,
              React.createElement("i", { className: "fas fa-graduation-cap" }),
              learningData.curriculum.name
            ),
            React.createElement("p", null, learningData.curriculum.description),
            React.createElement(
              "div",
              { className: "curriculum-grid" },
              React.createElement(
                "div",
                null,
                React.createElement("h3", null, "Fitur Utama"),
                React.createElement(
                  "ul",
                  null,
                  learningData.curriculum.features.map((feature, index) =>
                    React.createElement("li", { key: index }, feature)
                  )
                )
              ),
              React.createElement(
                "div",
                null,
                React.createElement("h3", null, "Manfaat untuk Siswa"),
                React.createElement(
                  "ul",
                  null,
                  learningData.curriculum.benefits.map((benefit, index) =>
                    React.createElement("li", { key: index }, benefit)
                  )
                )
              )
            )
          )
        );

      case "metode":
        return React.createElement(
          "div",
          null,
          React.createElement("h2", null, "Metode Pembelajaran yang Diterapkan"),
          React.createElement(
            "div",
            { className: "methods-grid" },
            learningData.methods.map((method) =>
              React.createElement(MethodCard, {
                key: method.id,
                method: method,
              })
            )
          )
        );

      case "mata-pelajaran":
        return React.createElement(
          "div",
          null,
          React.createElement("h2", null, "Mata Pelajaran"),
          React.createElement(
            "div",
            { className: "subjects-grid" },
            learningData.subjects.map((subject) =>
              React.createElement(SubjectCard, {
                key: subject.id,
                subject: subject,
              })
            )
          )
        );

      case "jadwal":
        return React.createElement(
          "div",
          null,
          React.createElement("h2", null, "Contoh Jadwal Pembelajaran"),
          React.createElement(
            "div",
            { className: "schedule-grid" },
            Object.entries(learningData.schedule).map(([grade, days]) =>
              React.createElement(
                "div",
                { key: grade, className: "schedule-card" },
                React.createElement("h3", null, grade),
                React.createElement(
                  "div",
                  { className: "days-container" },
                  days.map((daySchedule, index) =>
                    React.createElement(
                      "div",
                      { key: index, className: "day-schedule" },
                      React.createElement("h4", null, daySchedule.day),
                      React.createElement(
                        "div",
                        { className: "subjects-grid-small" },
                        daySchedule.subjects.map((subject, subIndex) =>
                          React.createElement(
                            "span",
                            { key: subIndex, className: "subject-tag" },
                            subject
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );

      case "fasilitas":
        return React.createElement(
          "div",
          null,
          React.createElement("h2", null, "Fasilitas Pendukung Pembelajaran"),
          React.createElement(
            "div",
            { className: "facilities-grid" },
            learningData.facilities.map((facility, index) =>
              React.createElement(
                "div",
                { key: index, className: "facility-card" },
                React.createElement(
                  "div",
                  { className: "facility-icon" },
                  React.createElement("i", { className: facility.icon })
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement("h3", null, facility.name),
                  React.createElement("p", null, facility.description)
                )
              )
            )
          )
        );

      default:
        return null;
    }
  };

  return React.createElement(
    "div",
    { className: "pembelajaran-content" },
    // Header Section
    React.createElement(
      "div",
      { className: "header-section" },
      React.createElement("h1", null, "Sistem Pembelajaran"),
    ),

    // Tab Navigation
    React.createElement(TabNavigation),

    // Tab Content
    React.createElement("div", { className: "tab-content" }, renderActiveTabContent()),

    // Modal Detail Mata Pelajaran
    selectedSubject &&
      React.createElement(SubjectDetailModal, {
        subject: selectedSubject,
        onClose: () => setSelectedSubject(null),
      }),

    // Modal Detail Metode
    selectedMethod &&
      React.createElement(MethodDetailModal, {
        method: selectedMethod,
        onClose: () => setSelectedMethod(null),
      })
  );
};

// Register ke window object agar bisa diakses oleh dashboard
window.PembelajaranContent = PembelajaranContent;
console.log("PembelajaranContent loaded and registered to window");