function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    if (user === CREDENTIALS.user && pass === CREDENTIALS.pass) {
        sessionStorage.setItem('atqsg_logged', 'true');
        window.location.href = 'Index.html';
    } else {
        document.getElementById('errorMsg').classList.remove('hidden');
    }
}

window.onload = function () {
    // If already logged in, redirect to index
    if (sessionStorage.getItem('atqsg_logged') === 'true') {
        window.location.href = 'Index.html';
    }

    document.getElementById('loginPass').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') login();
    });
};
