const LokasiContent = () => {
    // Koordinat Placeholder untuk SDN Sampangan 01, Semarang
    const latitude = -7.0145; 
    const longitude = 110.4078;
    const schoolName = "SDN SAMPANGAN 01";
    
    // URL Google Maps dengan query yang sudah ditentukan
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${schoolName},${latitude},${longitude}`;

    useEffect(() => {
        // Tentukan target pembukaan: _self (tab saat ini) atau _blank (tab baru)
        // Ambang batas 768px sering digunakan untuk memisahkan tampilan desktop dan mobile.
        const target = window.innerWidth > 768 ? '_self' : '_blank';
        
        // 1. Langsung membuka Maps menggunakan target yang ditentukan
        window.open(mapsUrl, target); 
        
        // 2. Langsung kembali ke halaman utama (Beranda)
        // Dispatch custom event untuk navigasi di dashboard React.
        // Tindakan ini akan memuat kembali komponen 'beranda' di div konten utama.
        const navigateEvent = new CustomEvent('navigateTo', { detail: 'beranda' });
        window.dispatchEvent(navigateEvent);
        
        // Tidak ada cleanup yang diperlukan.
    }, [mapsUrl]);

    // Mengembalikan null agar tidak ada tampilan yang muncul sebentar di layar utama.
    return null;
};
// Register ke window object agar bisa diakses oleh dashboard
window.LokasiContent = LokasiContent;
console.log('LokasiContent loaded and registered to window');