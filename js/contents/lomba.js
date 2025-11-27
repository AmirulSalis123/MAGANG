const LombaContent = () => {
    const upcomingCompetitions = [
        { 
            name: 'Lomba Superkids Fashion Show',
            participants: 'Siswa siswi SDN Sampangan 01', 
            description: 'Superkids Fashion Show diselenggarakan sekolah untuk pengembangan bakat anak dan memeriahkan HUT RI, dihadiri Lurah Sampangan dan diliput Kompas TV.',
            image: 'imgs/lomba1.png',
            youtubeLink: 'https://youtu.be/5cYscVTZEBc?si=p-FM1Db6h8kn2zCb'
        },
        { 
            name: 'Lomba Mutiara Kata',
            participants: 'Muhammad Abiyu Burhanuddin',
            description: 'Perlombaan keterampilan menyampaikan rangkaian kata-kata indah yang penuh makna.',
            image: 'imgs/lomba2.png',
            youtubeLink: 'https://youtu.be/7DXDCLFYVjU'
        },
        { 
            name: 'Lomba Macapat', 
            participants: 'Asyifa Hanum Larasati',
            description: 'Perlombaan menyanyikan tembang tradisional Jawa dengan aturan metrum (guru gatra, guru wilangan, guru lagu) tertentu.',
            image: 'imgs/lomba3.png',
            youtubeLink: 'https://youtu.be/WHGgeuRemxQ?si=hxKRUahiaDPqAFVz'
        },
        { 
            name: 'Lomba Tilawah Putra',
            participants: 'Ahmad Hisyam Tsalis Fahmi',
            description: 'Perlombaan membaca Al-Qur`an dengan lantunan suara yang indah dan tartil',
            image: 'imgs/lomba4.png',
            youtubeLink: 'https://youtu.be/EzYAQqUX550?si=KwgZuxeEg8y3Aak_'
        },
    ];

    return React.createElement('div', { className: 'lomba-content' },
        React.createElement('div', { className: 'content-header' },
            React.createElement('h1', null, 'LOMBA DAN KOMPETISI'),
            React.createElement('p', null, 'Informasi lomba dan prestasi siswa SDN Sampangan 01')
        ),

        React.createElement('div', { className: 'lomba-section' },
            React.createElement('h2', null, 
                React.createElement('span', { className: 'section-icon' },),
                'Lomba Yang Telah Diikuti'
            ),
            React.createElement('div', { className: 'lomba-grid' },
                upcomingCompetitions.map((lomba, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'lomba-card upcoming'
                    },
                        React.createElement('div', { className: 'lomba-image-container' },
                            React.createElement('img', { 
                                src: lomba.image, 
                                alt: lomba.name,
                                className: 'lomba-image'
                            }),
                        ),
                        React.createElement('div', { className: 'lomba-card-content' },
                            React.createElement('div', { className: 'lomba-header' },
                                React.createElement('div', { className: 'lomba-icon' }, lomba.icon),
                                React.createElement('div', { className: 'lomba-title' },
                                    React.createElement('h3', null, lomba.name),
                                ),

                            ),
                            React.createElement('div', { className: 'lomba-description' },
                                React.createElement('p', null, lomba.description)
                            ),
                            React.createElement('div', { className: 'lomba-info' },
                                React.createElement('div', { className: 'info-item' },
                                    React.createElement('span', { className: 'label' }, 'Peserta:'),
                                    React.createElement('span', { className: 'value' }, lomba.participants)
                                ),
                            ),
                            React.createElement('div', { className: 'lomba-actions' },
                                React.createElement('a', {
                                    href: lomba.youtubeLink,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className: 'youtube-link'
                                }, 
                                    'Tonton Video Lomba'
                                )
                            )
                        )
                    )
                )
            )
        ),
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.LombaContent = LombaContent;
console.log('LombaContent loaded and registered to window');