// --- Komponen Modal untuk Tampilan Detail ---
const PhotoModal = ({ photo, onClose }) => {
    if (!photo) return null;

    return React.createElement(
        "div",
        {
            className: "photo-modal-backdrop",
            onClick: onClose,
        },
        React.createElement(
            "div",
            {
                className: "photo-modal-content",
                onClick: e => e.stopPropagation(),
            },
            // Tombol Tutup
            React.createElement(
                "button",
                {
                    onClick: onClose,
                    className: "modal-close-btn"
                },
                "×"
            ),
            // Gambar Utama
            React.createElement(
                "img",
                {
                    src: photo.imageUrl,
                    alt: photo.title,
                    className: "modal-image"
                }
            ),
            // Detail Foto (Judul dan Konteks) - DIBUAT LEBIH SEMPIT
            React.createElement(
                "div",
                {
                    className: "photo-details"
                },
                React.createElement("h3", { className: "photo-title" }, photo.title),
                photo.context &&
                React.createElement("p", { className: "photo-context" }, photo.context)
            )
        )
    );
};

// --- Komponen Utama yang Dimodifikasi ---
const GaleriContent = () => {
    // Menggunakan hook useState untuk mengelola state
    const [selectedPhoto, setSelectedPhoto] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 20;

    // Data foto
    const photoGridData = [
        {
            title: "Kegiatan Santunan Anak Yatim",
            context: "Kegiatan Santunan Anak Yatim di SDN Sampangan 01 pada tanggal 28 Juli 2023",
            imageUrl: "imgs/foto1.png",
        },
        {
            title: "Pelepasan Siswa-Siswi di Kampung Dolanan Magelang",
            context: "Pelepasan Siswa-Siswi di Kampung Dolanan Magelang, anak-anak diajak bermain angklung oleh pemilik Kampung Dolanan pada tanggal 27 Mei 2023",
            imageUrl: "imgs/foto2.png",
        },
        {
            title: "Pelepasan Siswa SDN Sampangan 01",
            context: "Kegiatan Pelesapasan Siswa Siswi Kelas VI di Kampung Dolanan Magelang",
            imageUrl: "imgs/foto3.png",
        },
        {
            title: "Sosialisasi Anti Korupsi",
            context: "Sosialisasi Anti Korupsi dari Mahasiswa UNNES di SDN SAMPANGAN 01",
            imageUrl: "imgs/foto4.png",
        },
        {
            title: "Gelar Karya P5",
            context: "Dokumentasi Gelar Karya Proyek Penguatan Profil Pelajar Pancasila",
            imageUrl: "imgs/foto5.png",
        },
        {
            title: "LOMBA FLS2N",
            context: "Ananda Eben Heazer melaksanakan Lomba FLS2N cabang Kriya anyam tingkat kota. Setelah menjuari FLS2N tingkat kecamatan pada tanggal 8 Maret 2023",
            imageUrl: "imgs/foto6.png",
        },
        {
            title: "PENERJUNAN PPL PPG",
            context: "SDN Sampangan 01 menerima 4 Mahasiswa PPL PPG Gelombang 1 dari Kampus UNNES yang akan melaksanakan PPL selama 3 bulan, mulai 13 Maret hingga 16 Juni 2023.",
            imageUrl: "imgs/foto7.png",
        },
        {
            title: "BIAS DT TD",
            context: "Kegiatan BIAS DT TD di SDN SAMPANGAN 01 pada tanggal 11 November 2022",
            imageUrl: "imgs/foto8.png",
        },
        {
            title: "Penanaman Tanaman Toga",
            context: "Penanaman tanaman toga di SDN Sampangan 01 melibatkan siswa kelas 1 dan 4 yang memanfaatkan lahan kosong sekolah untuk belajar bercocok tanam dan mengenal tanaman obat.",
            imageUrl: "imgs/foto9.png",
        },
        {
            title: "Urban Farming",
            context: "Gerakan menanam, kerja bakti masal, dan urban farming di SDN Sampangan 01 meliputi penanaman 5 tanaman penghijauan, 150 bibit tanaman urban farming seperti tomat, cabai, terong, dan 75 ekor bibit ikan nila.",
            imageUrl: "imgs/foto10.png",
        },
        {
            title: "Isra Mi'raj",
            context: "Kegiatan Isra Mi'raj di SDN Sampangan 01 pada tanggal 24 Februari 2023",
            imageUrl: "imgs/foto11.png",
        },
        {
            title: "Pemeriksaan THT",
            context: "Puskesmas Pegandan melakukan pemeriksaan THT di SDN Sampangan 01 pada tanggal 18 Mei 2022.",
            imageUrl: "imgs/foto12.png",
        },
    ];

    // Fungsi untuk menangani klik pada kartu foto
    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    // Fungsi untuk menangani perubahan halaman
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    // Fungsi untuk mendapatkan angka pagination yang akan ditampilkan
    const getPaginationNumbers = () => {
        const numbers = [];
        
        if (currentPage <= 4) {
            // Tampilkan 1-5 + ellipsis + 20
            for (let i = 1; i <= 5; i++) {
                numbers.push(i);
            }
            numbers.push('ellipsis');
            numbers.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            // Tampilkan 1 + ellipsis + (totalPages-4) sampai totalPages
            numbers.push(1);
            numbers.push('ellipsis');
            for (let i = totalPages - 4; i <= totalPages; i++) {
                numbers.push(i);
            }
        } else {
            // Tampilkan 1 + ellipsis + (currentPage-1) sampai (currentPage+1) + ellipsis + 20
            numbers.push(1);
            numbers.push('ellipsis');
            numbers.push(currentPage - 1);
            numbers.push(currentPage);
            numbers.push(currentPage + 1);
            numbers.push('ellipsis');
            numbers.push(totalPages);
        }
        
        return numbers;
    };

    // Fungsi untuk membuat elemen kartu foto
    const createPhotoCard = (photo, index) => {
        return React.createElement(
            "div",
            {
                key: index,
                className: "photo-card-item",
                onClick: () => handlePhotoClick(photo),
            },
            // Gambar Thumbnail Persegi
            React.createElement(
                "div",
                {
                    className: "photo-thumbnail-container"
                },
                React.createElement(
                    "img",
                    {
                        src: photo.imageUrl,
                        alt: photo.title,
                        className: "photo-thumbnail",
                        onError: (e) => {
                            e.target.src = "https://via.placeholder.com/300x300/cccccc/666666?text=Gambar+Tidak+Tersedia";
                        }
                    }
                )
            ),
            // Div untuk teks merah di bagian bawah
            React.createElement(
                "div",
                {
                    className: "photo-title-bar",
                },
                React.createElement("p", { className: "photo-card-title" }, photo.title)
            )
        );
    };

    // Fungsi untuk membuat elemen pagination number
    const createPaginationNumber = (number, isActive = false) => {
        return React.createElement(
            "a",
            {
                href: "#",
                className: `pagination-number ${isActive ? 'active' : ''}`,
                onClick: (e) => {
                    e.preventDefault();
                    handlePageChange(number);
                }
            },
            number
        );
    };

    // Fungsi untuk membuat elemen pagination ellipsis
    const createPaginationEllipsis = () => {
        return React.createElement(
            "span",
            {
                className: "pagination-ellipsis"
            },
            "⋯⋯"
        );
    };

    // Fungsi untuk membuat tombol panah kiri
    const createPaginationArrowLeft = () => {
        const isDisabled = currentPage === 1;
        return React.createElement(
            "button",
            {
                className: `pagination-arrow pagination-arrow-left ${isDisabled ? 'disabled' : ''}`,
                onClick: () => !isDisabled && handlePageChange(currentPage - 1),
                disabled: isDisabled
            },
            "‹" // Panah kiri
        );
    };

    // Fungsi untuk membuat tombol panah kanan
    const createPaginationArrowRight = () => {
        const isDisabled = currentPage === totalPages;
        return React.createElement(
            "button",
            {
                className: `pagination-arrow pagination-arrow-right ${isDisabled ? 'disabled' : ''}`,
                onClick: () => !isDisabled && handlePageChange(currentPage + 1),
                disabled: isDisabled
            },
            "›" // Panah kanan
        );
    };

    // Fungsi untuk membuat elemen pagination berdasarkan state currentPage
    const createPaginationElements = () => {
        const paginationNumbers = getPaginationNumbers();
        const elements = [];
        
        // Tambah panah kiri
        elements.push(createPaginationArrowLeft());
        
        // Loop melalui angka pagination
        paginationNumbers.forEach((item, index) => {
            if (item === 'ellipsis') {
                elements.push(createPaginationEllipsis());
            } else {
                elements.push(createPaginationNumber(item, item === currentPage));
            }
        });
        
        // Tambah panah kanan
        elements.push(createPaginationArrowRight());
        
        return elements;
    };

    return React.createElement(
        "div",
        { className: "foto-content-container" },
        
        // 1. Bagian Header "Gallery" - DIUBAH MENJADI LEBIH CANTIK
        React.createElement(
            "div",
            { className: "gallery-header" },
            React.createElement(
                "div",
                { className: "gallery-title-container" },
                React.createElement(
                    "h2",
                    { className: "gallery-main-title" },
                    "DOKUMENTASI"
                ),
                React.createElement(
                    "div",
                    { className: "gallery-divider" }
                )
            )
        ),

        // 2. Grid Foto
        React.createElement(
            "div",
            {
                className: "photo-grid",
            },
            photoGridData.map(createPhotoCard)
        ),

        // 3. Bagian Pagination di bawah - DINAMIS BERDASARKAN CURRENT PAGE
        React.createElement(
            "div",
            { className: "gallery-pagination" },
            React.createElement(
                "div",
                { className: "pagination-container" },
                ...createPaginationElements()
            )
        ),

        // 4. Modal Tampilan Detail (hanya muncul jika selectedPhoto tidak null)
        React.createElement(PhotoModal, {
            photo: selectedPhoto,
            onClose: () => setSelectedPhoto(null),
        })
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.GaleriContent = GaleriContent;
console.log("GaleriContent loaded with beautiful gallery header");
