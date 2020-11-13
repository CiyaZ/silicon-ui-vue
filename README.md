# silicon-ui-vue

## 使用方式

全局引入：
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import SiliconUI from 'silicon-ui-vue';
import 'silicon-ui-vue/dist/silicon-ui-vue.css';

const app = createApp(App);
app.use(SiliconUI);
app.mount('#app');
```
