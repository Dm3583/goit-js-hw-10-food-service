const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const localStorage = window.localStorage;
const refSwitchThemeToggler = document.getElementById('theme-switch-toggle');
const body = document.body;



export const getLocalStorageTheme = () => {
    if (localStorage.getItem('theme') === Theme.DARK) {
        body.classList = Theme.DARK;
        refSwitchThemeToggler.checked = true;
    } else {
        body.classList = Theme.LIGHT;
    }
};

function themeCheckBoxHandler(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
        body.classList = Theme.DARK;
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList = Theme.LIGHT;
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

refSwitchThemeToggler.addEventListener('change', themeCheckBoxHandler);