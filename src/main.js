import './assets/common.css';
import './assets/index.css';
import 'bulma/css/bulma.css';
import 'hover.css/css/hover.css';
// import 'animate.css/animate.css';
import'@fortawesome/fontawesome-free/css/all.min.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
