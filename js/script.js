const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu')

// ketika diklik
hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active')
}

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove('active')
})