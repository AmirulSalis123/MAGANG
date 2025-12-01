// sarana-prasana.js - KOMPONEN SARANA DAN PRASARANA SDN SAMPANGAN 01 (DIPERBARUI)
const SaranaPrasanaContent = () => {
    const { useEffect, useState } = React;

    // State untuk responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeCategory, setActiveCategory] = useState('semua');

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data Sarana dan Prasarana YANG DIPERBARUI
    const facilitiesData = {
        categories: [
            { id: 'semua', name: 'Semua Fasilitas', icon: 'fas fa-building', count: 0 },
            { id: 'ruang_kelas', name: 'Ruang Kelas', icon: 'fas fa-door-open', count: 12 },
            { id: 'administrasi', name: 'Administrasi', icon: 'fas fa-users', count: 3 },
            { id: 'perpus', name: 'Perpustakaan', icon: 'fas fa-book', count: 1 },
            { id: 'kantin', name: 'Kantin', icon: 'fas fa-utensils', count: 1 },
            { id: 'kesehatan', name: 'Kesehatan', icon: 'fas fa-heartbeat', count: 1 },
            { id: 'lab_komputer', name: 'Lab Komputer', icon: 'fas fa-laptop', count: 1 },
            { id: 'ibadah', name: 'Ibadah', icon: 'fas fa-mosque', count: 1 }
        ],

        facilities: [
            {
                id: 1,
                name: 'Ruang Kelas 1A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 2,
                name: 'Ruang Kelas 1B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 3,
                name: 'Ruang Kelas 2A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 4,
                name: 'Ruang Kelas 2B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 5,
                name: 'Ruang Kelas 3A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 6,
                name: 'Ruang Kelas 3B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 7,
                name: 'Ruang Kelas 4A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 8,
                name: 'Ruang Kelas 4B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 9,
                name: 'Ruang Kelas 5A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 10,
                name: 'Ruang Kelas 5B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 11,
                name: 'Ruang Kelas 6A',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 12,
                name: 'Ruang Kelas 6B',
                category: 'ruang_kelas',
                image: 'imgs/kelas.jpg',
            },
            {
                id: 13,
                name: 'Perpustakaan Sekolah',
                category: 'perpus',
                image: 'imgs/perpus.jpg',
            },
            {
                id: 14,
                name: 'Kantin Sekolah',
                category: 'kantin',
                image: 'imgs/kantin.jpg',
            },
            {
                id: 15,
                name: 'UKS (Usaha Kesehatan Sekolah)',
                category: 'kesehatan',
                image: 'imgs/uks.jpg',
            },
            {
                id: 16,
                name: 'Mushola',
                category: 'ibadah',
                image: 'imgs/mushola.jpg',
            },
            {
                id: 17,
                name: 'Lab Komputer',
                category: 'lab_komputer',
                image: 'imgs/lab_komputer.png',
            },
            {
                id: 18,
                name: 'Ruang Guru',
                category: 'administrasi',
                image: 'imgs/ruang_guru.jpg',
            },
            {
                id: 19,
                name: 'Ruang Kepala Sekolah',
                category: 'administrasi',
                image: 'imgs/ruang_kepsek.jpg',
            },
            {
                id: 20,
                name: 'Ruang Tata Usaha',
                category: 'administrasi',
                image: 'imgs/ruang_tu.jpg',
            }
        ]
    };

    // Filter facilities berdasarkan kategori
    const filteredFacilities = facilitiesData.facilities.filter(facility => {
        return activeCategory === 'semua' || facility.category === activeCategory;
    });

    // Hitung total facilities untuk setiap kategori
    facilitiesData.categories.forEach(category => {
        if (category.id === 'semua') {
            category.count = facilitiesData.facilities.length;
        } else {
            category.count = facilitiesData.facilities.filter(f => f.category === category.id).length;
        }
    });

    // Komponen Facility Card
    const FacilityCard = ({ facility }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);

        return React.createElement('div', {
            className: 'facility-card',
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
            }
        },
            // Facility Image
            React.createElement('div', {
                style: {
                    position: 'relative',
                    height: '200px',
                    overflow: 'hidden',
                    background: '#f8f9fa'
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
                }, React.createElement('i', { className: 'fas fa-image fa-2x' })),
                
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
                            React.createElement('i', { className: 'fas fa-building fa-3x', style: { marginBottom: '10px' } }),
                            React.createElement('p', { style: { margin: 0, fontSize: '0.9rem' } }, 'Gambar tidak tersedia')
                        )
                    ) :
                    React.createElement('img', {
                        src: facility.image,
                        alt: facility.name,
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

            // Facility Content
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
                        fontSize: isMobile ? '1.1rem' : '1.3rem',
                        fontWeight: '700',
                        color: '#1e3c72',
                        margin: '0 0 10px 0',
                        lineHeight: '1.3'
                    }
                }, facility.name),

                React.createElement('p', {
                    style: {
                        fontSize: '0.9rem',
                        color: '#666',
                        margin: '0 0 15px 0',
                        lineHeight: '1.5',
                        flex: 1
                    }
                }, facility.description),
            )
        );
    };

    return React.createElement('div', { 
        className: 'sarana-prasana-content',
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
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
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
            }, 'Sarana dan Prasarana'),
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
                { icon: 'fas fa-building', label: 'Total Fasilitas', value: facilitiesData.facilities.length, color: '#1e3c72' },
    { icon: 'fas fa-door-open', label: 'Ruang Kelas', value: facilitiesData.categories.find(c => c.id === 'ruang_kelas').count, color: '#3498db' },
    { icon: 'fas fa-users', label: 'Administrasi', value: facilitiesData.categories.find(c => c.id === 'administrasi').count, color: '#f39c12' },
    { icon: 'fas fa-book', label: 'Perpustakaan', value: facilitiesData.categories.find(c => c.id === 'perpus').count, color: '#2ecc71' },
    { icon: 'fas fa-utensils', label: 'Kantin', value: facilitiesData.categories.find(c => c.id === 'kantin').count, color: '#e67e22' },
    { icon: 'fas fa-heartbeat', label: 'UKS', value: facilitiesData.categories.find(c => c.id === 'kesehatan').count, color: '#e91e63' },
    { icon: 'fas fa-desktop', label: 'Lab Komputer', value: facilitiesData.categories.find(c => c.id === 'lab_komputer').count, color: '#e74c3c' },
    { icon: 'fas fa-mosque', label: 'Mushola', value: facilitiesData.categories.find(c => c.id === 'ibadah').count, color: '#9b59b6' }
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
                facilitiesData.categories.map(category =>
                    React.createElement('button', {
                        key: category.id,
                        onClick: () => setActiveCategory(category.id),
                        style: {
                            background: activeCategory === category.id ? '#1e3c72' : 'white',
                            color: activeCategory === category.id ? 'white' : '#1e3c72',
                            border: `2px solid ${activeCategory === category.id ? '#1e3c72' : '#e9ecef'}`,
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
                            if (!isMobile && activeCategory !== category.id) {
                                e.target.style.background = '#f8f9fa';
                                e.target.style.borderColor = '#1e3c72';
                            }
                        },
                        onMouseLeave: (e) => {
                            if (!isMobile && activeCategory !== category.id) {
                                e.target.style.background = 'white';
                                e.target.style.borderColor = '#e9ecef';
                            }
                        }
                    },
                        React.createElement('i', { className: category.icon }),
                        category.name,
                        React.createElement('span', {
                            style: {
                                background: activeCategory === category.id ? 'rgba(255,255,255,0.2)' : '#e9ecef',
                                color: activeCategory === category.id ? 'white' : '#666',
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
            }, 'Daftar Fasilitas'),
            React.createElement('div', {
                style: {
                    fontSize: '0.9rem',
                    color: '#666',
                    background: '#f8f9fa',
                    padding: '8px 15px',
                    borderRadius: '20px'
                }
            }, `${filteredFacilities.length} fasilitas ditemukan`)
        ),

        // Facilities Grid
        React.createElement('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: isMobile ? '20px' : '30px',
                marginBottom: '40px'
            }
        },
            filteredFacilities.length > 0 ? (
                filteredFacilities.map(facility =>
                    React.createElement(FacilityCard, { 
                        key: facility.id,
                        facility: facility
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
                    }, 'Fasilitas tidak ditemukan'),
                    React.createElement('p', {
                        style: {
                            color: '#999',
                            margin: 0
                        }
                    }, 'Coba pilih kategori lain untuk melihat fasilitas yang tersedia')
                )
            )
        )
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.SaranaPrasanaContent = SaranaPrasanaContent;
console.log('SaranaPrasanaContent loaded and registered to window');