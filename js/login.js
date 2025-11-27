// Dapatkan elemen-elemen yang diperlukan
const passwordToggle = document.getElementById('passwordToggle');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const usernameInput = document.getElementById('username');
const passwordInputField = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginForm = document.getElementById('loginForm');
const backButton = document.getElementById('backButton');
const forgotPasswordLink = document.querySelector('.forgot-password');

// --- Fungsi Global ---

// Fungsi untuk toggle password visibility
passwordToggle.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Ganti icon mata
    const icon = this.querySelector('i');
    if (type === 'password') {
        icon.className = 'fas fa-eye-slash';
    } else {
        icon.className = 'fas fa-eye';
    }
});

// Fungsi untuk validasi login ADMIN
function validateLogin(username, password) {
    // Hanya admin yang bisa login dengan username dan password
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin123';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        return { success: true, userType: 'admin' };
    } else {
        return { success: false, message: 'Username atau password salah!' };
    }
}


// --- Event Listeners ---

// Tombol kembali ke dashboard (akses user tanpa login)
backButton.addEventListener('click', function() {
    // Set status login sebagai user biasa (guest) untuk akses dashboard
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', 'guest');
    localStorage.setItem('userType', 'guest');
    window.location.href = 'index.html'; // Ganti dengan halaman dashboard utama
});


// Cek jika ada data "Ingatkan Saya" yang disimpan di localStorage saat halaman dimuat
window.addEventListener('DOMContentLoaded', function() {
    // Cek jika sudah login, redirect ke dashboard
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true' && localStorage.getItem('userType') !== 'guest') {
        window.location.href = 'index.html'; // Ganti dengan halaman dashboard utama
    }

    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMe = localStorage.getItem('rememberMe');

    if (rememberMe === 'true' && savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        passwordInputField.value = savedPassword;
        rememberCheckbox.checked = true;
    }
});

// Penanganan submit form login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInputField.value;
    const rememberMe = rememberCheckbox.checked;
    
    // Reset error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
    
    if (!username || !password) {
        errorMessage.textContent = 'Harap isi nama pengguna dan password!';
        errorMessage.style.display = 'block';
        return;
    }
    
    const validationResult = validateLogin(username, password);
    
    if (validationResult.success) {
        // Simpan status login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('userType', validationResult.userType);
        
        // Simpan data jika "Ingatkan Saya" dicentang
        if (rememberMe) {
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password); 
            localStorage.setItem('rememberMe', 'true');
        } else {
            // Hapus data jika tidak dicentang
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
            localStorage.removeItem('rememberMe');
        }
        
        // Redirect ke halaman index.html
        window.location.href = 'index.html'; // Ganti dengan halaman dashboard
    } else {
        errorMessage.textContent = validationResult.message || 'Username atau password salah!';
        errorMessage.style.display = 'block';
    }
});

// Link lupa password
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'forgotpassword.html'; // Ganti dengan halaman lupa password yang sebenarnya
});

// Clear saved data jika user manually menghapus input dan "Ingatkan Saya" tercentang
function clearSavedDataIfEmpty(inputElement) {
    if (!inputElement.value && rememberCheckbox.checked) {
        rememberCheckbox.checked = false;
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        localStorage.removeItem('rememberMe');
    }
}

usernameInput.addEventListener('input', function() {
    clearSavedDataIfEmpty(this);
});

passwordInputField.addEventListener('input', function() {
    clearSavedDataIfEmpty(this);
});