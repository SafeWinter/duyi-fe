import MyButton from './components/MyButton.js';
import MyTitle from './components/MyTitle.js';

export default {
    components: {
        MyButton,
        MyTitle
    },
    template: `
    <div>
        <my-title text="标题1"></my-title>
        <my-title text="标题2"></my-title>
        <my-title text="标题3"></my-title>
        <MyButton />
    </div>
    `
}