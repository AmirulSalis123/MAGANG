const PengaduanContent = () => {
    const [formData, setFormData] = React.useState({
        nama: '',
        surel: '',
        nomorKontak: '',
        deskripsi: ''
    });

    const [submitted, setSubmitted] = React.useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulasi pengiriman data
        console.log('Data pengaduan:', formData);
        setSubmitted(true);
        // Reset form
        setFormData({
            nama: '',
            surel: '',
            nomorKontak: '',
            deskripsi: ''
        });
    };

    const resetForm = () => {
        setSubmitted(false);
    };

    return React.createElement('div', { className: 'pengaduan-content' },
        React.createElement('div', { className: 'content-header' },
            React.createElement('h1', null, 'Untuk Pengaduan bisa dilakukan dengan mengisi FORM di bawah ini :')
        ),

        submitted ? 
            // TAMPILAN SETELAH SUBMIT
            React.createElement('div', { className: 'success-message' },
                React.createElement('div', { className: 'success-icon' }, '✅'),
                React.createElement('h2', null, 'Pengaduan Berhasil Dikirim!'),
                React.createElement('p', null, 
                    'Terima kasih telah menyampaikan pengaduan Anda. Kami akan menindaklanjuti ' +
                    'dalam waktu 1x24 jam kerja.'
                ),
                React.createElement('button', {
                    className: 'btn-primary',
                    onClick: resetForm
                }, 'Kirim Pengaduan Lain')
            )
        :
        // FORM PENGAJUAN - SESUAI GAMBAR
        React.createElement('form', { 
            className: 'pengaduan-form',
            onSubmit: handleSubmit
        },
            // ROW 1: NAMA
            React.createElement('div', { className: 'form-row' },
                React.createElement('div', { className: 'form-label' }, 'Nama'),
                React.createElement('div', { className: 'form-input' },
                    React.createElement('input', {
                        type: 'text',
                        required: true,
                        value: formData.nama,
                        onChange: (e) => handleInputChange('nama', e.target.value),
                        placeholder: 'Memasukkan Nama Anda'
                    })
                )
            ),

            // ROW 2: SUREL
            React.createElement('div', { className: 'form-row' },
                React.createElement('div', { className: 'form-label' }, 'Email'),
                React.createElement('div', { className: 'form-input' },
                    React.createElement('input', {
                        type: 'email',
                        value: formData.surel,
                        onChange: (e) => handleInputChange('surel', e.target.value),
                        placeholder: 'Memasukkan Email Anda'
                    })
                )
            ),

            // ROW 3: NOMOR KONTAK
            React.createElement('div', { className: 'form-row' },
                React.createElement('div', { className: 'form-label' }, 'Nomor kontak'),
                React.createElement('div', { className: 'form-input' },
                    React.createElement('input', {
                        type: 'tel',
                        value: formData.nomorKontak,
                        onChange: (e) => handleInputChange('nomorKontak', e.target.value),
                        placeholder: 'Memasukkan Nomor telepon'
                    })
                )
            ),

            // ROW 4: DESKRIPSI
            React.createElement('div', { className: 'form-row' },
                React.createElement('div', { className: 'form-label' }, 'Deskripsi'),
                React.createElement('div', { className: 'form-input' },
                    React.createElement('textarea', {
                        required: true,
                        rows: 4,
                        value: formData.deskripsi,
                        onChange: (e) => handleInputChange('deskripsi', e.target.value),
                        placeholder: 'Memasukkan Deskripsi'
                    })
                )
            ),

            // SUBMIT BUTTON
            React.createElement('div', { className: 'form-row' },
                React.createElement('div', { className: 'form-label' }), // Kolom kosong
                React.createElement('div', { className: 'form-input' },
                    React.createElement('button', {
                        type: 'submit',
                        className: 'submit-btn'
                    }, 'Submit')
                )
            )
        )
    );
};

// Register ke window object agar bisa diakses oleh dashboard
window.PengaduanContent = PengaduanContent;
console.log('PengaduanContent loaded and registered to window');