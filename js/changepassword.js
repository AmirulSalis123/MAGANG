document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('changePasswordForm');
    const backButton = document.getElementById('backButton');
    const oldPasswordInput = document.getElementById('oldPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Mengarahkan kembali ke dashboard (index.html)
    backButton.addEventListener('click', function() {
        // Asumsi halaman utama dashboard adalah index.html
        window.location.href = 'index.html'; 
    });

    // Fungsi untuk menampilkan/menyembunyikan password
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            
            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                this.classList.remove('fa-ey-slash');
                this.classList.add('fa-eye');
            } else {
                targetInput.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

    // Event handler untuk submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset pesan
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
        
        let hasError = false;

        const oldPass = oldPasswordInput.value.trim();
        const newPass = newPasswordInput.value.trim();
        const confirmPass = confirmPasswordInput.value.trim();

        // 1. Validasi Kolom Kosong
        if (!oldPass || !newPass || !confirmPass) {
            errorMessage.textContent = 'Semua kolom wajib diisi.';
            errorMessage.style.display = 'block';
            hasError = true;
        }

        // 2. Validasi Panjang Password Baru
        if (!hasError && newPass.length < 6) {
             errorMessage.textContent = 'Password baru minimal harus 6 karakter.';
             errorMessage.style.display = 'block';
             hasError = true;
        }

        // 3. Validasi Kesamaan Password Baru dan Konfirmasi
        if (!hasError && newPass !== confirmPass) {
            errorMessage.textContent = 'Password baru dan konfirmasi password tidak sama.';
            errorMessage.style.display = 'block';
            hasError = true;
        }

        // 4. Validasi Password Lama dan Baru Berbeda
        if (!hasError && oldPass === newPass) {
             errorMessage.textContent = 'Password baru tidak boleh sama dengan password lama.';
             errorMessage.style.display = 'block';
             hasError = true;
        }
        
        if (hasError) {
            return;
        }
        
        // Mulai simulasi proses ganti password
        submitBtn.disabled = true;
        submitBtn.textContent = 'Memproses...';
        
        // Simulasi API call ke server (2 detik)
        setTimeout(function() {
            // Dalam implementasi nyata, di sini akan ada AJAX call ke API
            
            // Contoh: Anggap perubahan password berhasil
            successMessage.textContent = 'Password Anda berhasil diganti! Anda akan diarahkan ke halaman login.';
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
            
            // Reset tombol
            submitBtn.disabled = false;
            submitBtn.textContent = 'Ganti Password';

            // Opsional: Redirect ke halaman login setelah sukses
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000); 

        }, 2000); 
    });
});