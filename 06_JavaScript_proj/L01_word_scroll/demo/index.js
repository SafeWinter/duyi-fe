const data = [
    {text: '把大象装冰箱总共分几步？'},
    {text: '1. 邓哥打开冰箱门'},
    {text: '2. 邓哥把大象放进去'},
    {text: '3. 邓哥关上冰箱门'}
];

const {stop, start} = (function(data){
    
    // 定义列表渲染函数
    const render = (dom, data) => {
        dom.innerHTML = data
            .concat(data[0])
            .map(({text}) => `<li>${text}</li>`)
            .join('');
    };
    
    // 定义一个用于存储文字滚动的定时器 ID 的变量
    let outer = null;

    // 定义文字滚动的默认配置项
    const options = {
        step1: 24,
        frames: 50,
        timeout1: 2000,
        timeout2: 500,
    };

    /**
     * 通过 HOF 创建一个文字滚动函数
     * 
     * @param {object} options 文字滚动的配置项
     * @param {number} options.frames 滚动的帧数（如：50(帧)）
     * @param {number} options.step1 外围列表项滚动的步长（即单行高度，如：24(px)）
     * @param {number} options.timeout1 外围列表项滚动的时间间隔（）
     * @param {number} options.timeout2 内部列表项滚动的时间间隔
     * @returns {function} 滚动函数，接收一个DOM元素作为参数
     */
    const makeScroll = ({
        frames = 50,
        step1 = 24,
        timeout1 = 2000,
        timeout2 = 500
    } = options) => {

        const step2 = step1 / frames;
        const timeout3 = timeout2 / frames;

        return (dom = list) => {
            if(outer) {
                return;
            }
    
            let i = 0;
            outer = setInterval(() => {
                const h1 = step1 * i;
                dom.scrollTop = h1;
                if(++i >= data.length) {
                    i = 0;
                }
                
                let h2 = h1;
                const inner = setInterval(function(){
                    h2 += step2;
                    dom.scrollTop = h2;
                    if(h2 >= h1 + step1) {
                        clearInterval(inner);
                    }
                }, timeout3);
            }, timeout1);
        };
    };

    // 4. 创建文字滚动函数
    const startScroll = makeScroll(options);

    /**
     * 停止滚动函数
     */
    const stopScroll = () => {
        if(outer) {
            clearInterval(outer);
            outer = null;
        }
    }

    // 1. 渲染列表内容
    const list = document.querySelector('.list');
    render(list, data);

    // 2. 初始化文字滚动
    startScroll(list);

    // 3. 导出滚动函数（用于在控制台启动或暂停文字滚动）
    return {
        start: startScroll,
        stop: stopScroll
    };
}(data));