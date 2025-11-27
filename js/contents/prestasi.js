const PrestasiContent = () => {
    const recentAchievements = [
        { 
            title: 'Juara 2 Lomba MTQ', 
            participant: 'AYUNDA ZIFFATUNISA',
            photo: '/imgs/mtq 2.png',
            photoAlt: 'Foto mtq 2'
        },
        { 
            title: 'Juara 3 Lomba MTQ', 
            participant: 'AHMAD HISYAM TSALIS FAHMI',
            photo: '/imgs/mtq 3.png',
            photoAlt: 'Foto mtq 3'
        },
        { 
            title: 'Juara 2 Lomba Gambar Bercerita', 
            participant: 'VELDA ANNORA AZALIA',
            photo: '/imgs/gambar 2.png',
            photoAlt: 'Foto gambar 2'
        },
        { 
            title: 'Juara 1 Lomba Kriya Anyam', 
            participant: 'EBEN HAEZER',
            photo: '/imgs/anyam 1.png',
            photoAlt: 'Foto anyam 1'
        },
        { 
            title: 'Juara 2 Lomba Baca Puisi', 
            participant: 'GABRIELLIE RA MADA',
            photo: '/imgs/puisi 2.png',
            photoAlt: 'Foto puisi 2'
        },
        { 
            title: 'Juara 2 Lomba Pidato', 
            participant: 'AYUNDA ZIFFATUNISA',
            photo: '/imgs/pidato 2.png',
            photoAlt: 'Foto pidato 2'
        },
        { 
            title: 'Juara 1 Lomba Tilawah & HIFDZIL QUR`AN PUTRI', 
            participant: 'AYUNDA ZIFFATUNISA',
            photo: '/imgs/tilawah 1.png',
            photoAlt: 'Foto tilawah 1'
        },
        { 
            title: 'Juara 2 Lomba Tilawah & HIFDZIL QUR`AN PUTRA', 
            participant: 'AHMAD HISYAM TSALIS FAHMI',
            photo: '/imgs/tilawah 2.png',
            photoAlt: 'Foto tilawah 2'
        },
        { 
            title: 'Juara 2 Hifdzil Qur`an', 
            participant: 'AYUNDA ZIFFATUNISA',
            photo: '/imgs/hifdzil 2.png',
            photoAlt: 'Foto hifdzil 2'
        },
        { 
            title: 'Juara 2 Lomba Khat Putri', 
            participant: 'BIANCA SASMITHA MABBINA',
            photo: '/imgs/khat 2.png',
            photoAlt: 'Foto khat 2'
        },
        { 
            title: 'Juara 2 Lomba Adzan', 
            participant: 'M. FAKHRI IQBAL MASIR',
            photo: '/imgs/adzan 2.png',
            photoAlt: 'Foto adzan 2'
        },
        { 
            title: 'Juara 3 Lomba Cerita Islami', 
            participant: 'YUSUF AL FATIH',
            photo: '/imgs/cerita 3.png',
            photoAlt: 'Foto cerita 3'
        },
        { 
            title: 'Juara 3 Lomba Baca dan Tulis Aksara Jawa', 
            participant: 'KHALIF RASYA KUNCARA',
            photo: '/imgs/baca 3.png',
            photoAlt: 'Foto baca 3'
        },
        { 
            title: 'Juara 2 Lomba Geguritan', 
            participant: 'JACELINE VALLERY CHICKA ARDINATA',
            photo: '/imgs/geguritan 2.png',
            photoAlt: 'foto geguritan 2'
        },
    ];

    // Fallback photo jika foto tidak ditemukan
    const defaultPhoto = '/images/students/default-student.jpg';

    return React.createElement('div', { className: 'prestasi-content' },
        React.createElement('div', { className: 'content-header' },
            React.createElement('h1', null, 'PRESTASI SISWA'),
            React.createElement('p', null, 'Kumpulan prestasi dan pencapaian siswa SDN Sampangan 01')
        ),

        React.createElement('div', { className: 'recent-section' },
            React.createElement('h2', null, '🏆 Prestasi Terbaru'),
            React.createElement('div', { className: 'achievements-grid' },
                recentAchievements.map((achievement, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'achievement-card'
                    },
                        React.createElement('div', { className: 'achievement-header' },
                            React.createElement('div', { className: 'achievement-title' },
                                React.createElement('h3', null, achievement.title),
                            )
                        ),
                        React.createElement('div', { className: 'achievement-details' },
                            React.createElement('div', { className: 'participant-with-photo' },
                                React.createElement('img', { 
                                    className: 'participant-photo',
                                    src: achievement.photo,
                                    alt: achievement.photoAlt,
                                    onError: (e) => {
                                        e.target.src = defaultPhoto;
                                        e.target.alt = 'Foto tidak tersedia';
                                    }
                                }),
                                React.createElement('div', { className: 'participant-info' },
                                    React.createElement('div', { className: 'participant-name' }, achievement.participant),
                                    React.createElement('div', { className: 'participant-class' }, achievement.class)
                                )
                            )
                        ),
                    )
                )
            )
        ),

        React.createElement('div', { className: 'motivation-section' },
            React.createElement('h2', null, '💪 Terus Berprestasi!'),
            React.createElement('div', { className: 'motivation-content' },
                React.createElement('p', null, 
                    'Setiap siswa memiliki potensi untuk berprestasi. Kami mendorong semua siswa ' +
                    'untuk mengembangkan bakat dan kemampuan mereka melalui berbagai program ' +
                    'dan kegiatan yang diselenggarakan sekolah.'
                ),
                React.createElement('div', { className: 'encouragement' },
                    React.createElement('p', null, 
                        '🎯 "Prestasi bukan hanya tentang menang, tapi tentang usaha dan pembelajaran"'
                    )
                )
            )
        )
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.PrestasiContent = PrestasiContent;
console.log('PrestasiContent loaded and registered to window');