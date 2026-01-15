document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});

// Modal Elements
const modal = document.getElementById('auth-modal');

function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal if clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Login Logic
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value;

    if (username) {
        // Save to localStorage
        localStorage.setItem('thinkbot_user', username);

        // Update UI
        updateUI(username);

        // Close modal and reset form
        closeModal();
        usernameInput.value = '';
    }
}

function logout() {
    localStorage.removeItem('thinkbot_user');
    updateUI(null);
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('thinkbot_user');
    updateUI(savedUser);
}

function updateUI(username) {
    const authButtons = document.getElementById('auth-buttons');
    const userDisplay = document.getElementById('user-display');
    const usernameDisplay = document.getElementById('username-display');

    if (username) {
        // User is logged in
        authButtons.style.display = 'none';
        userDisplay.style.display = 'flex';
        usernameDisplay.textContent = username;
    } else {
        // User is logged out
        authButtons.style.display = 'flex';
        userDisplay.style.display = 'none';
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
