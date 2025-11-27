// visi-misi.js - KOMPONEN VISI DAN MISI SDN SAMPANGAN 01
const VisiMisiContent = () => {
    const { useEffect, useState } = React;

    // State untuk responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data Visi, Misi, dan Tujuan
    const visiMisiData = {
        visi: "Terciptanya peserta didik yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, berakhlak mulia, berkarakter, unggul dalam prestasi, peduli lingkungan dan menguasai teknologi informasi.",
        
        misi: [
            "Menanamkan keimanan dan ketaqwaan melalui pengalaman ajaran agama",
            "Mewujudkan pembiasaan beribadah sesuai agama yang dianut peserta didik",
            "Membentuk sikap dan perilaku santun, sopan, dan berkarakter",
            "Menanamkan nilai-nilai kepribadian dalam pergaulan sekolah",
            "Mewujudkan KBM secara optimal untuk mencapai tingkat belajar tuntas baik secara tatap muka ataupun daring (online)",
            "Menciptakan pembiasaan membaca bagi peserta didik untuk peningkatan prestasi",
            "Mengoptimalkan pengembangan diri melalui kegiatan ekstrakulikuler sesuai bakan dan minat peserta didik"
        ],

        tujuan: [
            "Mengembangkan pembiasaan beribadah sesuai agama yang dianut peserta didik",
            "Menumbuh kembangkan rasa menghargai dan menghormati sesama warga di lingkungan sekolah, keluarga dan masyarakat",
            "Meningkatkan prestasi akademik maupun non akademik peserta didik",
            "Meningkatkan penguasaan ilmu pengetahuan dan teknologi kepada peserta didik",
            "Menumbuhkan berbagai kegiatan pembelajaran dengan berbasis pendidikan karakter bangsa",
            "Meningkatkan literasi sekolah bagi peserta didik dengan membiasakan membaca",
            "Mengembangkan minat dan bakat peserta didik melalui kegiatan ekstrakulikuler",
            "Menyiapkan peserta didik untuk dapat diterima di jenjang yang lebih tinggi yang berkualitas dan menguasai teknologi informasi",
            "Menyiapkan peserta diidk terampil dengan berwawasan lingkungan dalam pemanfaatan lahan kosong untuk menanam tanaman bermanfaat yang dapat melestarikan alam",
            "Menciptakan sekolah yang sehat, bersi rapih, dan asri"
        ],

        motto: "Sekolah Unggul, Berkarakter, dan Berwawasan Lingkungan"
    };

    return React.createElement('div', { 
        className: 'visi-misi-content'
    },
        // Header Section
        React.createElement('div', {
            className: 'vm-header'
        },
            // Background Pattern
            React.createElement('div', {
                className: 'vm-header-pattern'
            }),
            
            React.createElement('h1', {
                className: 'vm-title'
            }, 'Visi dan Misi'),
        ),

        // Motto Section
        React.createElement('div', {
            className: 'vm-motto-section'
        },
            React.createElement('h3', {
                className: 'vm-motto-title'
            },
                React.createElement('i', { className: 'fas fa-quote-left vm-quote-icon' }),
                'Motto Sekolah',
                React.createElement('i', { className: 'fas fa-quote-right vm-quote-icon' })
            ),
            React.createElement('p', {
                className: 'vm-motto-text'
            }, `"${visiMisiData.motto}"`)
        ),

        // Visi Section
        React.createElement('div', {
            className: 'vm-section vm-visi-section'
        },
            // Background Icon
            React.createElement('div', {
                className: 'vm-bg-icon'
            }, '🎯'),
            
            React.createElement('div', {
                className: 'vm-section-content'
            },
                React.createElement('div', {
                    className: 'vm-icon-container vm-visi-icon'
                },
                    React.createElement('i', {
                        className: 'fas fa-eye vm-section-icon'
                    })
                ),
                
                React.createElement('div', {
                    className: 'vm-text-content'
                },
                    React.createElement('h2', {
                        className: 'vm-section-title'
                    }, 'Visi Sekolah'),
                    
                    React.createElement('div', {
                        className: 'vm-content-box'
                    },
                        React.createElement('p', {
                            className: 'vm-visi-text'
                        }, `"${visiMisiData.visi}"`)
                    )
                )
            )
        ),

        // Misi Section
        React.createElement('div', {
            className: 'vm-section vm-misi-section'
        },
            // Background Icon
            React.createElement('div', {
                className: 'vm-bg-icon'
            }, '🎯'),
            
            React.createElement('div', {
                className: 'vm-section-content'
            },
                React.createElement('div', {
                    className: 'vm-icon-container vm-misi-icon'
                },
                    React.createElement('i', {
                        className: 'fas fa-bullseye vm-section-icon'
                    })
                ),
                
                React.createElement('div', {
                    className: 'vm-text-content'
                },
                    React.createElement('h2', {
                        className: 'vm-section-title'
                    }, 'Misi Sekolah'),
                    
                    React.createElement('div', {
                        className: 'vm-content-box'
                    },
                        React.createElement('div', {
                            className: 'vm-list-container'
                        },
                            visiMisiData.misi.map((item, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: `vm-list-item ${index % 2 === 0 ? 'vm-item-even' : 'vm-item-odd'}`
                                },
                                    React.createElement('div', {
                                        className: 'vm-item-number vm-misi-number'
                                    }, index + 1),
                                    
                                    React.createElement('p', {
                                        className: 'vm-item-text'
                                    }, item)
                                )
                            )
                        )
                    )
                )
            )
        ),

        // Tujuan Section
        React.createElement('div', {
            className: 'vm-section vm-tujuan-section'
        },
            // Background Icon
            React.createElement('div', {
                className: 'vm-bg-icon'
            }, '🎯'),
            
            React.createElement('div', {
                className: 'vm-section-content'
            },
                React.createElement('div', {
                    className: 'vm-icon-container vm-tujuan-icon'
                },
                    React.createElement('i', {
                        className: 'fas fa-flag vm-section-icon'
                    })
                ),
                
                React.createElement('div', {
                    className: 'vm-text-content'
                },
                    React.createElement('h2', {
                        className: 'vm-section-title'
                    }, 'Tujuan Sekolah'),
                    
                    React.createElement('div', {
                        className: 'vm-content-box'
                    },
                        React.createElement('div', {
                            className: 'vm-grid-container'
                        },
                            visiMisiData.tujuan.map((item, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: 'vm-grid-item'
                                },
                                    React.createElement('div', {
                                        className: 'vm-item-number vm-tujuan-number'
                                    }, index + 1),
                                    
                                    React.createElement('p', {
                                        className: 'vm-item-text'
                                    }, item)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.VisiMisiContent = VisiMisiContent;
console.log('VisiMisiContent loaded and registered to window');