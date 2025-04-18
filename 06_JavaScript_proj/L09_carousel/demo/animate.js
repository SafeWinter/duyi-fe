const {createAnimation, stopPlay} = (function(container) {

    let outer = null;
    
    function createAnimation({
        step1,
        timeout1,
        timeout2,
        frames
    } = options) {
    
        const step2 = step1 / frames;
        const timeout3 = timeout2 / frames;
    
        return dom => {
            if(outer) {
                return;
            }
    
            let i = curIdx;
            updateIndicator(curIdx);
            outer = setInterval(() => {
                curIdx = i + 1;
                // console.log('i, curIdx:', i, curIdx);
                const h1 = step1 * i;
                dom.style.marginLeft = `${-h1}px`;
                
                if(++i === data.length) {
                    curIdx = i = 0;
                }
                
                let h2 = h1;
                const inner = setInterval(function(){
                    h2 += step2;
                    dom.style.marginLeft = `${-h2}px`;
                    if(h2 >= h1 + step1) {
                        updateIndicator(curIdx);
                        clearInterval(inner);
                    }
                }, timeout3);
            }, timeout1);
        };
    
    }
    
    function stopPlay() {
        if(outer) {
            clearInterval(outer);
            outer = null;
        }
    }
    return {
        createAnimation,
        stopPlay
    }
}(document.querySelector('.carousel-container')))