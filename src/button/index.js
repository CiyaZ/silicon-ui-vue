import Button from './src/Button.vue';
import ButtonGroup from './src/ButtonGroup';

export default app => {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
};
