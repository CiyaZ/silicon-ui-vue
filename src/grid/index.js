import Row from './src/Row.vue';
import Col from './src/Col.vue';

export default app => {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
};