const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const localStorage = window.localStorage;
const refSwitchThemeToggler = document.getElementById('theme-switch-toggle');
const body = document.body;



export const getLocalStorageTheme = () => {
    if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === 'LIGHT') {
        body.classList = Theme.LIGHT;
    } else {
        body.classList = Theme.DARK;
        refSwitchThemeToggler.checked = true;
    }
};

function themeCheckBoxHandler(event) {
    // console.log(event.target.checked);
    if (event.target.checked === false) {
        body.classList = Theme.LIGHT;
        localStorage.setItem('theme', 'LIGHT');
    } else {
        body.classList = Theme.DARK;
        localStorage.setItem('theme', 'DARK');
    }
}

refSwitchThemeToggler.addEventListener('change', themeCheckBoxHandler);