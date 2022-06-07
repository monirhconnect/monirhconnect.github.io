const themeStylesheet = document.querySelector('#theme-link');
const storedTheme = localStorage.getItem('theme-stored');

if (storedTheme) {
    themeStylesheet.href = storedTheme;
}

const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', function() {
    // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
        themeStylesheet.href = 'css/dark-theme.css';
        themeToggle.textContent = 'Switch to light mode';
    } else {
        // if it's dark -> go light
        themeStylesheet.href = 'css/light-theme.css';
        
        themeToggle.textContent = 'Switch to dark mode';
    }
    // save the preference to localStorage
    localStorage.setItem('theme-stored', themeStylesheet.href);
})

if (storedTheme.includes('light')) {
    themeToggle.innerText = 'Switch to dark mode';
} else {
    themeToggle.innerText = 'Switch to light mode';
}


const header = document.querySelector('header');
const headerHeight = '150px';
header.style.padditngBottom = '100vh' ;