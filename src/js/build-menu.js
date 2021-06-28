import refs from "../js/refs";
import menu from '../data/menu.json';
import menuListTemplate from "../template/menuListTemplate.hbs";

const buildMenu = () => {
    refs.menuList.insertAdjacentHTML('beforeend', menuListTemplate(menu));
}

export default buildMenu();