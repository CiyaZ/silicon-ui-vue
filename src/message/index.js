import Message from './src/Message.vue';
import Toast from './src/Toast.vue';
import Notify from './src/Notify.vue';

export default app => {
    app.component(Message.name, Message);
    app.component(Toast.name, Toast);
    app.component(Notify.name, Notify);
};
