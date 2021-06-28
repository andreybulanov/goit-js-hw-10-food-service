import refs from "../js/refs";


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT);

if (refs.body.classList.value === Theme.DARK) {
    refs.inputCheckbox.checked = true;
}

const checkedTheme = evt => {
    if (evt.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
        return;
    }
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
};

refs.inputCheckbox.addEventListener('change', checkedTheme);