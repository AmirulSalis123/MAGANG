document.addEventListener('DOMContentLoaded', function() {
    // Tombol kembali ke halaman login
    document.getElementById('backButton').addEventListener('click', function() {
        // Mengganti 'login.html' dengan path yang sesuai jika berbeda
        window.location.href = 'login.html'; 
    });

    // Validasi form lupa password
    document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userType = document.querySelector('input[name="userType"]:checked');
        const email = document.getElementById('email').value.trim();
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const userTypeError = document.getElementById('userTypeError');
        const submitBtn = document.getElementById('submitBtn');
        
        // Reset pesan
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
        userTypeError.style.display = 'none';
        
        let hasError = false;
        
        // Validasi jenis pengguna
        if (!userType) {
            userTypeError.style.display = 'block';
            hasError = true;
        }
        
        // Validasi email
        if (!email) {
            errorMessage.textContent = 'Harap masukkan email yang terdaftar!';
            errorMessage.style.display = 'block';
            hasError = true;
        } else {
            // Validasi format email sederhana
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.textContent = 'Format email tidak valid!';
                errorMessage.style.display = 'block';
                hasError = true;
            }
        }
        
        if (hasError) {
            return;
        }
        
        // Mulai simulasi pengiriman permintaan reset password
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';
        
        // Simulasi delay pengiriman (2 detik)
        setTimeout(function() {
            // Logika server side di sini (misalnya, mengirim email)
            
            // Tampilkan pesan sukses
            successMessage.textContent = `Link reset password telah dikirim ke ${email} untuk ${userType.value === 'student' ? 'Student' : 'Parent'}. Silakan periksa email Anda.`;
            successMessage.style.display = 'block';
            
            // Reset form
            document.getElementById('forgotPasswordForm').reset();
            
            // Reset tombol
            submitBtn.disabled = false;
            submitBtn.textContent = 'Kirimkan';
            
        }, 2000); // Delay 2000 milidetik (2 detik)
    });

    // Event listener untuk menghilangkan error jenis pengguna saat dipilih
    const radioOptions = document.querySelectorAll('input[name="userType"]');
    radioOptions.forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('userTypeError').style.display = 'none';
        });
    });
});