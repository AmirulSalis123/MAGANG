// kelas.js - KOMPONEN PROFESIONAL DATA KELAS (12 KELAS) DENGAN 324 SISWA - TANPA LOADING & MOBILE RESPONSIVE
const KelasContent = () => {
    const { useState, useEffect, useRef } = React;

    const [kelasData, setKelasData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGrade, setFilterGrade] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [highlightedStudent, setHighlightedStudent] = useState(null);
    const studentRefs = useRef({});

    // Data 12 kelas 
    const initialKelasData = [
        // Kelas 1A - 27 siswa
        { 
            id: 1,
            grade: 'Kelas 1A',
            teacher: 'Ismi Trisnawati, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '📚',
            color: '#6a89cc',
            contact: 'ismitrisnawati@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            capacity: 28,   
            studentList: [
                'Adila Nisa Mardani', 'Aisyah Ayudia Inara', 'Alfian Rizky Mubarok', 'Alvian Difa Pratama', 'Anisa Istiqomah',
                'Ashalina Dira Danastri', 'Attila Ghaisan Zufar Altezza', 'Ayu Nur Syafitri', 'Danuarsa Mahardika', 'Devan Amril Fauzi',
                'Dhika Maulana', 'Elsa Cahaya Gunardi', 'Erlangga Gibran Nandana', 'Fabrizio Akhtar', 'Faeyza Adhyatsa',
                'Ghani Arkananta Andira Putra', 'Kaesha Ramadhani Nochi', 'Khailla Noor Azzahra', 'Mifta Ghulam Mirsa', 'Mirza Hakim Julian Wibowo',
                'Muhammad Gebriel Saputra', 'Muhammad Rifky Aditya Putra', 'Myesha Azkia Shakila', 'Navadisa Dinaya Vidahayu', 'Nimas Budining Aslamah',
                'Nita Agustina', 'Rahma Shobrina', 'Ramot Imanuael Sirait', 'Zahira Alfia Khansa'
            ]
        },
        { 
            id: 2,
            grade: 'Kelas 1B',
            teacher: 'Kristanti Dwi Kurniati S, S.Pd. SD',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '📚',
            color: '#6a89cc',
            contact: 'kristantidwikurniati@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            capacity: 28,
            studentList: [
                'Afsheen Verda', 'Al Risqu Rayhan Saputra', 'Alvian Damarazka Pamuncak', 'Anindia Dhevina Fitriyanti', 'Ararinda Latissya Andromeda',
                'Arjuna Ariendra Wibowo', 'Askana Sakhi El Hazima', 'Aviliani Shidqia Holil', 'Berliana Vikayla Setyadewi', 'Bernard Anthony Christian',
                'Chelloniva Putri Arimbi', 'Dea Arnezka Salsabila', 'Diandra Shaquita Kinari', 'Dinda Fitria Salsabila', 'Ernezio Abyan Wibawa',
                'Fadilla Nathan Al Ghozali', 'Faris Atha`illah', 'Jaden Aria Pramudito', 'Kenes Mikhayla Suherli', 'Maulana Arya Ramadhani',
                'Muhammad Daffa Alfarizky Arsan', 'Muhammad Mahesa Febrian', 'Nafisyah Anindita Sulistia', 'Nayla Mustika Hariyanto', 'Rafli Achmad Widiyanto',
                'Salsabila Putri', 'Satria Luhur Prayoga', 'Valeria Charissa Andita Putri'
            ]
        },
        // Kelas 2A - 27 siswa
        { 
            id: 3,
            grade: 'Kelas 2A',
            teacher: 'Suwilo Puji, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '🔢',
            color: '#82ccdd',
            contact: 'suwilopuji@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            capacity: 30,
            studentList: [
                'Abiyyu Sidqii Susanto', 'Akhdan Seto Damar Panuluh', 'Alfian Gavin Fahreza', 'Alysia Shafa Haura Setiawan', 'Anara Khairinniswa',
                'Aqiela Thafana Rahmania Putri', 'Asyifa Frida Maharani', 'Charly Septian Kurniawan', 'Delta Sella Grenila', 'Donna Hamidah',
                'Habib Maulana Prasetya', 'Hana Khalilah Fictory', 'Intan Maharani', 'Izza Nafla Syakira', 'Larissa Ana Putri',
                'Menur Hanifah Putri', 'Muhammad Adam Sholeh', 'Muhammad Fadil Al Ajid', 'Muhammad Nafi Andika', 'Nadhira Thafana Mahfudyah',
                'Pratama Azza Kisworo', 'Richad Gilang Mahardika', 'Sabina Gita Anugrah Perdana', 'Salsabila Rayhana Binta Edya', 'Satria Adnan Ramadani',
                'Siti Maulidina Azahra'
            ]
        },
        // Kelas 2B - 27 siswa
        { 
            id: 4,
            grade: 'Kelas 2B',
            teacher: 'Suwilo Puji, S.Pd',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '🔢',
            color: '#82ccdd',
            contact: 'suwilopuji@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            studentList: [
                'Adelia Amrisna Maulida', 'Adelia Faranisa Aznii', 'Alvaro Andita Gavriel Fraxelno', 'Andini Windri Novelisa', 'Annisa Afrin',
                'Assyifa Humaira Putri Aditya', 'Azam Maulana Arzik', 'Daffa Arsyaf Fairuz', 'Falisha Lily Ashira', 'Fazeela Haq Abduh Ayesha',
                'Hikam Muhammad Syauqi', 'Khaylila Chiara Zaheen', 'Maulana Febryano Ma`rufin', 'Mayka Faranisa Aznii', 'Mirza Pradana Putra',
                'Muhammad Aldiyanto', 'Muhammad Arjuna', 'Muhammad Kemal firmansyah', 'Muhammad Xavier Everald Ardianto', 'Nabilah Nikeisha',
                'Naila Laillatul Atiyah', 'Raza Prama Ardani', 'Rohit Maulana', 'Safitri Kurniasari', 'Salwa Zhafif Rahmawati',
                'Tasya Alyana Rahman', 'Veronica Evelyn Putri Riswanto', 'Yumna Fahira Gandi'
            ]
        },
        { 
            id: 5,
            grade: 'Kelas 3A',
            teacher: 'Veronica Agnes Riyani, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '🔬',
            color: '#b8e994',
            contact: 'veronicaagnesriyani@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            capacity: 30,
            studentList: [
                'Abimanyu Rahlil Satriawan', 'Alifah Naura Qathrunnada', 'Arfa Mu`afihaya Ibrahim', 'Aulia Jinan Yasmina Faiha', 'Azalia Khansa',
                'Azka Zaki William Permadi', 'Davina Margareth Sely', 'Dzakira Talita Zahra', 'Fairuz Maulida Inara', 'Farida Elvina Maulida',
                'Fide Raya Feliaz', 'Firdan Sanawi', 'Kayura Aqilla Azhwa', 'Khasyi Farrel Rajendra Putra', 'Labiqa Naurra Dzulqaidah',
                'Mahira Hasna Kamila', 'Mala Callista Puspitasari', 'Marsella Zaskia Rizky Maharani', 'Mas Roro Calista Putri Wamanta Santosa', 'Maulana Malik Ibrahim',
                'Mohamat Anggra Safir Saputra', 'Muhamad Aufa Hafizh', 'Muhammad Syabil Setyawan', 'Navira Ayu Asyafa', 'Quinsa Naura Maulida',
                'Raihana Yasmin Faiha', 'Ronal Adi Saputra', 'Zidan Nurul Hidayat'
            ]
        },
        // Kelas 3B - 27 siswa
        { 
            id: 6,
            grade: 'Kelas 3B',
            teacher: 'Sri Daningsih, S.Pd',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '🔬',
            color: '#b8e994',
            contact: 'sridaningsih@sdn-sampangan01.sch.id',
            building: 'Gedung A',
            capacity: 30,
            studentList: [
                'Afif Amiruddin', 'Annisa Ayinda Noviyanie', 'Aqillah Nadhiifa Aulia', 'Briyan Ardiansyah Haryanto', 'Chika Belva Azkadina',
                'Fatin Anindya Azmi', 'Grace Eliora Pramudito', 'Hafeez Anggeriano Grenas', 'Kalila Maula Ramadhani', 'Khayla Almira Marissa Abdul Cholik',
                'Limbang Sanjaya Wicaksono', 'Luthfia Zahra Talita', 'Mahira Hasna Kamila', 'Muhammad Akmal Muzakki', 'Muhammad Fajarriawan',
                'Muhammad Rafi Prasetyo', 'Nabila Intaha Putri', 'Naufal Nuha Estipar', 'Nayla Nakeisha Erlina', 'Ratna Dewi Puspitasari',
                'Rency Qaereen Aqilla', 'Riyani Afrilliaputri', 'Satriyo Bagas Prakoso', 'Selima Nana Rumana', 'Tirta Sifatul Faidl',
                'Yudha Hariyadi', 'Zahra Putri Oktaviana', 'Zidan Danujati'
            ]
        },
        // Kelas 4A - 27 siswa
        { 
            id: 7,
            grade: 'Kelas 4A',
            teacher: 'Yosi Aprilia K, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '💻',
            color: '#fad390',
            contact: 'yosiaprilia@sdn-sampangan01.sch.id',
            building: 'Gedung B',
            capacity: 32,
            established: '2017',
            studentList: [
                'Adinda Tridina Putri', 'Ahmad Rizki', 'Anindhita Windri Oktavia', 'Atiqa Aqila Khalisha', 'Citra Aisyah Wijaya',
                'Daffa Azzam Mahib', 'Difo Dwi Cahyo', 'Dimas Dwi Saputra', 'Farraka Abiy Maheswara', 'Fatana Abdil Mubarok',
                'Ivander Anam Pasha', 'Keisha Alya Rahmadani', 'Kevin Arya Dwi Saputra', 'Khalif Rasya Kuncara', 'Khansa Aliya Zafira',
                'Muhammad Amru Yazid', 'Muhammad Arfian Putra', 'Muhammad Arsakha Virendra Gandi', 'Muhammad Putra Fairus', 'Nabilla Nurul Ainy',
                'Nafeeza Wahyu Saputri', 'Nazwa Meyda Zahra', 'Octaviani Indah Adelia', 'Rafi Satria Revano', 'Sabrina Azra Khumayra',
                'Tania Mourin Dwinov', 'Ziven Chusnillah Hadi Saputra'
            ]
        },
        // Kelas 4B - 27 siswa
        { 
            id: 8,
            grade: 'Kelas 4B',
            teacher: 'Ikhtaromaulidia, S.Pd',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '💻',
            color: '#fad390',
            contact: 'ikhtaromaulidia@sdn-sampangan01.sch.id',
            building: 'Gedung B',
            capacity: 32,
            studentList: [
                'Achmad Fahri Ramadhan', 'Achmad Fahri Ramadhan', 'Adzqia Valensia Putri Ahyu', 'Alfino Putra Michaella', 'Almira Chandra Fauziyyah',
                'Alvina Febriani Putri', 'Amila Ulfa Azalfa', 'Aqila Azka Ramadhani', 'Az Zahra Salsabila Alana', 'Dias Reisya Leviana',
                'Diego Rizkyandra', 'Dwi Erlangga', 'Indah Rahmadani', 'Khansa Balqis Fairuz', 'Malik Abdurrahman Hartanta',
                'Matthew Daffin Ardias', 'Melodya Dafania Azzahra', 'Muhammad Cino Sanjaya', 'Muhammad David Sadewa', 'Muhammad Noor Ikhsan',
                'Muhammad Zildan Zulhusni', 'Nadia Hasna Ramadhani Arifikar', 'Novia Erlindita', 'Renita Aqhilla Maharani', 'Riani Mustika Herawati',
                'Yusuf Al Fatih', 'Zabir Al Arkan'
            ]
        },
        // Kelas 5A - 27 siswa
        { 
            id: 9,
            grade: 'Kelas 5A',
            teacher: 'Fuji Setya Lestari, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '🌍',
            color: '#f8c291',
            contact: 'fujisetyalestari@sdn-sampangan01.sch.id',
            building: 'Gedung B',
            capacity: 32,
            studentList: [
                'Aisyah Dwi Cahyo', 'Andra Bismo Setiawan', 'Arista Putri Permata Sari', 'Ayunda Ziffatunisa', 'Bianca Sasmitha Mabbina',
                'Dinda Ayu', 'Fadila Nur Aini', 'Faeyza Torres Asytar', 'Filil Labib Bakir', 'Gabrielle Ra Mada',
                'Hafni Fibri Adelia', 'Hanifah Sofiatun Jannah', 'Irvan Vicko Alvian', 'Khairiyah Ivana Larasati', 'Khansaa Syahlaa Amalia',
                'Moch Ibnu Maulana', 'Muhammad Bagus', 'Muhammad Fariz Ardiansyah', 'Muhammad Yasin Al Fatih', 'Naga Putra Pratama',
                'Neysa Chelan Devansha', 'Rasyid Shihab Niti Darma', 'Ratna Putri Valentina', 'Rizky Ibrahim', 'Velda Annora Azalia',
                'Wulan Shifa Anggraini', 'Zacky Raditya'
            ]
        },
        // Kelas 5B - 27 siswa
        { 
            id: 10,
            grade: 'Kelas 5B',
            teacher: 'Sri Mulyani, S.Pd',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '🌍',
            color: '#f8c291',
            contact: 'srimulyani@sdn-sampangan01.sch.id',
            building: 'Gedung B',
            capacity: 32,
            studentList: [
                'Aufa Febriani Nur Anisa', 'Adrian Christiano Atmaja', 'Afiyah Putri Melati', 'Alvian Triyanto Laksono', 'Ardan Raditya Nandang',
                'Azahra Aulia Rahmania Putri', 'Ceillo Orlend Junior Sely', 'Eben Haezer Namarubessy', 'Eka Rosa Lestari', 'Feastika Aklilna Azyani',
                'Firas Oriyana Fauzi', 'Irsyad Fauzan', 'Kalisa Rizkia Novara,', 'Kiran Wulandari', 'Lais Arsalan Bagas Arifin',
                'Muhammad Abiyu Burhanuddin', 'Muhammad Fakhri Iqbal', 'Muhammad Yusrulfalah', 'Nabila Nayifah', 'Naomi Odelia Dechan',
                'Naylafayzza Cahyaningrum', 'Puri Lovita Sari', 'Rafa Saputra Rahmadhani', 'Rafi`i', 'Ridho Putra Rianto',
                'Rizzki Evan Allvaro', 'Satria Tri Wicaksana', 'Talitha Inas Maritza'
            ]
        },
        // Kelas 6A - 27 siswa
        { 
            id: 11,
            grade: 'Kelas 6A',
            teacher: 'Dhita Ajeng C, S.Pd',
            students: 27,
            boys: 14,
            girls: 13,
            icon: '🎓',
            color: '#d1ccc0',
            contact: 'dhitaajeng@sdn-sampangan01.sch.id',
            building: 'Gedung C',
            capacity: 32,
            studentList: [
                'Adam Fairuz Maulana', ' Ahmad Hisyam Tsalits Fahmi', 'Alvino Rizky Adriano', 'Alysa Dewi Rifami', 'Anggray Desya Lumintang',
                'Apriliyani Diah Styaningrum', 'Ardhafa Rizki Viransya', 'Ardhian Dwi Noerrochman', 'Ardiva Setya Kusumaningrum', 'Aryanti Nada Saputri',
                'Calista Anindya Aqila Rahman', 'Carissa Asti Athena', 'Fadhil Prayoga', 'Fardan Abdul Rahman', 'Fayazha Alika Abdillah',
                'Fitria Rahmadani', 'Habibah Nur Chawadist', 'Jasmine Awlia Bilqiz', 'Jeceline Vallery Chicka Ardianita', 'Khalisha Izzayani Sulanjari',
                'Kurnia Novita Sari', 'Laksamana Alif Arya Kamandanu', 'Mia Ayuningtias', 'Mochamat Azham Ghofur', 'Muhammad Rizqi Widodo',
                'Nabil Edgar Atha Usamastian', 'Nadila Regina Putri', 'Nanda Aan Chrisfardi', 'Nawafil Miqdad Arsyadan', 'Putri Gian Kirana',
                'Rafa Fauzta', 'Reffana Putri Maulida', 'Selvi Dwi Wulandari', 'Shanja Arjun Willi Revano', 'Shela Mu`min',
                'Valen Adinda Septiana', 'Vincent Noverico Iskandar'
            ]
        },
        // Kelas 6B - 27 siswa
        { 
            id: 12,
            grade: 'Kelas 6B',
            teacher: 'Teguh Triyadi, S.Pd',
            students: 27,
            boys: 13,
            girls: 14,
            icon: '🎓',
            color: '#d1ccc0',
            contact: 'teguhtriyadi@sdn-sampangan01.sch.id',
            building: 'Gedung C',
            capacity: 32,
            studentList: [
                'Abid Kayisal Fernando', 'Adellia Chantika Putri', 'Adli Dwi Prakoso', 'Alifvia Eka Mahfudyah', 'Almer Rafif Athallah',
                'Asyifa Hanum Larasati', 'Asyifa Kayana Dewi', 'Carissa Anindita Aqila Rahman', 'Cleosa Daiva Raditya Putra Denisa', 'Dea Ayu Nur Rahmawati',
                'Febriyan Putra Rahman', 'Fitria Setya Ningrum', 'Gendis Azizah Rahmadani', 'Juan Tegar Valenno', 'Keisya Artika',
                'Lalang Setya Putranto', 'Mahendra Yusuf Ananta', 'Meilany Dwi Putri Prasniyanti', 'Meira Asri Yaasiinanto', 'Mohamad Rasyid Al Raafi',
                'Muhammad Fauzi Fahry', 'Muhammad Rizky Cahyono', 'Muhammad Rizky Syahputra', 'Nadila Wahyu Berlinda', 'Nadine Voreent Barande',
                'Naflah Husnaa Zaahirah', 'Nianda Cahya Effendi', 'Noval Surya Saputra', 'Nur Bintang Pratama', 'Nur Hidayah',
                'Quraneil Achtar', 'Salsabila Khoirunnisa', 'Satria Dewa Taulad Anaz', 'Siska Sandrika', 'Zakiya Raya Hasifa',
                'Zul Qisthi Hawari'
            ]
        }
    ];

    // Inisialisasi data tanpa loading
    useEffect(() => {
        setKelasData(initialKelasData);
    }, []);

    // Fungsi untuk scroll ke siswa yang dicari
    const scrollToStudent = (studentName) => {
        const studentKey = studentName.replace(/\s+/g, '-').toLowerCase();
        if (studentRefs.current[studentKey]) {
            studentRefs.current[studentKey].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            setHighlightedStudent(studentName);
            
            // Hapus highlight setelah 2 detik
            setTimeout(() => {
                setHighlightedStudent(null);
            }, 2000);
        }
    };

    // Filter data berdasarkan pencarian dan filter
    const filteredKelasData = kelasData.filter(kelas => {
        const matchesSearch = kelas.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            kelas.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            kelas.studentList.some(student => 
                                student.toLowerCase().includes(searchTerm.toLowerCase())
                            );
                           
        const matchesFilter = filterGrade === 'all' || 
                             kelas.grade.includes(filterGrade);
        
        return matchesSearch && matchesFilter;
    });

    const totalStudents = kelasData.reduce((total, kelas) => total + kelas.students, 0);
    const averageStudents = Math.round(totalStudents / (kelasData.length || 1));
    const totalClasses = kelasData.length;

    // Fungsi untuk menangani perubahan pencarian
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        // Jika pencarian berisi nama siswa, scroll ke siswa tersebut
        if (value.length > 2) {
            const foundStudent = kelasData.flatMap(kelas => kelas.studentList)
                .find(student => student.toLowerCase().includes(value.toLowerCase()));
            
            if (foundStudent) {
                setTimeout(() => scrollToStudent(foundStudent), 300);
            }
        }
    };

    // Check if mobile device
    const isMobile = window.innerWidth < 768;

    return React.createElement('div', { 
        className: 'kelas-content',
        style: { 
            padding: isMobile ? '15px' : '30px',
            maxWidth: '1200px',
            margin: '0 auto'
        }
    },
        // Header Section - Responsive
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
            }, 'Data Siswa'),
        ),
        
        // Statistics Section - Responsive
        React.createElement('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '15px' : '20px',
                marginBottom: isMobile ? '25px' : '40px'
            }
        },
            [
                { icon: 'fas fa-building', label: 'Total Kelas', value: totalClasses, color: '#1e3c72' },
                { icon: 'fas fa-users', label: 'Total Siswa', value: totalStudents, color: '#3498db' },
                { icon: 'fas fa-chalkboard-teacher', label: 'Wali Kelas', value: totalClasses, color: '#2ecc71' },
                { icon: 'fas fa-door-open', label: 'Rata-rata/Kelas', value: averageStudents, color: '#e67e22' }
            ].map((stat, index) =>
                React.createElement('div', {
                    key: index,
                    style: {
                        background: 'white',
                        padding: isMobile ? '15px' : '25px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        borderTop: `4px solid ${stat.color}`,
                        transition: 'all 0.3s ease'
                    },
                    onMouseEnter: (e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                    },
                    onMouseLeave: (e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
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
                            fontSize: isMobile ? '0.75rem' : '0.85rem',
                            color: '#666',
                            fontWeight: '500'
                        }
                    }, stat.label)
                )
            )
        ),

        // Filter dan Pencarian Section - Responsive
        React.createElement('div', { 
            style: {
                background: 'white',
                padding: isMobile ? '15px' : '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                marginBottom: isMobile ? '25px' : '35px'
            }
        },
            React.createElement('div', {
                style: {
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'center',
                    gap: isMobile ? '15px' : '20px'
                }
            },
                // Search Box
                React.createElement('div', {
                    style: {
                        position: 'relative',
                        flex: 1
                    }
                },
                    React.createElement('input', {
                        type: 'text',
                        placeholder: 'Cari kelas, wali kelas, nama siswa...',
                        value: searchTerm,
                        onChange: handleSearchChange,
                        style: {
                            width: '100%',
                            padding: isMobile ? '10px 40px 10px 12px' : '12px 45px 12px 15px',
                            border: '2px solid #e9ecef',
                            borderRadius: '8px',
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                        },
                        onFocus: (e) => {
                            e.target.style.borderColor = '#1e3c72';
                        },
                        onBlur: (e) => {
                            e.target.style.borderColor = '#e9ecef';
                        }
                    }),
                    searchTerm && React.createElement('button', {
                        onClick: () => setSearchTerm(''),
                        style: {
                            position: 'absolute',
                            right: isMobile ? '30px' : '40px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            color: '#6c757d',
                            cursor: 'pointer',
                            fontSize: isMobile ? '0.9rem' : '1rem'
                        }
                    }, '✕'),
                    React.createElement('i', {
                        className: 'fas fa-search',
                        style: {
                            position: 'absolute',
                            right: isMobile ? '10px' : '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#6c757d'
                        }
                    })
                ),

                // Filter Grade
                React.createElement('div', {
                    style: {
                        position: 'relative',
                        minWidth: isMobile ? 'auto' : '150px'
                    }
                },
                    
                    React.createElement('div', {
                        style: {
                            position: 'relative'
                        }
                    },
                        React.createElement('select', {
                            value: filterGrade,
                            onChange: (e) => setFilterGrade(e.target.value),
                            style: {
                                width: '100%',
                                padding: isMobile ? '10px 35px 10px 12px' : '12px 45px 12px 15px',
                                border: '2px solid #e9ecef',
                                borderRadius: '8px',
                                fontSize: isMobile ? '0.9rem' : '1rem',
                                outline: 'none',
                                transition: 'all 0.3s ease',
                                background: 'white',
                                cursor: 'pointer',
                                appearance: 'none'
                            },
                            onFocus: (e) => {
                                e.target.style.borderColor = '#1e3c72';
                                e.target.style.boxShadow = '0 0 0 3px rgba(30, 60, 114, 0.1)';
                            },
                            onBlur: (e) => {
                                e.target.style.borderColor = '#e9ecef';
                                e.target.style.boxShadow = 'none';
                            }
                        },
                            React.createElement('option', { value: 'all' }, 'Semua Kelas'),
                            React.createElement('option', { value: 'Kelas 1' }, 'Kelas 1'),
                            React.createElement('option', { value: 'Kelas 2' }, 'Kelas 2'),
                            React.createElement('option', { value: 'Kelas 3' }, 'Kelas 3'),
                            React.createElement('option', { value: 'Kelas 4' }, 'Kelas 4'),
                            React.createElement('option', { value: 'Kelas 5' }, 'Kelas 5'),
                            React.createElement('option', { value: 'Kelas 6' }, 'Kelas 6')
                        ),
                        React.createElement('i', {
                            className: 'fas fa-chevron-down',
                            style: {
                                position: 'absolute',
                                right: isMobile ? '10px' : '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d',
                                pointerEvents: 'none'
                            }
                        })
                    )
                ),

                // View Mode Toggle
                React.createElement('div', {
                    style: {
                        display: 'flex',
                        gap: '10px',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }
                },
                    React.createElement('button', {
                        onClick: () => setViewMode('grid'),
                        style: {
                            background: viewMode === 'grid' ? '#1e3c72' : 'white',
                            color: viewMode === 'grid' ? 'white' : '#1e3c72',
                            border: `2px solid ${viewMode === 'grid' ? '#1e3c72' : '#e9ecef'}`,
                            padding: isMobile ? '8px 12px' : '10px 15px',
                            borderRadius: '8px',
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flex: isMobile ? 1 : 'none'
                        }
                    },
                        React.createElement('i', { className: 'fas fa-th' }),
                        isMobile ? '' : 'Grid'
                    ),
                    React.createElement('button', {
                        onClick: () => setViewMode('list'),
                        style: {
                            background: viewMode === 'list' ? '#1e3c72' : 'white',
                            color: viewMode === 'list' ? 'white' : '#1e3c72',
                            border: `2px solid ${viewMode === 'list' ? '#1e3c72' : '#e9ecef'}`,
                            padding: isMobile ? '8px 12px' : '10px 15px',
                            borderRadius: '8px',
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flex: isMobile ? 1 : 'none'
                        }
                    },
                        React.createElement('i', { className: 'fas fa-list' }),
                        isMobile ? '' : 'List'
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
            }, 'Daftar Kelas'),
            React.createElement('div', {
                style: {
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    color: '#666',
                    background: '#f8f9fa',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }
            }, 
                React.createElement('i', { className: 'fas fa-list' }),
                `${filteredKelasData.length} kelas ditemukan dari 324 siswa`
            )
        ),

        // Kelas Grid View - Responsive
        viewMode === 'grid' ? 
        React.createElement('div', { 
            className: 'kelas-grid',
            style: {
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: isMobile ? '20px' : '30px',
                marginBottom: isMobile ? '30px' : '40px'
            }
        },
            filteredKelasData.map((kelas) =>
                React.createElement('div', {
                    key: kelas.id,
                    className: 'kelas-card',
                    style: {
                        background: 'white',
                        borderRadius: '16px',
                        padding: isMobile ? '20px' : '25px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        borderLeft: `5px solid ${kelas.color}`,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
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
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                        }
                    }
                },
                    // Background Pattern
                    React.createElement('div', {
                        style: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '80px',
                            height: '80px',
                            background: kelas.color,
                            opacity: 0.1,
                            borderRadius: '0 16px 0 100px'
                        }
                    }),
                    
                    // Header dengan nama kelas dan icon
                    React.createElement('div', { 
                        className: 'kelas-header',
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: isMobile ? '12px' : '15px',
                            marginBottom: isMobile ? '15px' : '20px',
                            position: 'relative'
                        }
                    },
                        React.createElement('div', { 
                            className: 'kelas-icon',
                            style: {
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                background: kelas.color,
                                width: isMobile ? '50px' : '60px',
                                height: isMobile ? '50px' : '60px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: `0 4px 15px ${kelas.color}40`
                            }
                        }, kelas.icon),
                        React.createElement('div', { style: { flex: 1 } },
                            React.createElement('h2', { 
                                style: { 
                                    margin: 0,
                                    color: '#1e3c72',
                                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                                    fontWeight: '800'
                                } 
                            }, kelas.grade),
                            React.createElement('p', { 
                                style: { 
                                    margin: '5px 0 0 0',
                                    color: '#666',
                                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                                } 
                            }, `${kelas.building}`)
                        )
                    ),

                    // Informasi Wali Kelas
                    React.createElement('div', { 
                        className: 'wali-kelas-info',
                        style: {
                            background: '#f8f9fa',
                            padding: isMobile ? '12px' : '15px',
                            borderRadius: '8px',
                            marginBottom: isMobile ? '15px' : '20px'
                        }
                    },
                        React.createElement('div', { 
                            style: { 
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '6px'
                            } 
                        },
                            React.createElement('i', { 
                                className: 'fas fa-user',
                                style: { color: kelas.color, fontSize: isMobile ? '0.8rem' : '0.9rem' } 
                            }),
                            React.createElement('span', { 
                                style: { 
                                    fontWeight: '600',
                                    color: '#333',
                                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                                } 
                            }, 'Wali Kelas')
                        ),
                        React.createElement('p', { 
                            style: { 
                                margin: 0,
                                color: '#666',
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                fontWeight: '500'
                            } 
                        }, kelas.teacher)
                    ),

                    // Informasi Jumlah Siswa - UKURAN DISAMAKAN DENGAN FORMAT ANGKA DIATAS, KETERANGAN DIBAWAH
                    React.createElement('div', { 
                        className: 'kelas-info',
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: isMobile ? '15px' : '20px',
                            paddingBottom: isMobile ? '12px' : '15px',
                            borderBottom: '1px solid #f0f0f0',
                            gap: isMobile ? '5px' : '10px'
                        }
                    },
                        // Total Siswa
                        React.createElement('div', { 
                            className: 'info-item',
                            style: {
                                textAlign: 'center',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }
                        },
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '1.4rem' : '1.6rem', // UKURAN SAMA
                                    fontWeight: '700',
                                    color: kelas.color,
                                    marginBottom: isMobile ? '3px' : '5px',
                                    lineHeight: '1'
                                } 
                            }, kelas.students),
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                                    color: '#666',
                                    fontWeight: '500'
                                } 
                            }, 'Total Siswa')
                        ),
                        
                        // Laki-laki
                        React.createElement('div', { 
                            className: 'info-item',
                            style: {
                                textAlign: 'center',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }
                        },
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '1.4rem' : '1.6rem', // UKURAN SAMA
                                    fontWeight: '700',
                                    color: '#3498db',
                                    marginBottom: isMobile ? '3px' : '5px',
                                    lineHeight: '1'
                                } 
                            }, kelas.boys),
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                                    color: '#666',
                                    fontWeight: '500'
                                } 
                            }, 'Laki-laki')
                        ),
                        
                        // Perempuan
                        React.createElement('div', { 
                            className: 'info-item',
                            style: {
                                textAlign: 'center',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }
                        },
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '1.4rem' : '1.6rem', // UKURAN SAMA
                                    fontWeight: '700',
                                    color: '#e84393',
                                    marginBottom: isMobile ? '3px' : '5px',
                                    lineHeight: '1'
                                } 
                            }, kelas.girls),
                            React.createElement('div', { 
                                style: { 
                                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                                    color: '#666',
                                    fontWeight: '500'
                                } 
                            }, 'Perempuan')
                        )
                    ),

                    // Daftar Siswa dengan Highlight
                    React.createElement('div', { 
                        className: 'student-list',
                        style: {
                            flex: 1,
                            marginBottom: isMobile ? '12px' : '15px'
                        }
                    },
                        React.createElement('div', { 
                            style: { 
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                marginBottom: isMobile ? '8px' : '12px'
                            } 
                        },
                            React.createElement('i', { 
                                className: 'fas fa-users',
                                style: { color: kelas.color, fontSize: isMobile ? '0.8rem' : '0.9rem' } 
                            }),
                            React.createElement('h4', { 
                                style: { 
                                    margin: 0,
                                    color: '#333',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                    fontWeight: '600'
                                } 
                            }, 'Daftar Siswa')
                        ),
                        React.createElement('div', { 
                            className: 'student-names',
                            style: {
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                                gap: isMobile ? '6px' : '8px',
                                maxHeight: isMobile ? '120px' : '150px',
                                overflowY: 'auto',
                                paddingRight: '5px'
                            }
                        },
                            kelas.studentList.map((student, index) => {
                                const studentKey = student.replace(/\s+/g, '-').toLowerCase();
                                return React.createElement('div', {
                                    key: index,
                                    ref: el => studentRefs.current[studentKey] = el,
                                    style: {
                                        background: highlightedStudent === student ? '#fff3cd' : '#f8f9fa',
                                        padding: isMobile ? '5px 8px' : '6px 10px',
                                        borderRadius: '6px',
                                        fontSize: isMobile ? '0.75rem' : '0.8rem',
                                        color: highlightedStudent === student ? '#856404' : '#555',
                                        textAlign: 'center',
                                        border: highlightedStudent === student ? '2px solid #ffc107' : 'none',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    },
                                    onClick: () => {
                                        setHighlightedStudent(student);
                                        setTimeout(() => setHighlightedStudent(null), 2000);
                                    }
                                }, student)
                            })
                        )
                    ),
                    // Informasi Kontak
                    React.createElement('div', { 
                        className: 'contact-info',
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            paddingTop: '15px',
                            borderTop: '1px solid #f0f0f0'
                        }
                    },
                        React.createElement('i', { 
                            className: 'fas fa-envelope',
                            style: { color: kelas.color, fontSize: '0.8rem' } 
                        }),
                        React.createElement('span', { 
                            style: { 
                                fontSize: '0.8rem',
                                color: '#666'
                            } 
                        }, kelas.contact)
                    )
                )
            )
        ) : 
        
        // List View - Responsive
        React.createElement('div', { 
            className: 'kelas-list',
            style: {
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: isMobile ? '30px' : '40px',
                overflow: 'hidden'
            }
        },
            React.createElement('div', { 
                className: 'list-header',
                style: {
                    display: isMobile ? 'none' : 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr 1fr 1.5fr',
                    gap: '20px',
                    padding: isMobile ? '15px 20px' : '20px 30px',
                    background: '#1e3c72',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.8rem' : '0.9rem'
                }
            },
                React.createElement('div', null, 'Kelas'),
                React.createElement('div', null, 'Wali Kelas'),
                React.createElement('div', null, 'Ruangan'),
                React.createElement('div', null, 'Siswa'),
                React.createElement('div', null, 'Email Kontak')
            ),
            filteredKelasData.map((kelas) =>
                React.createElement('div', {
                    key: kelas.id,
                    className: 'list-item',
                    style: {
                        display: isMobile ? 'block' : 'grid',
                        gridTemplateColumns: '1fr 2fr 1fr 1fr 1.5fr',
                        gap: '20px',
                        padding: isMobile ? '15px 20px' : '20px 30px',
                        borderBottom: '1px solid #f0f0f0',
                        transition: 'all 0.3s ease'
                    },
                    onMouseEnter: (e) => {
                        if (!isMobile) {
                            e.currentTarget.style.background = '#f8f9fa';
                        }
                    },
                    onMouseLeave: (e) => {
                        if (!isMobile) {
                            e.currentTarget.style.background = 'white';
                        }
                    }
                },
                    isMobile ? 
                    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                        React.createElement('div', { 
                            style: { 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px',
                                fontWeight: '600',
                                color: '#1e3c72',
                                marginBottom: '5px'
                            } 
                        },
                            React.createElement('div', { 
                                style: { 
                                    background: kelas.color,
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1rem'
                                } 
                            }, kelas.icon),
                            React.createElement('span', { style: { fontSize: '1rem' } }, kelas.grade)
                        ),
                        React.createElement('div', { style: { fontSize: '0.85rem', color: '#666' } },
                            React.createElement('strong', null, 'Wali: '), kelas.teacher
                        ),
                        React.createElement('div', { style: { fontSize: '0.85rem', color: '#666' } },
                            React.createElement('strong', null, 'Ruangan: '), kelas.building
                        ),
                        React.createElement('div', { style: { fontSize: '0.85rem', color: kelas.color, fontWeight: '600' } },
                            React.createElement('strong', null, 'Siswa: '), `${kelas.students} siswa`
                        ),
                        React.createElement('div', { style: { fontSize: '0.8rem', color: '#666' } },
                            React.createElement('strong', null, 'Email: '), kelas.contact
                        )
                    )
                    :
                    React.createElement(React.Fragment, null,
                        React.createElement('div', { 
                            style: { 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px',
                                fontWeight: '600',
                                color: '#1e3c72'
                            } 
                        },
                            React.createElement('div', { 
                                style: { 
                                    background: kelas.color,
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.2rem'
                                } 
                            }, kelas.icon),
                            React.createElement('span', null, kelas.grade)
                        ),
                        React.createElement('div', null, kelas.teacher),
                        React.createElement('div', null, kelas.building),
                        React.createElement('div', { 
                            style: { 
                                color: kelas.color,
                                fontWeight: '600'
                            } 
                        }, `${kelas.students} siswa`),
                        React.createElement('div', { 
                            style: { 
                                color: '#666',
                                fontSize: '0.85rem'
                            } 
                        }, kelas.contact)
                    )
                )
            )
        ),

        // Empty State
        filteredKelasData.length === 0 &&
        React.createElement('div', { 
            className: 'empty-state',
            style: {
                textAlign: 'center',
                padding: isMobile ? '40px 20px' : '60px 20px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }
        },
            React.createElement('div', { 
                style: { 
                    fontSize: isMobile ? '3rem' : '4rem',
                    marginBottom: isMobile ? '15px' : '20px',
                    opacity: 0.5
                } 
            }, '🔍'),
            React.createElement('h3', { 
                style: { 
                    margin: '0 0 10px 0',
                    color: '#333',
                    fontSize: isMobile ? '1.2rem' : '1.5rem'
                } 
            }, 'Tidak ada kelas ditemukan'),
            React.createElement('p', { 
                style: { 
                    margin: 0,
                    color: '#666',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                } 
            }, 'Coba ubah kata kunci pencarian atau filter yang digunakan')
        ),
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.KelasContent = KelasContent;
console.log('KelasContent dengan 324 siswa - Mobile Responsive & Auto Scroll loaded and registered to window');