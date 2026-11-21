function updateThemeIcon() {
    const button = document.getElementById('theme');

    if (!button) return false;

    const isDark = document.body.classList.contains('dark-theme');

    button.innerHTML = isDark
        ? '<img src="/icon/sun.svg">'
        : '<img src="/icon/moon.svg">';

    return true;
}

function theme() {
    document.body.classList.toggle('dark-theme');

    const currentTheme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light';

    localStorage.setItem('theme', currentTheme);

    updateThemeIcon();
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    document.body.classList.toggle('dark-theme', savedTheme === 'dark');

    if (updateThemeIcon()) return;

    const observer = new MutationObserver(() => {
        if (updateThemeIcon()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});