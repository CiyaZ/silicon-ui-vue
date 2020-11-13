import ContextMenu from './src/ContextMenu.vue'
import MenuItem from './src/MenuItem.vue';

export default app => {
    app.component(ContextMenu.name, ContextMenu);
    app.component(MenuItem.name, MenuItem);
};
