import './styles.css';
import menu from "./data/menu.json";
import menuCardTemplate from "./templates-hbs/food-card-markup.hbs";
import { getLocalStorageTheme } from "./js/change-theme";


const refMenuList = document.querySelector('.js-menu');
const menuMarkup = menuCardTemplate(menu);


refMenuList.insertAdjacentHTML('afterbegin', menuMarkup);


getLocalStorageTheme();
// console.dir(test());