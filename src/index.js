import Test from './test';
import Button from './button';
import Icon from './icon';
import Grid from './grid';
import Backtop from './backtop';
import Breadcrumb from './breadcrumb';
import ContextMenu from './context-menu';
import Tab from './tab';
import Container from './container';
import Loading from './loading';
import Card from './card';
import Tag from './tag';
import Header from './header';
import Message from './message';
import Collapse from './collapse';
import Progress from './progress';
import Form from './form';
import Input from './input';
import Textarea from './textarea';
import Search from './search';
import Select from './select';
import Radio from './radio';
import Checkbox from './checkbox';
import Layer from './layer';
import Carousel from './carousel';
import Step from './step';

import './styles/global.css';
import './styles/palette.css';
import './styles/iconfont.css';
import './styles/animation.css';

const components = [
    Test,
    Button,
    Icon,
    Grid,
    Backtop,
    Breadcrumb,
    ContextMenu,
    Tab,
    Container,
    Loading,
    Card,
    Tag,
    Header,
    Message,
    Collapse,
    Progress,
    Form,
    Input,
    Textarea,
    Search,
    Select,
    Radio,
    Checkbox,
    Layer,
    Carousel,
    Step,
];

export default {
    install: (app) => {
        components.map(component => {
            app.use(component);
        });
    }
};
