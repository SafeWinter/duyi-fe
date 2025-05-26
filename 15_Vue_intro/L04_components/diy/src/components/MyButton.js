export default {
    name: 'MyButton',
    data() {
        return {
            count: 0
        }
    },
    template: `<button @click="count++">{{count}}</button>`,
}