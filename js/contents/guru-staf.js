// guru-staf.js - KOMPONEN GURU DAN STAF SDN SAMPANGAN 01
const GuruStafContent = () => {
    const { useEffect, useState } = React;

    // State untuk responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeFilter, setActiveFilter] = useState('semua');
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data Guru dan Staf SDN Sampangan 01
    const staffData = {
        categories: [
            { id: 'semua', name: 'Semua', icon: 'fas fa-users', count: 0 },
            { id: 'kepala_sekolah', name: 'Kepala Sekolah', icon: 'fas fa-user-tie', count: 1 },
            { id: 'guru_kelas', name: 'Guru Kelas', icon: 'fas fa-chalkboard-teacher', count: 12 },
            { id: 'guru_mapel', name: 'Guru Mapel', icon: 'fas fa-book', count: 4 },
            { id: 'staf_tu', name: 'Staf TU', icon: 'fas fa-user-cog', count: 1 },
            { id: 'keamanan', name: 'Keamanan', icon: 'fas fa-shield-alt', count: 1 },
            { id: 'lab_komputer', name: 'Lab Komputer', icon: 'fas fa-laptop', count: 1 },
        ],

        staff: [
            // Kepala Sekolah
            {
                id: 1,
                name: 'Drs. SUGIYANTO, M.Pd',
                position: 'Kepala Sekolah',
                category: 'kepala_sekolah',
                image: 'imgs/kepsek.jpg',
                subject: 'Pendidikan',
                class: '-',
                experience: '25 Tahun',
                education: 'S2 Pendidikan',
                email: 'sugiyanto@sdn-sampangan01.sch.id',
                phone: '(024) 1234567',
                bio: 'Memimpin SDN Sampangan 01 dengan dedikasi tinggi untuk menciptakan lingkungan belajar yang berkualitas dan menyenangkan bagi seluruh siswa.',
            },
            
            // Guru Kelas 1-6
            {
                id: 2,
                name: 'Ismi Trisnawati, S.Pd',
                position: 'Guru Kelas 1A',
                category: 'guru_kelas',
                image: 'imgs/ismi.jpg',
                subject: 'Kelas 1',
                class: '1A',
                experience: '15 Tahun',
                education: 'S1 PGSD',
                email: 'ismitrisnawati@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Spesialis dalam mengajar siswa kelas awal dengan pendekatan yang menyenangkan dan mudah dipahami.',
            },
            {
                id: 3,
                name: 'Kristanti Dwi Kurniati S, S.Pd. SD',
                position: 'Guru Kelas 1B',
                category: 'guru_kelas',
                image: 'imgs/tanti.jpg',
                subject: 'Kelas 1',
                class: '1B',
                experience: '12 Tahun',
                education: 'S1 PGSD',
                email: 'kristantidwikurniati@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Berpengalaman dalam membimbing siswa kelas 1 dengan metode pembelajaran yang kreatif.',
            },
            {
                id: 4,
                name: 'Suwilo Puji, S.Pd',
                position: 'Guru Kelas 2A',
                category: 'guru_kelas',
                image: 'imgs/puji.jpg',
                subject: 'Kelas 2',
                class: '2A',
                experience: '10 Tahun',
                education: 'S1 PGSD',
                email: 'suwilopuji@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Ahli dalam pembelajaran tematik untuk siswa kelas 2 dengan pendekatan yang menyenangkan.',
            },
            {
                id: 5,
                name: 'Suwilo Puji, S.Pd',
                position: 'Guru Kelas 2B',
                category: 'guru_kelas',
                image: 'imgs/puji.jpg',
                subject: 'Kelas 2',
                class: '2B',
                experience: '8 Tahun',
                education: 'S1 PGSD',
                email: 'suwilopuji@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Fokus pada pengembangan karakter dan akademik siswa kelas 2 secara seimbang.',
            },
            {
                id: 6,
                name: 'Veronica Agnes Riyani, S.Pd',
                position: 'Guru Kelas 3A',
                category: 'guru_kelas',
                image: 'imgs/agnes.jpg',
                subject: 'Kelas 3',
                class: '3A',
                experience: '14 Tahun',
                education: 'S1 PGSD',
                email: 'veronicaagnesriyani@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Berpengalaman dalam membimbing siswa transisi dari kelas rendah ke kelas menengah.',
            },
            {
                id: 7,
                name: 'Sri Daningsih, S.Pd',
                position: 'Guru Kelas 3B',
                category: 'guru_kelas',
                image: 'imgs/sridaningsih.jpg',
                subject: 'Kelas 3',
                class: '3B',
                experience: '9 Tahun',
                education: 'S1 PGSD',
                email: 'sridaningsih@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Spesialis dalam pembelajaran matematika dan sains untuk siswa kelas 3.',
            },
            {
                id: 8,
                name: 'Yosi Aprilia K, S.Pd',
                position: 'Guru Kelas 4A',
                category: 'guru_kelas',
                image: 'imgs/yosi.jpg',
                subject: 'Kelas 4',
                class: '4A',
                experience: '11 Tahun',
                education: 'S1 PGSD',
                email: 'yosiaprilia@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Ahli dalam mengajar siswa kelas 4 dengan pendekatan pembelajaran kontekstual.',
            },
            {
                id: 9,
                name: 'Ikhtaromaulidia, S.Pd',
                position: 'Guru Kelas 4B',
                category: 'guru_kelas',
                image: 'imgs/guru.jpeg',
                subject: 'Kelas 4',
                class: '4B',
                experience: '13 Tahun',
                education: 'S1 PGSD',
                email: 'ikhtaromaulidia@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Berpengalaman dalam membimbing siswa kelas 4 dengan metode pembelajaran aktif.',
            },
            {
                id: 10,
                name: 'Fuji Setya Lestari, S.Pd',
                position: 'Guru Kelas 5A',
                category: 'guru_kelas',
                image: 'imgs/fujilestari.jpg',
                subject: 'Kelas 5',
                class: '5A',
                experience: '16 Tahun',
                education: 'S1 PGSD',
                email: 'fujisetyalestari@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Spesialis dalam persiapan siswa menghadapi tantangan akademik kelas tinggi.',
            },
            {
                id: 11,
                name: 'Sri Mulyani, S.Pd',
                position: 'Guru Kelas 5B',
                category: 'guru_kelas',
                image: 'imgs/yani.jpg',
                subject: 'Kelas 5',
                class: '5B',
                experience: '7 Tahun',
                education: 'S1 PGSD',
                email: 'srimulyani@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Fokus pada pengembangan kemampuan analitis dan kreativitas siswa kelas 5.',
            },
            {
                id: 12,
                name: 'Dhita Ajeng C, S.Pd',
                position: 'Guru Kelas 6A',
                category: 'guru_kelas',
                image: 'imgs/dhita.jpg',
                subject: 'Kelas 6',
                class: '6A',
                experience: '18 Tahun',
                education: 'S1 PGSD',
                email: 'dhitaajeng@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Ahli dalam mempersiapkan siswa kelas 6 menghadapi ujian sekolah dan kelulusan.',
            },
            {
                id: 13,
                name: 'Teguh Triyadi, S.Pd',
                position: 'Guru Kelas 6B',
                category: 'guru_kelas',
                image: 'imgs/teguh.jpg',
                subject: 'Kelas 6',
                class: '6B',
                experience: '10 Tahun',
                education: 'S1 PGSD',
                email: 'teguhtriyadi@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Berpengalaman dalam bimbingan belajar intensif untuk persiapan ujian nasional.',
            },

            //GURU MAPEL
            {
                id: 14,
                name: 'Siti Nur Azizah, S.Pd',
                position: 'Guru Pendidikan Agama Islam',
                category: 'guru_mapel',
                image: 'imgs/azizah.jpg',
                subject: 'PAI',
                class: 'Semua Kelas',
                experience: '12 Tahun',
                education: 'S1 Pendidikan Agama Islam',
                email: 'sitinurazizah@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Mengajarkan nilai-nilai agama dan akhlak mulia kepada seluruh siswa.',
            },
            {
                id: 15,
                name: 'Kushadianto, S.Pd',
                position: 'Guru Pendidikan Agama Islam',
                category: 'guru_mapel',
                image: 'imgs/kushadianto.jpeg',
                subject: 'PAI',
                class: 'Semua Kelas',
                experience: '8 Tahun',
                education: 'S1 Pendidikan Agama Islam',
                email: 'kushadianto@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Pendidik Agama Islam yang berdedikasi menanamkan iman, ilmu, dan akhlak kepada peserta didik.',
            },
            {
                id: 16,
                name: 'Yunati, S.PAK',
                position: 'Guru Pendidikan Agama Kristen',
                category: 'guru_mapel',
                image: 'imgs/yunati.jpg',
                subject: 'PAK',
                class: 'Semua Kelas',
                experience: '9 Tahun',
                education: 'S1 Pendidikan Agama Kristen',
                email: 'yunati@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Mengajar dengan hati dan menjadi teladan iman. Membangun generasi yang takut akan Tuhan dan penuh kasih.',
            },
            {
                id: 17,
                name: 'Rudi Yulianti, S.Pd',
                position: 'Guru Pendidikan Jasmani',
                category: 'guru_mapel',
                image: 'imgs/rudy.jpg',
                subject: 'Penjaskes',
                class: 'Semua Kelas',
                experience: '8 Tahun',
                education: 'S1 Pendidikan Jasmani',
                email: 'rudiyulianti@sdn-sampangan01.sch.id',
                phone: '-',
                bio: 'Mengembangkan potensi fisik dan sportivitas siswa melalui kegiatan olahraga.',
                status: 'active'
            },

            // Staf Tata Usaha
            {
                id: 18,
                name: 'Retno Ambarwati, S.M',
                position: 'Staf Tata Usaha',
                category: 'staf_tu',
                image: 'imgs/ambar.jpg',
                subject: 'Administrasi',
                class: '-',
                experience: '15 Tahun',
                education: 'D3 Administrasi',
                email: 'retnoambarwati@sdn-sampangan01.sch.id',
                phone: '(024) 1234567',
                bio: 'Menangani administrasi sekolah dan pelayanan masyarakat dengan profesional.',
            },
            // KEAMANAN
            {
                id: 19,
                name: 'Parmono',
                position: 'Keamanan',
                category: 'keamanan',
                image: 'imgs/aryo.jpg',
                subject: '-',
                class: '-',
                experience: '15 Tahun',
                education: 'Keamanan',
                email: '-',
                phone: '-',
                bio: 'Menjaga keamanan area sekolah dengan disiplin, tanggung jawab, dan pelayanan yang ramah.',
            },
        ]
    };

    // Hitung total staff untuk setiap kategori
    staffData.categories.forEach(category => {
        if (category.id === 'semua') {
            category.count = staffData.staff.length;
        } else {
            category.count = staffData.staff.filter(staff => staff.category === category.id).length;
        }
    });

    // Filter staff berdasarkan kategori
    const filteredStaff = staffData.staff.filter(staff => {
        return activeFilter === 'semua' || staff.category === activeFilter;
    });

    // Komponen Staff Card
    const StaffCard = ({ staff }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);

        return React.createElement('div', {
            className: 'staff-card',
            style: {
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            },
            onMouseEnter: (e) => {
                if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                }
            },
            onMouseLeave: (e) => {
                if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                }
            },
            onClick: () => setSelectedTeacher(staff)
        },
            // Staff Photo
            React.createElement('div', {
            style: {
                position: 'relative',
                height: '200px',
                overflow: 'hidden',
                background: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }
            },
                !imageLoaded && !imageError && React.createElement('div', {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#6c757d'
                    }
                }, React.createElement('i', { className: 'fas fa-user fa-3x' })),
                
                imageError ? 
                    React.createElement('div', {
                        style: {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#e9ecef',
                            color: '#6c757d'
                        }
                    },
                        React.createElement('div', {
                            style: {
                                textAlign: 'center'
                            }
                        },
                            React.createElement('i', { className: 'fas fa-user fa-3x', style: { marginBottom: '10px' } }),
                            React.createElement('p', { style: { margin: 0, fontSize: '0.9rem' } }, 'Foto tidak tersedia')
                        )
                    ) :
                    React.createElement('img', {
                        src: staff.image,
                        alt: staff.name,
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: imageLoaded ? 'block' : 'none'
                        },
                        onLoad: () => setImageLoaded(true),
                        onError: () => setImageError(true)
                    })
            ),

            // Staff Content
            React.createElement('div', {
                style: {
                    padding: isMobile ? '20px' : '25px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }
            },
                React.createElement('h3', {
                    style: {
                        fontSize: isMobile ? '1.1rem' : '1.2rem',
                        fontWeight: '700',
                        color: '#1e3c72',
                        margin: '0 0 8px 0',
                        lineHeight: '1.3'
                    }
                }, staff.name),

                React.createElement('p', {
                    style: {
                        fontSize: '0.9rem',
                        color: '#e74c3c',
                        fontWeight: '600',
                        margin: '0 0 10px 0'
                    }
                }, staff.position),

                // Staff Details
                React.createElement('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        marginBottom: '15px',
                        flex: 1
                    }
                },
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }
                    },
                        React.createElement('i', { 
                            className: 'fas fa-book',
                            style: { color: '#3498db', fontSize: '0.8rem' }
                        }),
                        React.createElement('span', {
                            style: {
                                fontSize: '0.85rem',
                                color: '#666'
                            }
                        }, staff.subject)
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }
                    },
                        React.createElement('i', { 
                            className: 'fas fa-door-open',
                            style: { color: '#2ecc71', fontSize: '0.8rem' }
                        }),
                        React.createElement('span', {
                            style: {
                                fontSize: '0.85rem',
                                color: '#666'
                            }
                        }, `Kelas: ${staff.class}`)
                    ),
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }
                    },
                    )
                ),

                // View Profile Button
                React.createElement('button', {
                    style: {
                        background: 'transparent',
                        color: '#1e3c72',
                        border: '2px solid #1e3c72',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: 'auto'
                    },
                    onMouseEnter: (e) => {
                        if (!isMobile) {
                            e.target.style.background = '#1e3c72';
                            e.target.style.color = 'white';
                        }
                    },
                    onMouseLeave: (e) => {
                        if (!isMobile) {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#1e3c72';
                        }
                    }
                }, 'Lihat Profil')
            )
        );
    };

    // Modal Detail Guru
    const TeacherDetailModal = ({ teacher, onClose }) => {
        if (!teacher) return null;

        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);

        return React.createElement('div', {
            style: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: isMobile ? '20px' : '40px'
            },
            onClick: onClose
        },
            React.createElement('div', {
                style: {
                    background: 'white',
                    borderRadius: '12px',
                    maxWidth: '600px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    position: 'relative'
                },
                onClick: (e) => e.stopPropagation()
            },
                // Modal Header
                React.createElement('div', {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 25px',
                        borderBottom: '1px solid #e9ecef',
                        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                        color: 'white',
                        borderRadius: '12px 12px 0 0'
                    }
                },
                    React.createElement('h2', {
                        style: {
                            margin: 0,
                            fontSize: isMobile ? '1.3rem' : '1.5rem',
                            fontWeight: '700'
                        }
                    }, 'Detail Guru & Staf'),
                    React.createElement('button', {
                        onClick: onClose,
                        style: {
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e) => {
                            e.target.style.background = 'rgba(255,255,255,0.3)';
                        },
                        onMouseLeave: (e) => {
                            e.target.style.background = 'rgba(255,255,255,0.2)';
                        }
                    }, '✕')
                ),

                // Modal Content
                React.createElement('div', {
                    style: {
                        padding: isMobile ? '20px' : '30px'
                    }
                },
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '25px',
                            marginBottom: '25px'
                        }
                    },
                        // Teacher Photo
                        React.createElement('div', {
                            style: {
                                flex: isMobile ? 'none' : '0 0 200px',
                                textAlign: 'center'
                            }
                        },
                            React.createElement('div', {
                                style: {
                                    width: isMobile ? '150px' : '200px',
                                    height: isMobile ? '150px' : '200px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 15px',
                                    background: '#f8f9fa',
                                    border: '4px solid #e9ecef'
                                }
                            },
                                imageError ? 
                                    React.createElement('div', {
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: '#e9ecef',
                                            color: '#6c757d'
                                        }
                                    }, React.createElement('i', { className: 'fas fa-user fa-3x' })) :
                                    React.createElement('img', {
                                        src: teacher.image,
                                        alt: teacher.name,
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: imageLoaded ? 'block' : 'none'
                                        },
                                        onLoad: () => setImageLoaded(true),
                                        onError: () => setImageError(true)
                                    })
                            ),
                            !imageLoaded && !imageError && React.createElement('div', {
                                style: {
                                    color: '#6c757d',
                                    fontSize: '0.9rem'
                                }
                            }, 'Memuat foto...')
                        ),

                        // Teacher Info
                        React.createElement('div', {
                            style: {
                                flex: 1
                            }
                        },
                            React.createElement('h3', {
                                style: {
                                    fontSize: isMobile ? '1.4rem' : '1.6rem',
                                    fontWeight: '700',
                                    color: '#1e3c72',
                                    margin: '0 0 10px 0'
                                }
                            }, teacher.name),
                            
                            React.createElement('p', {
                                style: {
                                    fontSize: '1.1rem',
                                    color: '#e74c3c',
                                    fontWeight: '600',
                                    margin: '0 0 15px 0'
                                }
                            }, teacher.position),

                            React.createElement('div', {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '15px',
                                    marginBottom: '20px'
                                }
                            },
                                React.createElement('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }
                                },
                                    React.createElement('i', { 
                                        className: 'fas fa-book',
                                        style: { color: '#3498db', fontSize: '1rem' }
                                    }),
                                    React.createElement('div', null,
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '0.85rem',
                                                color: '#666',
                                                fontWeight: '500'
                                            }
                                        }, 'Mata Pelajaran'),
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#333',
                                                fontWeight: '600'
                                            }
                                        }, teacher.subject)
                                    )
                                ),

                                React.createElement('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }
                                },
                                    React.createElement('i', { 
                                        className: 'fas fa-door-open',
                                        style: { color: '#2ecc71', fontSize: '1rem' }
                                    }),
                                    React.createElement('div', null,
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '0.85rem',
                                                color: '#666',
                                                fontWeight: '500'
                                            }
                                        }, 'Kelas'),
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#333',
                                                fontWeight: '600'
                                            }
                                        }, teacher.class)
                                    )
                                ),

                                React.createElement('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }
                                },
                                    React.createElement('i', { 
                                        className: 'fas fa-graduation-cap',
                                        style: { color: '#9b59b6', fontSize: '1rem' }
                                    }),
                                    React.createElement('div', null,
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '0.85rem',
                                                color: '#666',
                                                fontWeight: '500'
                                            }
                                        }, 'Pendidikan'),
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#333',
                                                fontWeight: '600'
                                            }
                                        }, teacher.education)
                                    )
                                ),

                                React.createElement('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }
                                },
                                    React.createElement('i', { 
                                        className: 'fas fa-clock',
                                        style: { color: '#e67e22', fontSize: '1rem' }
                                    }),
                                    React.createElement('div', null,
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '0.85rem',
                                                color: '#666',
                                                fontWeight: '500'
                                            }
                                        }, 'Pengalaman'),
                                        React.createElement('div', {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#333',
                                                fontWeight: '600'
                                            }
                                        }, teacher.experience)
                                    )
                                )
                            )
                        )
                    ),

                    // Bio Section
                    React.createElement('div', {
                        style: {
                            background: '#f8f9fa',
                            padding: '20px',
                            borderRadius: '8px',
                            marginBottom: '25px'
                        }
                    },
                        React.createElement('h4', {
                            style: {
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: '#1e3c72',
                                margin: '0 0 15px 0'
                            }
                        }, 'Tentang'),
                        React.createElement('p', {
                            style: {
                                fontSize: '0.95rem',
                                color: '#666',
                                lineHeight: '1.6',
                                margin: 0
                            }
                        }, teacher.bio)
                    ),

                    // Contact Information
                    React.createElement('div', {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                            gap: '15px'
                        }
                    },
                        teacher.email && React.createElement('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px',
                                background: '#e3f2fd',
                                borderRadius: '8px'
                            }
                        },
                            React.createElement('i', { 
                                className: 'fas fa-envelope',
                                style: { color: '#1e3c72', fontSize: '1.2rem' }
                            }),
                            React.createElement('div', null,
                                React.createElement('div', {
                                    style: {
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '500'
                                    }
                                }, 'Email'),
                                React.createElement('div', {
                                    style: {
                                        fontSize: '0.9rem',
                                        color: '#333',
                                        fontWeight: '600'
                                    }
                                }, teacher.email)
                            )
                        ),

                        teacher.phone && teacher.phone !== '-' && React.createElement('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px',
                                background: '#e8f5e8',
                                borderRadius: '8px'
                            }
                        },
                            React.createElement('i', { 
                                className: 'fas fa-phone',
                                style: { color: '#2ecc71', fontSize: '1.2rem' }
                            }),
                            React.createElement('div', null,
                                React.createElement('div', {
                                    style: {
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '500'
                                    }
                                }, 'Telepon'),
                                React.createElement('div', {
                                    style: {
                                        fontSize: '0.9rem',
                                        color: '#333',
                                        fontWeight: '600'
                                    }
                                }, teacher.phone)
                            )
                        )
                    )
                )
            )
        );
    };

    return React.createElement('div', { 
        className: 'guru-staf-content',
        style: { 
            padding: isMobile ? '15px' : '30px',
            maxWidth: '1200px',
            margin: '0 auto'
        }
    },
        // Header Section
        React.createElement('div', {
            style: {
                textAlign: 'center',
                marginBottom: isMobile ? '30px' : '50px',
                padding: isMobile ? '25px 20px' : '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }
        },
            // Background Pattern
            React.createElement('div', {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none'
                }
            }),
            
            React.createElement('h1', {
                style: {
                    fontSize: isMobile ? '1.8rem' : '2.5rem',
                    fontWeight: '800',
                    margin: '0 0 15px 0',
                    color: 'white',
                    position: 'relative',
                    zIndex: 2
                }
            }, 'Guru dan Staf'),
        ),

        // Statistics Section
        React.createElement('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '15px' : '20px',
                marginBottom: isMobile ? '30px' : '40px'
            }
        },
            [
                { icon: 'fas fa-users', label: 'Total Guru & Staf', value: staffData.staff.length, color: '#1e3c72' },
                { icon: 'fas fa-user-tie', label: 'Kepala Sekolah', value: staffData.categories.find(c => c.id === 'kepala_sekolah').count, color: '#3498db' },
                { icon: 'fas fa-chalkboard-teacher', label: 'Guru Kelas', value: staffData.categories.find(c => c.id === 'guru_kelas').count, color: '#2ecc71' },
                { icon: 'fas fa-user-cog', label: 'Staf TU', value: staffData.categories.find(c => c.id === 'staf_tu').count, color: '#e67e22' }
            ].map((stat, index) =>
                React.createElement('div', {
                    key: index,
                    style: {
                        background: 'white',
                        padding: isMobile ? '20px' : '25px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        borderTop: `4px solid ${stat.color}`,
                        transition: 'all 0.3s ease'
                    },
                    onMouseEnter: (e) => {
                        if (!isMobile) {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                        }
                    },
                    onMouseLeave: (e) => {
                        if (!isMobile) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        }
                    }
                },
                    React.createElement('i', {
                        className: stat.icon,
                        style: {
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            color: stat.color,
                            marginBottom: '10px'
                        }
                    }),
                    React.createElement('div', {
                        style: {
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            fontWeight: '700',
                            color: stat.color,
                            marginBottom: '5px'
                        }
                    }, stat.value),
                    React.createElement('div', {
                        style: {
                            fontSize: '0.85rem',
                            color: '#666',
                            fontWeight: '500'
                        }
                    }, stat.label)
                )
            )
        ),

        // Category Filter Section (DIPERBARUI - tanpa search dan rata kiri)
        React.createElement('div', {
            style: {
                background: 'white',
                padding: isMobile ? '15px' : '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                marginBottom: isMobile ? '25px' : '35px'
            }
        },
            React.createElement('div', {
                style: {
                    display: 'flex',
                    gap: '10px',
                    overflowX: 'auto',
                    paddingBottom: '10px',
                    justifyContent: isMobile ? 'flex-start' : 'flex-start'
                }
            },
                staffData.categories.map(category =>
                    React.createElement('button', {
                        key: category.id,
                        onClick: () => setActiveFilter(category.id),
                        style: {
                            background: activeFilter === category.id ? '#1e3c72' : 'white',
                            color: activeFilter === category.id ? 'white' : '#1e3c72',
                            border: `2px solid ${activeFilter === category.id ? '#1e3c72' : '#e9ecef'}`,
                            padding: '10px 15px',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                        },
                        onMouseEnter: (e) => {
                            if (!isMobile && activeFilter !== category.id) {
                                e.target.style.background = '#f8f9fa';
                                e.target.style.borderColor = '#1e3c72';
                            }
                        },
                        onMouseLeave: (e) => {
                            if (!isMobile && activeFilter !== category.id) {
                                e.target.style.background = 'white';
                                e.target.style.borderColor = '#e9ecef';
                            }
                        }
                    },
                        React.createElement('i', { className: category.icon }),
                        category.name,
                        React.createElement('span', {
                            style: {
                                background: activeFilter === category.id ? 'rgba(255,255,255,0.2)' : '#e9ecef',
                                color: activeFilter === category.id ? 'white' : '#666',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                fontSize: '0.75rem',
                                marginLeft: '5px'
                            }
                        }, category.count)
                    )
                )
            )
        ),

        // Results Info
        React.createElement('div', {
            style: {
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
            }
        },
            React.createElement('h2', {
                style: {
                    fontSize: isMobile ? '1.3rem' : '1.6rem',
                    fontWeight: '700',
                    color: '#1e3c72',
                    margin: 0
                }
            }, 'Daftar Guru & Staf'),
            React.createElement('div', {
                style: {
                    fontSize: '0.9rem',
                    color: '#666',
                    background: '#f8f9fa',
                    padding: '8px 15px',
                    borderRadius: '20px'
                }
            }, `${filteredStaff.length} orang ditemukan`)
        ),

        // Staff Grid
        React.createElement('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: isMobile ? '20px' : '30px',
                marginBottom: '40px'
            }
        },
            filteredStaff.length > 0 ? (
                filteredStaff.map(staff =>
                    React.createElement(StaffCard, { 
                        key: staff.id,
                        staff: staff
                    })
                )
            ) : (
                // Empty State
                React.createElement('div', {
                    style: {
                        gridColumn: '1 / -1',
                        textAlign: 'center',
                        padding: '60px 20px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }
                },
                    React.createElement('i', {
                        className: 'fas fa-search fa-3x',
                        style: {
                            color: '#e9ecef',
                            marginBottom: '20px'
                        }
                    }),
                    React.createElement('h3', {
                        style: {
                            fontSize: '1.3rem',
                            color: '#6c757d',
                            margin: '0 0 10px 0'
                        }
                    }, 'Guru atau staf tidak ditemukan'),
                    React.createElement('p', {
                        style: {
                            color: '#999',
                            margin: 0
                        }
                    }, 'Coba pilih kategori lain untuk melihat guru atau staf yang tersedia')
                )
            )
        ),

        // Modal Detail Guru
        selectedTeacher && React.createElement(TeacherDetailModal, {
            teacher: selectedTeacher,
            onClose: () => setSelectedTeacher(null)
        })
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.GuruStafContent = GuruStafContent;
console.log('GuruStafContent loaded and registered to window');