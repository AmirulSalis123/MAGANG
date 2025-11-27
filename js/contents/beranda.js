// beranda.js - VERSI LENGKAP DENGAN SEMUA PERBAIKAN
const BerandaContent = () => {
    const { useEffect, useState } = React;

    // FUNGSI NAVIGASI KE SECTION LAIN
    const navigateToSection = (section) => {
        const navigateEvent = new CustomEvent('navigateTo', { detail: section });
        window.dispatchEvent(navigateEvent);
    };

    // State untuk responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            setIsMobile(width <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data untuk Sambutan Kepala Sekolah
    const principalInfo = {
        name: ' Iswandi, S.Pd., M.Pd',
        title: 'Kepala Sekolah SDN Sampangan 01',
        photoUrl: 'imgs/kepsek.jpg',
        message: 'Asalamualaikum warohmatullahi wabarokatuh. SDN Sampangan 01 kini telah memiliki website sekolah yang dikelola mandiri, sebagai langkah memajukan pendidikan di era teknologi. Website ini berfungsi sebagai sarana vital untuk menyampaikan informasi dan mensosialisasikan program sekolah kepada siswa, guru, orang tua, dan masyarakat luas. Keberhasilan ini terwujud berkat dukungan penuh dari Walikota Semarang, Dinas Pendidikan, dan Dinas Komunikasi dan Informasi Kota Semarang. Diharapkan sarana ini dapat membawa kemajuan bagi dunia pendidikan di Kota Semarang. Wassalmualaikum warohmatullahi wabarokatuh.'
    };

    // Data Keunggulan Sekolah
    const strengths = [
        { 
            title: 'Prestasi Akademik', 
            description: 'Siswa berprestasi dalam berbagai lomba akademik tingkat kota dan provinsi',
            icon: 'fas fa-trophy', 
            color: '#e67e22', 
            bg: '#fdf2e9',
            target: 'prestasi'
        },
        { 
            title: 'Guru Berkualitas', 
            description: 'Didukung oleh guru-guru berpengalaman dan bersertifikasi',
            icon: 'fas fa-chalkboard-teacher', 
            color: '#3498db', 
            bg: '#ebf5fb',
            target: 'guruStaf'
        },
        { 
            title: 'Fasilitas Lengkap', 
            description: 'Ruang kelas nyaman, perpustakaan, dan laboratorium komputer',
            icon: 'fas fa-school', 
            color: '#2ecc71', 
            bg: '#eafaf1',
            target: 'saranaPrasana'
        },
        { 
            title: 'Program Unggulan', 
            description: 'Berbagai program ekstrakurikuler dan pengembangan karakter',
            icon: 'fas fa-star', 
            color: '#9b59b6', 
            bg: '#f4ecf7',
            target: 'ekstrakulikuler'
        }
    ];

    // Data Slideshow Foto
    const slides = [
        {
            image: 'imgs/kartini.jpg',
            title: 'Kegiatan Memperingati Hari Kartini',
            description: 'Siswa-siswi SDN Sampangan 01 mengenakan pakaian adat dalam rangka memperingati Hari Kartini'
        },
        {
            image: 'imgs/upacara.jpg',
            title: 'Upacara Bendera Rutin',
            description: 'Kegiatan upacara bendera setiap hari Senin untuk menanamkan nilai-nilai kebangsaan'
        },
        {
            image: 'imgs/senam.jpg',
            title: 'Kegiatan Olahraga',
            description: 'Siswa-siswi aktif mengikuti kegiatan olahraga untuk menjaga kesehatan dan kebugaran'
        },
        {
            image: 'imgs/pramuka.jpg',
            title: 'Kegiatan Ekstrakurikuler',
            description: 'Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa'
        }
    ];

    const announcements = [
        { title: 'Libur Awal Ramadhan 1445 H', date: '10 Maret 2025', type: 'Penting', icon: 'fas fa-calendar-times' },
        { title: 'Pembagian Raport Tengah Semester Genap', date: '25 Maret 2025', type: 'Akademik', icon: 'fas fa-book-open' },
        { title: 'Kegiatan Pesantren Kilat', date: '01 - 05 April 2025', type: 'Kegiatan', icon: 'fas fa-mosque' }
    ];

    // State untuk slideshow
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Efek untuk slideshow otomatis
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    // Fungsi untuk navigasi manual
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Efek Particles.js untuk hero section
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('hero-particles', {
                "particles": {
                    "number": { 
                        "value": isMobile ? 25 : 40,
                        "density": { 
                            "enable": true, 
                            "value_area": 800 
                        } 
                    },
                    "color": { 
                        "value": "#ffffff" 
                    },
                    "shape": { 
                        "type": "circle" 
                    },
                    "opacity": { 
                        "value": 0.3, 
                        "random": true 
                    },
                    "size": { 
                        "value": isMobile ? 2 : 3,
                        "random": true 
                    },
                    "line_linked": { 
                        "enable": true, 
                        "distance": isMobile ? 100 : 150,
                        "color": "#ffffff", 
                        "opacity": 0.2, 
                        "width": 1 
                    },
                    "move": { 
                        "enable": true, 
                        "speed": isMobile ? 1.5 : 2,
                        "direction": "none", 
                        "random": true, 
                        "straight": false, 
                        "out_mode": "out" 
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { 
                            "enable": !isMobile,
                            "mode": "repulse" 
                        },
                        "onclick": { 
                            "enable": true, 
                            "mode": "push" 
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }, [isMobile]);

    return React.createElement('div', { 
        className: 'beranda-content', 
        style: { 
            padding: isMobile ? '10px' : '20px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            overflowX: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        } 
    },
        
        // Konten Utama
        React.createElement('div', { style: { flex: 1 } },
            // 1. Hero Section - YANG SUDAH DIPERBAIKI
            React.createElement('div', {
                style: {
                    backgroundImage: 'url("imgs/bocil sd.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    height: isMobile ? '300px' : '500px',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: isMobile ? '20px' : '30px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: isMobile ? '20px 10px' : '40px 20px',
                    color: 'white'
                }
            },
                // Overlay gelap
                React.createElement('div', {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.4)',
                        zIndex: 1
                    }
                }),
                
                // Canvas untuk Particles.js
                React.createElement('div', {
                    id: 'hero-particles',
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2
                    }
                }),
                
                // Konten Hero - YANG SUDAH DIPERBAIKI
                React.createElement('div', {
                    style: {
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '800px',
                        width: '100%',
                        padding: isMobile ? '0 5px' : '0'
                    }
                },
                    React.createElement('h1', { 
                        style: { 
                            fontSize: isMobile ? '1.8rem' : '3.5rem',
                            fontWeight: '800', 
                            margin: '0 0 8px 0',
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            color: 'white',
                            lineHeight: '1.1',
                            background: 'linear-gradient(to right, #fff, #e6f7ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            padding: isMobile ? '0 5px' : '0'
                        } 
                    }, 'SELAMAT DATANG'),
                    
                    React.createElement('h2', { 
                        style: { 
                            fontSize: isMobile ? '1.2rem' : '2rem',
                            fontWeight: '600', 
                            margin: '0 0 15px 0',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            color: 'white',
                            opacity: '0.9',
                            padding: isMobile ? '0 5px' : '0'
                        } 
                    }, 'SDN SAMPANGAN 01'),
                    
                    React.createElement('p', { 
                        style: { 
                            fontSize: isMobile ? '0.9rem' : '1.3rem',
                            margin: '0 auto 20px auto',
                            maxWidth: '700px', 
                            lineHeight: isMobile ? '1.4' : '1.6',
                            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                            fontWeight: '400',
                            opacity: '0.95',
                            padding: isMobile ? '0 5px' : '0'
                        } 
                    }, 'Sistem Informasi Akademik Resmi SDN Sampangan 01. Gerbang informasi kegiatan belajar mengajar dan perkembangan sekolah.'),
                    
                    // Tombol Aksi - YANG SUDAH DIPERBAIKI
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            gap: isMobile ? '10px' : '20px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            width: isMobile ? '100%' : 'auto',
                            maxWidth: isMobile ? '280px' : 'none',
                            padding: isMobile ? '0 5px' : '0'
                        }
                    },
                        React.createElement('button', {
                            style: {
                                padding: isMobile ? '10px 16px' : '14px 32px',
                                background: '#e74c3c',
                                border: 'none',
                                borderRadius: '50px',
                                color: 'white',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: isMobile ? '0.85rem' : '1rem',
                                width: isMobile ? '100%' : 'auto',
                                minWidth: isMobile ? 'auto' : '160px',
                                boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
                            },
                            onClick: () => navigateToSection('ppdb'),
                            onMouseEnter: (e) => {
                                if (!isMobile) {
                                    e.target.style.background = '#c0392b';
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
                                }
                            },
                            onMouseLeave: (e) => {
                                if (!isMobile) {
                                    e.target.style.background = '#e74c3c';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
                                }
                            }
                        }, 'Info Pendaftaran')
                    )
                )
            ),

            // 2. Section Keunggulan Sekolah
            React.createElement('div', {
                style: { 
                    marginBottom: isMobile ? '30px' : '40px',
                    textAlign: 'center',
                    padding: isMobile ? '0 10px' : '0'
                }
            },
                React.createElement('h2', {
                    style: {
                        fontSize: isMobile ? '1.8rem' : '2.2rem',
                        fontWeight: '700',
                        color: '#1e3c72',
                        marginBottom: '10px'
                    }
                }, 'Keunggulan Sekolah'),
                React.createElement('p', {
                    style: {
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        color: '#666',
                        marginBottom: isMobile ? '30px' : '40px',
                        maxWidth: '600px',
                        margin: '0 auto 30px auto',
                        lineHeight: '1.5'
                    }
                }, 'SDN Sampangan 01 memiliki berbagai keunggulan yang mendukung perkembangan siswa secara optimal'),
                
                React.createElement('div', {
                    style: { 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: isMobile ? '15px' : '25px'
                    }
                },
                    strengths.map((item, idx) =>
                        React.createElement('div', {
                            key: idx,
                            style: {
                                background: 'white',
                                padding: isMobile ? '20px 15px' : '30px 25px',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                transition: isMobile ? 'none' : 'all 0.3s ease',
                                borderTop: `5px solid ${item.color}`,
                                height: '100%',
                                cursor: 'pointer'
                            },
                            onClick: () => navigateToSection(item.target),
                            onMouseEnter: (e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                                }
                            },
                            onMouseLeave: (e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                                }
                            }
                        },
                            React.createElement('div', {
                                style: {
                                    width: isMobile ? '60px' : '80px', 
                                    height: isMobile ? '60px' : '80px', 
                                    borderRadius: '50%', 
                                    background: item.bg, 
                                    color: item.color,
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: isMobile ? '1.8rem' : '2.2rem', 
                                    marginBottom: isMobile ? '15px' : '20px',
                                    transition: isMobile ? 'none' : 'all 0.3s ease'
                                }
                            }, React.createElement('i', { className: item.icon })),
                            React.createElement('h3', { 
                                style: { 
                                    fontSize: isMobile ? '1.2rem' : '1.4rem', 
                                    fontWeight: '700', 
                                    color: '#333', 
                                    lineHeight: '1.2',
                                    marginBottom: isMobile ? '10px' : '15px'
                                } 
                            }, item.title),
                            React.createElement('p', { 
                                style: { 
                                    color: '#666', 
                                    fontSize: isMobile ? '0.9rem' : '1rem', 
                                    lineHeight: '1.5'
                                } 
                            }, item.description)
                        )
                    )
                )
            ),

            // 3. Slideshow Foto Kegiatan
            React.createElement('div', {
                style: {
                    background: 'white',
                    padding: isMobile ? '15px' : '25px',
                    borderRadius: '12px',
                    marginBottom: isMobile ? '30px' : '40px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }
            },
                React.createElement('h2', {
                    style: {
                        fontSize: isMobile ? '1.5rem' : '1.8rem',
                        fontWeight: '700',
                        color: '#1e3c72',
                        marginBottom: isMobile ? '15px' : '20px',
                        textAlign: 'center'
                    }
                }, 'Galeri Kegiatan Sekolah'),
                
                // Container Slideshow
                React.createElement('div', {
                    style: {
                        position: 'relative',
                        width: '100%',
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.12)'
                    },
                    onMouseEnter: () => setIsPaused(true),
                    onMouseLeave: () => setIsPaused(false)
                },
                    // Container untuk semua slide
                    React.createElement('div', {
                        style: {
                            display: 'flex',
                            transition: 'transform 0.5s ease',
                            transform: `translateX(-${currentSlide * 100}%)`
                        }
                    },
                        slides.map((slide, index) =>
                            React.createElement('div', {
                                key: index,
                                style: {
                                    minWidth: '100%',
                                    position: 'relative'
                                }
                            },
                                React.createElement('img', {
                                    src: slide.image,
                                    alt: slide.title,
                                    style: {
                                        width: '100%',
                                        height: isMobile ? '250px' : '400px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }
                                }),
                                React.createElement('div', {
                                    style: {
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                        color: 'white',
                                        padding: isMobile ? '15px' : '20px',
                                        textAlign: 'center'
                                    }
                                },
                                    React.createElement('h3', {
                                        style: {
                                            margin: '0 0 8px 0',
                                            fontSize: isMobile ? '1.2rem' : '1.5rem',
                                            fontWeight: '600'
                                        }
                                    }, slide.title),
                                    React.createElement('p', {
                                        style: {
                                            margin: '0',
                                            fontSize: isMobile ? '0.85rem' : '1rem',
                                            opacity: '0.9',
                                            lineHeight: '1.4'
                                        }
                                    }, slide.description)
                                )
                            )
                        )
                    ),
                    
                    // Tombol navigasi sebelumnya
                    React.createElement('button', {
                        onClick: prevSlide,
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: isMobile ? '8px' : '15px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.7)',
                            border: 'none',
                            borderRadius: '50%',
                            width: isMobile ? '35px' : '40px',
                            height: isMobile ? '35px' : '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: isMobile ? '1rem' : '1.2rem',
                            color: '#333',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e) => {
                            if (!isMobile) {
                                e.target.style.background = 'rgba(255,255,255,0.9)';
                            }
                        },
                        onMouseLeave: (e) => {
                            if (!isMobile) {
                                e.target.style.background = 'rgba(255,255,255,0.7)';
                            }
                        }
                    }, React.createElement('i', { className: 'fas fa-chevron-left' })),
                    
                    // Tombol navigasi berikutnya
                    React.createElement('button', {
                        onClick: nextSlide,
                        style: {
                            position: 'absolute',
                            top: '50%',
                            right: isMobile ? '8px' : '15px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.7)',
                            border: 'none',
                            borderRadius: '50%',
                            width: isMobile ? '35px' : '40px',
                            height: isMobile ? '35px' : '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: isMobile ? '1rem' : '1.2rem',
                            color: '#333',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e) => {
                            if (!isMobile) {
                                e.target.style.background = 'rgba(255,255,255,0.9)';
                            }
                        },
                        onMouseLeave: (e) => {
                            if (!isMobile) {
                                e.target.style.background = 'rgba(255,255,255,0.7)';
                            }
                        }
                    }, React.createElement('i', { className: 'fas fa-chevron-right' })),
                    
                    // Indikator slide (dots)
                    React.createElement('div', {
                        style: {
                            position: 'absolute',
                            bottom: isMobile ? '12px' : '20px',
                            left: '0',
                            right: '0',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: isMobile ? '6px' : '10px'
                        }
                    },
                        slides.map((_, index) =>
                            React.createElement('button', {
                                key: index,
                                onClick: () => goToSlide(index),
                                style: {
                                    width: isMobile ? '8px' : '12px',
                                    height: isMobile ? '8px' : '12px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: index === currentSlide ? '#e74c3c' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                },
                                onMouseEnter: (e) => {
                                    if (!isMobile && index !== currentSlide) {
                                        e.target.style.background = 'rgba(255,255,255,0.8)';
                                    }
                                },
                                onMouseLeave: (e) => {
                                    if (!isMobile && index !== currentSlide) {
                                        e.target.style.background = 'rgba(255,255,255,0.5)';
                                    }
                                }
                            })
                        )
                    )
                )
            ),

            // 4. Split Section: Sambutan & Pengumuman
            React.createElement('div', { 
                style: { 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))', 
                    gap: isMobile ? '20px' : '35px',
                    padding: isMobile ? '0 10px' : '0'
                } 
            },
                // --- SAMBUTAN KEPALA SEKOLAH ---
                React.createElement('div', { 
                    style: { 
                        background: 'white', 
                        padding: isMobile ? '20px' : '35px', 
                        borderRadius: '12px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
                        height: 'fit-content'
                    }
                },
                    React.createElement('h2', { 
                        style: { 
                            borderBottom: '3px solid #f1c40f', 
                            paddingBottom: isMobile ? '12px' : '15px', 
                            marginBottom: isMobile ? '20px' : '25px', 
                            fontSize: isMobile ? '1.3rem' : '1.5rem', 
                            color: '#1e3c72', 
                            display: 'flex', 
                            alignItems: 'center'
                        } 
                    },
                        React.createElement('i', { 
                            className: 'fas fa-quote-left', 
                            style: { 
                                marginRight: isMobile ? '10px' : '12px', 
                                color: '#f1c40f', 
                                fontSize: isMobile ? '1.5rem' : '1.8rem' 
                            } 
                        }),
                        'Sambutan Kepala Sekolah'
                    ),
                    React.createElement('div', { 
                        style: { 
                            display: 'flex', 
                            gap: isMobile ? '15px' : '25px', 
                            alignItems: isMobile ? 'center' : 'flex-start',
                            flexDirection: isMobile ? 'column' : 'row'
                        } 
                    },
                        React.createElement('div', { 
                            style: { 
                                flexShrink: 0, 
                                textAlign: 'center' 
                            } 
                        },
                            React.createElement('div', {
                                style: {
                                    width: isMobile ? '100px' : '130px', 
                                    height: isMobile ? '120px' : '160px', 
                                    backgroundColor: '#ddd', 
                                    borderRadius: '10px',
                                    backgroundImage: `url(${principalInfo.photoUrl})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'top center',
                                    border: '3px solid white', 
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)', 
                                    marginBottom: isMobile ? '10px' : '15px',
                                    margin: isMobile ? '0 auto 10px auto' : '0 0 15px 0'
                                }
                            }),
                            React.createElement('h4', { 
                                style: { 
                                    margin: '0 0 5px 0', 
                                    fontSize: isMobile ? '1rem' : '1.1rem', 
                                    color: '#333', 
                                    fontWeight: '700' 
                                } 
                            }, principalInfo.name),
                            React.createElement('p', { 
                                style: { 
                                    margin: '0', 
                                    fontSize: isMobile ? '0.85rem' : '0.9rem', 
                                    color: '#1e3c72', 
                                    fontWeight: '600' 
                                } 
                            }, principalInfo.title)
                        ),
                        React.createElement('div', {
                            style: {
                                width: '100%'
                            }
                        },
                            React.createElement('p', { 
                                style: { 
                                    lineHeight: isMobile ? '1.6' : '1.8', 
                                    color: '#555', 
                                    fontSize: isMobile ? '0.95rem' : '1.05rem', 
                                    fontStyle: 'italic',
                                    background: '#f9f9f9',
                                    padding: isMobile ? '15px' : '20px',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #f1c40f',
                                    margin: 0,
                                    textAlign: isMobile ? 'center' : 'left'
                                } 
                            }, `"${principalInfo.message}"`)
                        )
                    )
                ),

                // --- PENGUMUMAN ---
                React.createElement('div', { 
                    style: { 
                        background: 'white', 
                        padding: isMobile ? '20px' : '35px', 
                        borderRadius: '12px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
                        height: 'fit-content'
                    }
                },
                    React.createElement('h2', { 
                        style: { 
                            borderBottom: '3px solid #e74c3c', 
                            paddingBottom: isMobile ? '12px' : '15px', 
                            marginBottom: isMobile ? '20px' : '25px', 
                            fontSize: isMobile ? '1.3rem' : '1.5rem', 
                            color: '#1e3c72', 
                            display: 'flex', 
                            alignItems: 'center'
                        } 
                    },
                        React.createElement('i', { 
                            className: 'fas fa-bullhorn', 
                            style: { 
                                marginRight: isMobile ? '10px' : '12px', 
                                color: '#e74c3c', 
                                fontSize: isMobile ? '1.5rem' : '1.8rem' 
                            } 
                        }),
                        'Pengumuman Terbaru'
                    ),
                    React.createElement('div', { 
                        style: { 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: isMobile ? '15px' : '20px'
                        } 
                    },
                        announcements.map((ann, idx) =>
                            React.createElement('div', { 
                                key: idx, 
                                style: { 
                                    padding: isMobile ? '15px' : '20px', 
                                    borderBottom: idx < announcements.length - 1 ? '2px solid #f0f0f0' : 'none', 
                                    display: 'flex', 
                                    gap: isMobile ? '12px' : '18px',
                                    borderRadius: '8px',
                                    transition: isMobile ? 'none' : 'all 0.3s ease',
                                    background: idx === 0 ? '#fff7f7' : 'transparent',
                                    borderLeft: idx === 0 ? '4px solid #e74c3c' : 'none',
                                    cursor: 'pointer'
                                },
                                onClick: () => navigateToSection('berita'),
                                onMouseEnter: (e) => {
                                    if (!isMobile && idx !== 0) {
                                        e.currentTarget.style.background = '#f9f9f9';
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                    }
                                },
                                onMouseLeave: (e) => {
                                    if (!isMobile && idx !== 0) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }
                                }
                            },
                                React.createElement('div', {
                                    style: {
                                        width: isMobile ? '40px' : '50px', 
                                        height: isMobile ? '40px' : '50px', 
                                        background: ann.type === 'Penting' ? '#fdeaea' : 
                                                   ann.type === 'Akademik' ? '#ebf5fb' : '#f0f7e9',
                                        borderRadius: '10px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        color: ann.type === 'Penting' ? '#e74c3c' : 
                                              ann.type === 'Akademik' ? '#3498db' : '#2ecc71',
                                        flexShrink: 0,
                                        fontSize: isMobile ? '1rem' : '1.2rem'
                                    }
                                }, React.createElement('i', { className: ann.icon })),
                                React.createElement('div', { 
                                    style: { 
                                        flex: 1,
                                        minWidth: 0
                                    } 
                                },
                                    React.createElement('div', { 
                                        style: { 
                                            fontSize: isMobile ? '0.8rem' : '0.85rem', 
                                            color: ann.type === 'Penting' ? '#e74c3c' : 
                                                  ann.type === 'Akademik' ? '#3498db' : '#2ecc71',
                                            fontWeight: '700', 
                                            textTransform: 'uppercase', 
                                            letterSpacing: '0.5px',
                                            marginBottom: '5px'
                                        } 
                                    }, ann.type),
                                    React.createElement('div', { 
                                        style: { 
                                            fontWeight: '700', 
                                            margin: '5px 0 8px 0', 
                                            fontSize: isMobile ? '1rem' : '1.1rem', 
                                            color: '#333',
                                            lineHeight: '1.3'
                                        } 
                                    }, ann.title),
                                    React.createElement('div', { 
                                        style: { 
                                            fontSize: isMobile ? '0.85rem' : '0.95rem', 
                                            color: '#666',
                                            display: 'flex',
                                            alignItems: 'center'
                                        } 
                                    }, 
                                        React.createElement('i', { 
                                            className: 'far fa-clock', 
                                            style: { marginRight: isMobile ? '5px' : '8px' } 
                                        }), 
                                        ann.date
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('button', {
                        style: {
                            width: '100%', 
                            marginTop: isMobile ? '20px' : '25px', 
                            padding: isMobile ? '12px' : '14px', 
                            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                            border: 'none',
                            borderRadius: '8px', 
                            color: 'white', 
                            fontWeight: '700', 
                            cursor: 'pointer', 
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '10px', 
                            transition: isMobile ? 'none' : 'all 0.3s ease',
                            fontSize: isMobile ? '0.9rem' : '1rem'
                        },
                        onClick: () => navigateToSection('berita'),
                        onMouseEnter: (e) => {
                            if (!isMobile) {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(30, 60, 114, 0.3)';
                            }
                        },
                        onMouseLeave: (e) => {
                            if (!isMobile) {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }
                        }
                    }, 'Lihat Semua Pengumuman', React.createElement('i', { className: 'fas fa-arrow-right' }))
                )
            )
        ),
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.BerandaContent = BerandaContent;
console.log('BerandaContent (versi lengkap dengan semua perbaikan) loaded and registered to window');