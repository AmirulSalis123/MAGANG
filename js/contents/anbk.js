// anbk.js - KOMPONEN INFORMASI ANBK SDN SAMPANGAN 01
const ANBKContent = () => {
    const { useEffect, useState } = React;

    // State untuk responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeTab, setActiveTab] = useState('pengertian');
    const [showSimulation, setShowSimulation] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data ANBK
    const anbkData = {

        // Informasi Umum ANBK
        generalInfo: {
            title: 'Asesmen Nasional Berbasis Komputer (ANBK)',
            description: 'ANBK adalah evaluasi yang diselenggarakan oleh Kemdikbud untuk memetakan mutu pendidikan pada tingkat satuan pendidikan dasar dan menengah. ANBK menggantikan Ujian Nasional dengan pendekatan yang lebih komprehensif.',
            purpose: [
                'Menilai kompetensi literasi dan numerasi siswa',
                'Mengukur kualitas proses belajar-mengajar',
                'Memetakan mutu pendidikan secara nasional',
                'Sebagai dasar perbaikan kualitas pembelajaran'
            ],
            participants: 'Siswa kelas 5 yang terpilih secara acak oleh sistem Kemdikbud'
        },

        // Komponen ANBK
        components: [
            {
                name: 'AKM (Asesmen Kompetensi Minimum)',
                icon: 'fas fa-book-reader',
                description: 'Mengukur kompetensi dasar literasi membaca dan numerasi yang diperlukan semua siswa',
                subComponents: [
                    {
                        name: 'Literasi Membaca',
                        description: 'Kemampuan memahami, menggunakan, mengevaluasi, dan merefleksikan berbagai teks'
                    },
                    {
                        name: 'Numerasi',
                        description: 'Kemampuan berpikir menggunakan konsep, prosedur, fakta, dan alat matematika'
                    }
                ]
            },
            {
                name: 'Survei Karakter',
                icon: 'fas fa-heart',
                description: 'Mengukur sikap, nilai, keyakinan, dan kebiasaan yang mencerminkan karakter siswa',
                aspects: [
                    'Beriman dan bertakwa kepada Tuhan YME',
                    'Berkebhinekaan global',
                    'Mandiri',
                    'Bergotong royong',
                    'Bernalar kritis',
                    'Kreatif'
                ]
            },
            {
                name: 'Survei Lingkungan Belajar',
                icon: 'fas fa-school',
                description: 'Mengukur kualitas pembelajaran dan iklim sekolah yang menunjang pembelajaran',
                aspects: [
                    'Iklim keamanan sekolah',
                    'Iklim kebinekaan sekolah',
                    'Kualitas pembelajaran di kelas',
                    'Pengembangan guru'
                ]
            }
        ],

        // Jadwal ANBK
        schedule: {
            year: '2025',
            activities: [
                {
                    activity: 'Sosialisasi ANBK kepada Orang Tua',
                    date: '15 Agustus 2025',
                    status: 'Selesai'
                },
                {
                    activity: 'Pembekalan dan Simulasi ANBK',
                    date: '2-6 September 2025',
                    status: 'Selesai'
                },
                {
                    activity: 'Gladi Bersih ANBK',
                    date: '16 September 2025',
                    status: 'Selesai'
                },
                {
                    activity: 'Pelaksanaan ANBK Sesuai Jadwal',
                    date: '23-26 September 2025',
                    status: 'Akan Datang'
                },
                {
                    activity: 'Pengumuman Hasil ANBK',
                    date: 'Desember 2025',
                    status: 'Akan Datang'
                }
            ]
        },

        // Tips Persiapan ANBK
        preparationTips: [
            {
                category: 'Persiapan Akademik',
                tips: [
                    'Perbanyak latihan soal literasi dan numerasi',
                    'Baca berbagai jenis teks (cerita, artikel, tabel)',
                    'Latihan mengerjakan soal dengan waktu terbatas',
                    'Review materi matematika dasar'
                ]
            },
            {
                category: 'Persiapan Teknis',
                tips: [
                    'Pastikan familiar dengan perangkat komputer',
                    'Ikuti semua sesi simulasi dan gladi bersih',
                    'Cek kondisi perangkat sebelum ujian',
                    'Pastikan koneksi internet stabil'
                ]
            },
            {
                category: 'Persiapan Mental',
                tips: [
                    'Jaga kesehatan dan istirahat yang cukup',
                    'Makan makanan bergizi sebelum ujian',
                    'Datang lebih awal ke sekolah',
                    'Tetap tenang dan percaya diri'
                ]
            },
            {
                category: 'Saat Pelaksanaan',
                tips: [
                    'Baca soal dengan teliti',
                    'Kelola waktu dengan baik',
                    'Kerjakan soal yang mudah terlebih dahulu',
                    'Periksa kembali jawaban sebelum submit'
                ]
            }
        ],

        // FAQ ANBK
        faq: [
            {
                question: 'Apa bedanya ANBK dengan Ujian Nasional?',
                answer: 'ANBK tidak menentukan kelulusan siswa, tetapi memetakan mutu pendidikan. ANBK mengukur kompetensi minimum dan survei karakter, sedangkan UN mengukur penguasaan materi pelajaran.'
            },
            {
                question: 'Bagaimana pemilihan peserta ANBK?',
                answer: 'Peserta dipilih secara acak oleh sistem Kemdikbud dengan jumlah maksimal 30 siswa per sekolah untuk SD/MI. Pemilihan dilakukan secara nasional.'
            },
            {
                question: 'Apakah ANBK mempengaruhi nilai rapor?',
                answer: 'Tidak. Hasil ANBK tidak mempengaruhi nilai rapor atau kelulusan siswa. ANBK digunakan untuk pemetaan mutu pendidikan sekolah.'
            },
            {
                question: 'Bagaimana bentuk soal ANBK?',
                answer: 'Soal ANBK berbentuk pilihan ganda, pilihan ganda kompleks, menjodohkan, isian singkat, dan uraian. Soal mengukur kemampuan bernalar, bukan hafalan.'
            },
            {
                question: 'Apa yang harus dibawa saat ANBK?',
                answer: 'Siswa hanya perlu membawa alat tulis dan kartu peserta. Perangkat komputer dan jaringan sudah disediakan sekolah.'
            }
        ],

        // Simulasi Soal ANBK
        simulationQuestions: [
            {
                id: 1,
                type: 'literasi',
                question: 'Bacalah teks berikut!\n\n"Pada hari Minggu, Andi pergi ke perpustakaan. Dia meminjam tiga buku: satu buku cerita, satu buku ilmu pengetahuan, dan satu buku sejarah. Andi sangat senang karena bisa membaca buku-buku baru."\n\nPertanyaan: Berapa jumlah buku yang dipinjam Andi?',
                options: ['1 buku', '2 buku', '3 buku', '4 buku'],
                correctAnswer: 2,
                explanation: 'Dalam teks disebutkan bahwa Andi meminjam tiga buku: buku cerita, ilmu pengetahuan, dan sejarah.'
            },
            {
                id: 2,
                type: 'numerasi',
                question: 'Ibu membeli 5 kantong permen. Setiap kantong berisi 8 permen. Berapa total permen yang dibeli Ibu?',
                options: ['13 permen', '35 permen', '40 permen', '45 permen'],
                correctAnswer: 2,
                explanation: '5 kantong × 8 permen = 40 permen'
            },
            {
                id: 3,
                type: 'literasi',
                question: 'Manakah kalimat yang menggunakan tanda baca yang tepat?',
                options: [
                    'Ibu pergi ke pasar, membeli sayuran.',
                    'Ibu pergi ke pasar membeli sayuran.',
                    'Ibu pergi, ke pasar membeli sayuran.',
                    'Ibu pergi ke pasar membeli, sayuran.'
                ],
                correctAnswer: 0,
                explanation: 'Tanda koma digunakan untuk memisahkan kegiatan yang dilakukan secara berurutan.'
            },
            {
                id: 4,
                type: 'numerasi',
                question: 'Sebuah lapangan berbentuk persegi panjang dengan panjang 20 meter dan lebar 15 meter. Berapa keliling lapangan tersebut?',
                options: ['35 meter', '50 meter', '70 meter', '300 meter'],
                correctAnswer: 2,
                explanation: 'Keliling = 2 × (panjang + lebar) = 2 × (20 + 15) = 2 × 35 = 70 meter'
            }
        ],

        // Dokumen dan Resources
        resources: [
            {
                name: 'Kisi-kisi ANBK 2025',
                type: 'PDF',
                size: '2.1 MB',
                description: 'Kisi-kisi resmi ANBK dari Kemdikbud untuk tahun 2025',
                icon: 'fas fa-file-pdf'
            },
            {
                name: 'Panduan ANBK untuk Siswa',
                type: 'PDF',
                size: '1.8 MB',
                description: 'Buku panduan mengerjakan ANBK untuk peserta didik',
                icon: 'fas fa-book'
            },
            {
                name: 'Contoh Soal Literasi',
                type: 'PDF',
                size: '3.2 MB',
                description: 'Kumpulan contoh soal literasi ANBK tahun sebelumnya',
                icon: 'fas fa-file-alt'
            },
            {
                name: 'Contoh Soal Numerasi',
                type: 'PDF',
                size: '2.9 MB',
                description: 'Kumpulan contoh soal numerasi ANBK tahun sebelumnya',
                icon: 'fas fa-calculator'
            }
        ],

        // Kontak Panitia ANBK
        committee: {
            coordinator: 'Drs. Sugiyanto, M.Pd (Kepala Sekolah)',
            technical: 'Rizki Pratama, S.Pd (Guru Penjas)',
            support: 'Suryaningsih, A.Md (Staf TU)',
            contact: '(024) 1234567'
        }
    };

    // Komponen Tab Navigation
    const TabNavigation = () => {
        const tabs = [
            { id: 'pengertian', label: 'Pengertian', icon: 'fas fa-info-circle' },
            { id: 'komponen', label: 'Komponen', icon: 'fas fa-puzzle-piece' },
            { id: 'jadwal', label: 'Jadwal', icon: 'fas fa-calendar-alt' },
            { id: 'persiapan', label: 'Persiapan', icon: 'fas fa-check-circle' },
            { id: 'simulasi', label: 'Simulasi', icon: 'fas fa-laptop' },
            { id: 'faq', label: 'FAQ', icon: 'fas fa-question-circle' }
        ];

        return React.createElement('div', { className: 'tab-navigation' },
            React.createElement('div', { className: 'tab-container' },
                tabs.map(tab =>
                    React.createElement('button', {
                        key: tab.id,
                        className: `tab-button ${activeTab === tab.id ? 'active' : ''}`,
                        onClick: () => setActiveTab(tab.id)
                    },
                        React.createElement('i', { className: tab.icon }),
                        tab.label
                    )
                )
            )
        );
    };

    // Komponen Simulasi ANBK
    const SimulationComponent = () => {
        const currentQ = anbkData.simulationQuestions[currentQuestion];
        
        const handleAnswerSelect = (answerIndex) => {
            const newAnswers = [...userAnswers];
            newAnswers[currentQuestion] = answerIndex;
            setUserAnswers(newAnswers);
        };

        const handleNextQuestion = () => {
            if (currentQuestion < anbkData.simulationQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }
        };

        const handlePreviousQuestion = () => {
            if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
            }
        };

        const handleRestartSimulation = () => {
            setCurrentQuestion(0);
            setUserAnswers([]);
            setShowResults(false);
        };

        if (showResults) {
            const correctAnswers = userAnswers.filter((answer, index) => 
                answer === anbkData.simulationQuestions[index].correctAnswer
            ).length;
            const totalQuestions = anbkData.simulationQuestions.length;
            const percentage = (correctAnswers / totalQuestions) * 100;

            return React.createElement('div', { className: 'simulation-results' },
                React.createElement('h2', null, 'Hasil Simulasi ANBK'),

                React.createElement('div', { className: 'results-summary' },
                    React.createElement('div', { className: 'percentage' }, `${percentage.toFixed(0)}%`),
                    React.createElement('div', { className: 'score' }, `Nilai: ${correctAnswers}/${totalQuestions}`),
                    React.createElement('div', { className: 'feedback' }, percentage >= 70 ? 'Kamu sudah siap!' : 'Perlu belajar lebih giat lagi')
                ),

                React.createElement('div', { className: 'results-details' },
                    anbkData.simulationQuestions.map((question, index) => {
                        const isCorrect = userAnswers[index] === question.correctAnswer;
                        return React.createElement('div', {
                            key: question.id,
                            className: `result-item ${isCorrect ? 'correct' : 'incorrect'}`
                        },
                            React.createElement('div', { className: 'result-status' }, `Soal ${index + 1}: ${isCorrect ? 'Benar' : 'Salah'}`),
                            React.createElement('div', { className: 'result-explanation' }, question.explanation)
                        );
                    })
                ),

                React.createElement('div', { className: 'results-actions' },
                    React.createElement('button', {
                        onClick: handleRestartSimulation,
                        className: 'btn-primary'
                    },
                        React.createElement('i', { className: 'fas fa-redo' }),
                        'Ulangi Simulasi'
                    ),
                    React.createElement('button', {
                        onClick: () => setShowSimulation(false),
                        className: 'btn-secondary'
                    }, 'Kembali ke Menu')
                )
            );
        }

        return React.createElement('div', { className: 'simulation-container' },
            React.createElement('div', { className: 'simulation-header' },
                React.createElement('h3', null, 'Simulasi ANBK'),
                React.createElement('div', { className: 'question-counter' }, `Soal ${currentQuestion + 1} dari ${anbkData.simulationQuestions.length}`)
            ),

            React.createElement('div', { className: 'question-section' },
                React.createElement('div', {
                    className: `question-box ${currentQ.type}`
                },
                    React.createElement('div', { className: 'question-type' }, currentQ.type === 'literasi' ? 'Literasi Membaca' : 'Numerasi'),
                    React.createElement('p', { className: 'question-text' }, currentQ.question)
                ),

                React.createElement('div', { className: 'options-container' },
                    currentQ.options.map((option, index) =>
                        React.createElement('button', {
                            key: index,
                            onClick: () => handleAnswerSelect(index),
                            className: `option-button ${userAnswers[currentQuestion] === index ? 'selected' : ''}`
                        }, option)
                    )
                )
            ),

            React.createElement('div', { className: 'simulation-navigation' },
                React.createElement('button', {
                    onClick: handlePreviousQuestion,
                    disabled: currentQuestion === 0,
                    className: `nav-button prev ${currentQuestion === 0 ? 'disabled' : ''}`
                },
                    React.createElement('i', { className: 'fas fa-arrow-left' }),
                    'Sebelumnya'
                ),

                React.createElement('div', { className: 'progress-dots' },
                    anbkData.simulationQuestions.map((_, index) =>
                        React.createElement('div', {
                            key: index,
                            className: `progress-dot ${index === currentQuestion ? 'active' : ''} ${
                                userAnswers[index] !== undefined ? 'answered' : ''
                            }`
                        })
                    )
                ),

                React.createElement('button', {
                    onClick: handleNextQuestion,
                    className: 'nav-button next'
                },
                    currentQuestion === anbkData.simulationQuestions.length - 1 ? 'Selesai' : 'Berikutnya',
                    React.createElement('i', { 
                        className: currentQuestion === anbkData.simulationQuestions.length - 1 ? 
                            'fas fa-check' : 'fas fa-arrow-right' 
                    })
                )
            )
        );
    };

    // Render konten berdasarkan tab aktif
    const renderActiveTabContent = () => {
        switch (activeTab) {
            case 'pengertian':
                return React.createElement('div', null,
                    React.createElement('div', { className: 'info-card' },
                        React.createElement('h2', null, anbkData.generalInfo.title),
                        React.createElement('p', { className: 'description' }, anbkData.generalInfo.description),

                        React.createElement('div', { className: 'info-grid' },
                            React.createElement('div', null,
                                React.createElement('h3', null,
                                    React.createElement('i', { className: 'fas fa-bullseye' }),
                                    'Tujuan ANBK'
                                ),
                                React.createElement('ul', { className: 'purpose-list' },
                                    anbkData.generalInfo.purpose.map((item, index) =>
                                        React.createElement('li', { key: index }, item)
                                    )
                                )
                            ),
                            React.createElement('div', null,
                                React.createElement('h3', null,
                                    React.createElement('i', { className: 'fas fa-users' }),
                                    'Peserta ANBK'
                                ),
                                React.createElement('div', { className: 'participants-box' },
                                    React.createElement('p', null, anbkData.generalInfo.participants)
                                )
                            )
                        )
                    ),

                    // Resources Section
                    React.createElement('div', { className: 'resources-card' },
                        React.createElement('h3', null, 'Dokumen dan Resources'),
                        React.createElement('div', { className: 'resources-grid' },
                            anbkData.resources.map((resource, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: 'resource-item'
                                },
                                    React.createElement('i', {
                                        className: resource.icon,
                                        style: { color: '#e74c3c' }
                                    }),
                                    React.createElement('div', null,
                                        React.createElement('div', { className: 'resource-name' }, resource.name),
                                        React.createElement('div', { className: 'resource-meta' }, `${resource.type} • ${resource.size}`),
                                        React.createElement('div', { className: 'resource-description' }, resource.description)
                                    )
                                )
                            )
                        )
                    )
                );

            case 'komponen':
                return React.createElement('div', null,
                    React.createElement('h2', null, 'Komponen ANBK'),
                    React.createElement('div', { className: 'components-grid' },
                        anbkData.components.map((component, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'component-card'
                            },
                                React.createElement('div', { className: 'component-header' },
                                    React.createElement('div', { className: 'component-icon' },
                                        React.createElement('i', { className: component.icon })
                                    ),
                                    React.createElement('h3', null, component.name)
                                ),

                                React.createElement('p', { className: 'component-description' }, component.description),

                                component.subComponents ? (
                                    React.createElement('div', null,
                                        React.createElement('h4', null, 'Sub Komponen:'),
                                        React.createElement('div', { className: 'subcomponents-list' },
                                            component.subComponents.map((sub, subIndex) =>
                                                React.createElement('div', {
                                                    key: subIndex,
                                                    className: 'subcomponent-item'
                                                },
                                                    React.createElement('div', { className: 'subcomponent-name' }, sub.name),
                                                    React.createElement('div', { className: 'subcomponent-description' }, sub.description)
                                                )
                                            )
                                        )
                                    )
                                ) : (
                                    React.createElement('div', null,
                                        React.createElement('h4', null, 'Aspek yang Diukur:'),
                                        React.createElement('ul', { className: 'aspects-list' },
                                            component.aspects.map((aspect, aspectIndex) =>
                                                React.createElement('li', { key: aspectIndex }, aspect)
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );

            case 'jadwal':
                return React.createElement('div', null,
                    React.createElement('div', { className: 'schedule-card' },
                        React.createElement('h2', null, `Jadwal ANBK ${anbkData.schedule.year}`),

                        React.createElement('div', { className: 'schedule-list' },
                            anbkData.schedule.activities.map((activity, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: 'schedule-item'
                                },
                                    React.createElement('div', { className: 'schedule-number' }, index + 1),
                                    React.createElement('div', { className: 'schedule-info' },
                                        React.createElement('h3', null, activity.activity),
                                        React.createElement('p', null, activity.date)
                                    ),
                                    React.createElement('div', {
                                        className: `status-badge ${activity.status === 'Selesai' ? 'completed' : 
                                                  activity.status === 'Akan Datang' ? 'upcoming' : 'in-progress'}`
                                    }, activity.status)
                                )
                            )
                        )
                    )
                );

            case 'persiapan':
                return React.createElement('div', null,
                    React.createElement('h2', null, 'Tips Persiapan ANBK'),
                    React.createElement('div', { className: 'tips-grid' },
                        anbkData.preparationTips.map((category, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'tip-category'
                            },
                                React.createElement('h3', null,
                                    React.createElement('i', { 
                                        className: index === 0 ? 'fas fa-book' :
                                                  index === 1 ? 'fas fa-laptop' :
                                                  index === 2 ? 'fas fa-heart' : 'fas fa-clock'
                                    }),
                                    category.category
                                ),

                                React.createElement('ul', { className: 'tips-list' },
                                    category.tips.map((tip, tipIndex) =>
                                        React.createElement('li', { key: tipIndex }, tip)
                                    )
                                )
                            )
                        )
                    )
                );

            case 'simulasi':
                return showSimulation ? 
                    React.createElement(SimulationComponent) :
                    React.createElement('div', { className: 'simulation-intro' },
                        React.createElement('div', { className: 'simulation-icon' },
                            React.createElement('i', { className: 'fas fa-laptop' })
                        ),

                        React.createElement('h2', null, 'Simulasi ANBK'),

                        React.createElement('p', null, 'Latih kemampuan literasi dan numerasi Anda dengan simulasi ANBK ini. Terdapat 4 soal yang mirip dengan soal ANBK sesungguhnya.'),

                        React.createElement('div', { className: 'simulation-stats' },
                            React.createElement('div', { className: 'stat-box' },
                                React.createElement('div', { className: 'stat-number' }, '4'),
                                React.createElement('div', { className: 'stat-label' }, 'Total Soal')
                            ),
                            React.createElement('div', { className: 'stat-box' },
                                React.createElement('div', { className: 'stat-number' }, '15m'),
                                React.createElement('div', { className: 'stat-label' }, 'Estimasi Waktu')
                            )
                        ),

                        React.createElement('button', {
                            onClick: () => {
                                setShowSimulation(true);
                                setCurrentQuestion(0);
                                setUserAnswers([]);
                                setShowResults(false);
                            },
                            className: 'start-simulation-btn'
                        },
                            React.createElement('i', { className: 'fas fa-play' }),
                            'Mulai Simulasi'
                        )
                    );

            case 'faq':
                return React.createElement('div', null,
                    React.createElement('h2', null, 'Pertanyaan yang Sering Ditanyakan (FAQ)'),
                    React.createElement('div', { className: 'faq-list' },
                        anbkData.faq.map((item, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'faq-item'
                            },
                                React.createElement('h3', null,
                                    React.createElement('i', { className: 'fas fa-question-circle' }),
                                    item.question
                                ),
                                React.createElement('p', null, item.answer)
                            )
                        )
                    )
                );

            default:
                return null;
        }
    };

    return React.createElement('div', { className: 'anbk-content' },
        // Header Section
        React.createElement('div', { className: 'header-section' },
            React.createElement('div', { className: 'header-background' }),
            
            React.createElement('h1', null, 'Asesmen Nasional Berbasis Komputer'),
        ),

        // Tab Navigation
        React.createElement(TabNavigation),

        // Tab Content
        React.createElement('div', { className: 'tab-content' }, renderActiveTabContent())
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.ANBKContent = ANBKContent;
console.log('ANBKContent loaded and registered to window');