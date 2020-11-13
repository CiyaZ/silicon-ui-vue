import {createApp} from 'vue'
import App from './App.vue'
import SiliconUI from '../src/index'

const app = createApp(App);

app.use(SiliconUI);
app.config.productionTip = false;

app.mount('#app');
