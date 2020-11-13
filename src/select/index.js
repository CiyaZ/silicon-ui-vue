import Select from './src/Select.vue';
import SelectItem from './src/SelectItem.vue';

export default app => {
    app.component(Select.name, Select);
    app.component(SelectItem.name, SelectItem);
};
