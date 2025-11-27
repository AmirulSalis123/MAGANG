const MPLSContent = () => {
    const mplsSchedule = [
        { 
            day: 'Hari 1',
            date: '15 Juli 2025',
            activities: [
                'Pembukaan dan sambutan kepala sekolah',
                'Pengenalan guru dan staf',
                'Tur keliling sekolah',
                'Permainan ice breaking'
            ],
            time: '07:30 - 12:00 WIB',
            icon: '🎉'
        },
        { 
            day: 'Hari 2',
            date: '16 Juli 2025',
            activities: [
                'Pengenalan tata tertib sekolah',
                'Simulasi pembelajaran kelas',
                'Pengenalan perpustakaan',
                'Pengenalan ekstrakurikuler',
                'Praktik budaya sekolah'
            ],
            time: '07:30 - 12:00 WIB',
            icon: '📚'
        },
    ];

    const requirements = [
        'Seragam SD (putih-merah)',
        'Tas sekolah',
        'Alat tulis lengkap',
        'Bekal makanan dan minuman',
        'Topi sekolah',
        'Sepatu dan kaos kaki'
    ];

    const importantNotes = [
        'Siswa diantar orang tua maksimal pukul 07:15 WIB',
        'Membawa surat keterangan sehat dari dokter',
        'Mengisi formulir pendaftaran yang telah disediakan',
        'Mengenakan seragam dengan rapi dan sopan',
        'Tidak membawa uang saku berlebihan',
        'Dilarang membawa perhiasan dan barang berharga'
    ];

    return React.createElement('div', { className: 'mpls-content' },
        React.createElement('div', { className: 'content-header' },
            React.createElement('h1', null, 'MPLS 2025'),
            React.createElement('p', null, 'Masa Pengenalan Lingkungan Sekolah untuk Siswa Baru')
        ),
        
        React.createElement('div', { className: 'mpls-hero' },
            React.createElement('div', { className: 'hero-info' },
                React.createElement('h2', null, 'Selamat Datang Siswa Baru!'),
                React.createElement('p', null, 
                    'MPLS bertujuan untuk mengenalkan lingkungan sekolah, budaya, dan nilai-nilai ' +
                    'yang berlaku di SDN Sampangan 01 kepada siswa baru kelas 1.'
                ),
                React.createElement('div', { className: 'quick-info' },
                    React.createElement('div', { className: 'info-item' },
                        React.createElement('strong', null, 'Tanggal: '),
                        '15 - 16 Juli 2025'
                    ),
                    React.createElement('div', { className: 'info-item' },
                        React.createElement('strong', null, 'Waktu: '),
                        '07:30 - 12:00 WIB'
                    ),
                )
            )
        ),

        React.createElement('div', { className: 'mpls-section' },
            React.createElement('h2', null, 'Jadwal Kegiatan MPLS'),
            React.createElement('div', { className: 'schedule-grid' },
                mplsSchedule.map((day, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'schedule-card'
                    },
                        React.createElement('div', { className: 'schedule-header' },
                            React.createElement('div', { className: 'day-icon' }, day.icon),
                            React.createElement('div', { className: 'day-info' },
                                React.createElement('h3', null, day.day),
                                React.createElement('p', { className: 'date' }, day.date)
                            )
                        ),
                        React.createElement('div', { className: 'time-badge' }, day.time),
                        React.createElement('ul', { className: 'activities-list' },
                            day.activities.map((activity, actIndex) =>
                                React.createElement('li', { key: actIndex }, activity)
                            )
                        )
                    )
                )
            )
        ),

        React.createElement('div', { className: 'info-grid' },
            React.createElement('div', { className: 'info-card' },
                React.createElement('h3', null, '📋 Perlengkapan yang Harus Dibawa'),
                React.createElement('ul', { className: 'requirements-list' },
                    requirements.map((item, index) =>
                        React.createElement('li', { key: index }, item)
                    )
                )
            ),
            React.createElement('div', { className: 'info-card' },
                React.createElement('h3', null, '⚠️ Catatan Penting'),
                React.createElement('ul', { className: 'notes-list' },
                    importantNotes.map((note, index) =>
                        React.createElement('li', { key: index }, note)
                    )
                )
            )
        ),

        React.createElement('div', { className: 'welcome-message' },
            React.createElement('h3', null, '🌟 Selamat Bergabung!'),
            React.createElement('p', null, 
                'Kami mengucapkan selamat datang kepada seluruh siswa baru dan orang tua. ' +
                'Mari bersama-sama menciptakan lingkungan belajar yang menyenangkan dan penuh prestasi.'
            )
        )
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.MPLSContent = MPLSContent;
console.log('MPLSContent loaded and registered to window');