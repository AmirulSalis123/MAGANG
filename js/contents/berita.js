const BeritaContent = () => {
    // Data berita hari besar nasional, keagamaan, dan kegiatan sekolah
    const beritaData = [
        // Hari Besar Nasional
        {
            id: 1,
            judul: "Peringatan Hari Pendidikan Nasional 2025",
            tanggal: "2 Mei 2025",
            kategori: "Hari Besar Nasional",
            excerpt: "SDN Sampangan 01 menyelenggarakan upacara peringatan Hardiknas dengan tema 'Bergerak Bersama Wujudkan Merdeka Belajar'...",
            isi: "Upacara dihadiri oleh seluruh siswa, guru, dan staf. Acara dimeriahkan dengan pentas seni, pameran karya siswa, dan lomba kreativitas edukatif.",
            penulis: "Pak Sugiyanto",
        },
        {
            id: 2,
            judul: "Merayakan Hari Guru Nasional dengan Apresiasi",
            tanggal: "25 November 2025",
            kategori: "Hari Besar Nasional",
            excerpt: "Siswa-siswi SDN Sampangan 01 memberikan penghormatan dan apresiasi kepada para guru dalam peringatan Hari Guru...",
            isi: "Berbagai kegiatan dilaksanakan termasuk pentas seni, pemberian bunga, dan pidato apresiasi dari perwakilan siswa untuk para guru tercinta.",
            penulis: "Ibu Siti Aminah",
        },
        {
            id: 3,
            judul: "Semarak Peringatan Hari Kartini 2025",
            tanggal: "21 April 2025",
            kategori: "Hari Besar Nasional",
            excerpt: "Sekolah mengadakan berbagai lomba dan kegiatan untuk memperingati semangat emansipasi wanita RA Kartini...",
            isi: "Kegiatan termasuk fashion show kebaya, lomba membaca puisi, dan pentas drama tentang perjuangan RA Kartini yang diikuti dengan antusias oleh siswa.",
            penulis: "Ibu Dewi Sartika",
        },
        {
            id: 4,
            judul: "Semangat Sumpah Pemuda di SDN Sampangan 01",
            tanggal: "28 Oktober 2025",
            kategori: "Hari Besar Nasional",
            excerpt: "Upacara bendera dan berbagai lomba kebangsaan digelar untuk memperingati Hari Sumpah Pemuda...",
            isi: "Siswa mengikuti lomba pidato, paduan suara lagu nasional, dan pembacaan ikrar Sumpah Pemuda dengan penuh semangat kebangsaan.",
            penulis: "Pak Heru Setiawan",
        },

        // Hari Besar Islam
        {
            id: 5,
            judul: "Peringatan Maulid Nabi Muhammad SAW",
            tanggal: "15 September 2025",
            kategori: "Hari Besar Islam",
            excerpt: "Ceramah agama dan perlombaan anak-anak dalam rangka memperingati Maulid Nabi...",
            isi: "Kegiatan diisi dengan ceramah tentang keteladanan Nabi Muhammad, lomba adzan, dan pembacaan sholawat oleh siswa.",
            penulis: "Ibu Dewi Sartika",
        },
        {
            id: 6,
            judul: "Menyambut Tahun Baru Hijriah 1446",
            tanggal: "6 Juli 2025",
            kategori: "Hari Besar Islam",
            excerpt: "Doa bersama dan santunan anak yatim dalam menyambut Tahun Baru Islam...",
            isi: "Kegiatan refleksi diri, doa bersama untuk kemajuan sekolah, dan santunan kepada anak yatim dari sekitar lingkungan sekolah.",
            penulis: "Pak Bambang Sutrisno",
        },

        // Hari Besar Kristen
        {
            id: 7,
            judul: "Kegiatan Natal dan Pembagian Bingkisan",
            tanggal: "20 Desember 2025",
            kategori: "Hari Besar Kristen",
            excerpt: "Perayaan natal bersama dan pembagian bingkisan untuk siswa dalam suasana kebersamaan...",
            isi: "Acara natal diisi dengan paduan suara, drama kelahiran Yesus, dan pembagian bingkisan kepada seluruh siswa.",
            penulis: "Pak Sugiyanto",
        },

        // Prestasi & Penemeriaan
        {
            id: 8,
            judul: "Siswa SDN Sampangan 01 Juara Olimpiade Sains Tingkat Kota",
            tanggal: "18 Maret 2025",
            kategori: "Prestasi Siswa",
            excerpt: "Ananda Rizki Pratama dari kelas 6A berhasil meraih medali emas dalam Olimpiade Sains Tingkat Kota...",
            isi: "Prestasi membanggakan ini merupakan hasil dari kerja keras dan bimbingan guru. Rizki akan mewakili kota di tingkat provinsi.",
            penulis: "Ibu Siti Aminah",
        },
        {
            id: 9,
            judul: "Tim Futsal SDN Sampangan 01 Juara Turnamen Antar SD",
            tanggal: "12 Februari 2025",
            kategori: "Prestasi Siswa",
            excerpt: "Tim futsal sekolah berhasil menjadi juara 1 dalam turnamen futsal antar SD se-Kecamatan...",
            isi: "Dengan semangat pantang menyerah, tim futsal berhasil mengalahkan 15 tim lainnya dalam turnamen yang berlangsung selama 2 hari.",
            penulis: "Pak Heru Setiawan",
        },

        // Kelulusan
        {
            id: 10,
            judul: "Wisuda Angkatan ke-25 SDN Sampangan 01",
            tanggal: "15 Juni 2025",
            kategori: "Kelulusan",
            excerpt: "Upacara wisuda untuk 120 siswa kelas 6 yang telah menyelesaikan pendidikan di SDN Sampangan 01...",
            isi: "Acara wisuda dihadiri oleh orang tua siswa dan diisi dengan penyerahan ijazah, pentas perpisahan, dan foto bersama.",
            penulis: "Pak Sugiyanto",
        },
        {
            id: 11,
            judul: "Kelulusan 100% dengan Nilai Memuaskan",
            tanggal: "10 Juni 2025",
            kategori: "Kelulusan",
            excerpt: "Seluruh siswa kelas 6 berhasil lulus dengan nilai yang memuaskan dan 15 siswa meraih nilai sempurna...",
            isi: "Pencapaian ini menunjukkan kualitas pendidikan yang konsisten di SDN Sampangan 01 dengan persentase kelulusan 100% selama 5 tahun berturut-turut.",
            penulis: "Pak Bambang Sutrisno",
        },

        // Event Sekolah
        {
            id: 12,
            judul: "Bazar Sekolah 'Festival Kreativitas Siswa'",
            tanggal: "22 Maret 2025",
            kategori: "Event Sekolah",
            excerpt: "Bazar tahunan sekolah menampilkan berbagai karya kreatif dan kuliner hasil kreasi siswa...",
            isi: "Bazar diisi dengan stan-stan makanan, kerajinan tangan, dan pentas seni yang semuanya dikelola oleh siswa dengan bimbingan guru.",
            penulis: "Ibu Dewi Sartika",
        },
        {
            id: 13,
            judul: "Workshop Parenting 'Mendidik Anak di Era Digital'",
            tanggal: "5 Mei 2025",
            kategori: "Event Sekolah",
            excerpt: "Workshop untuk orang tua tentang tantangan mendidik anak di era teknologi digital...",
            isi: "Dihadiri oleh 150 orang tua siswa, workshop menghadirkan psikolog anak sebagai pembicara dengan materi yang relevan dengan kondisi saat ini.",
            penulis: "Ibu Siti Aminah",
        },
        {
            id: 14,
            judul: "Seminar Kesehatan 'Pentingnya Gizi Seimbang untuk Anak'",
            tanggal: "18 Januari 2025",
            kategori: "Event Sekolah",
            excerpt: "Seminar kesehatan dengan ahli gizi tentang pentingnya asupan gizi seimbang untuk tumbuh kembang anak...",
            isi: "Seminar memberikan pemahaman kepada orang tua tentang pola makan sehat dan tips menyiapkan bekal sekolah yang bergizi.",
            penulis: "Pak Heru Setiawan",
        }
    ];

    return React.createElement('div', { className: 'berita-container' },
        // Header
        React.createElement('div', { className: 'berita-header' },
            React.createElement('div', { className: 'header-content' },
                React.createElement('h1', { className: 'header-title' }, 'BERITA SEKOLAH'),
                React.createElement('p', { className: 'header-subtitle' }, 'Informasi Terkini Kegiatan, Prestasi, dan Event di SDN Sampangan 01'),
                React.createElement('div', { className: 'header-stats' },
                )
            )
        ),

        // Grid Berita
        React.createElement('div', { className: 'berita-grid' },
            beritaData.map(berita => 
                React.createElement('div', { 
                    key: berita.id,
                    className: 'berita-card'
                },
                    React.createElement('div', { className: 'card-header' },
                        React.createElement('div', { 
                            className: `card-category ${
                                berita.kategori === 'Hari Besar Nasional' ? 'category-national' : 
                                berita.kategori === 'Hari Besar Islam' ? 'category-islam' : 
                                berita.kategori === 'Hari Besar Kristen' ? 'category-christian' :
                                berita.kategori === 'Prestasi Siswa' ? 'category-prestasi' :
                                berita.kategori === 'Kelulusan' ? 'category-kelulusan' :
                                'category-event'
                            }`
                        }, berita.kategori),
                        React.createElement('div', { className: 'card-date' }, berita.tanggal)
                    ),
                    React.createElement('div', { className: 'card-icon' }, berita.gambar),
                    React.createElement('h3', { className: 'card-title' }, berita.judul),
                    React.createElement('p', { className: 'card-excerpt' }, berita.excerpt),
                    React.createElement('div', { className: 'card-footer' },
                    ),
                )
            )
        ),
    );
};

// Register ke window object
window.BeritaContent = BeritaContent;
console.log('BeritaContent loaded and registered to window');