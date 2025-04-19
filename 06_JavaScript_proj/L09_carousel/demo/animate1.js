const createAnimate = function(options){
    'use strict';

    const defaults = {
        duration: 1000,
        frames: 50,
        from: 0,
        to: 1,
        onStart: function(elem){
            console.log('animation start, element:', elem);
        },
        onMove: function(n, elem){
            console.log('animation playing, element:', elem, ', target value:', n);
        },
        onEnd: function(elem){
            console.log('animation ended, element:', elem);
        }
    };

    options = Object.assign({}, defaults, options);

    return elem => {
        const {onStart, onMove, onEnd, duration, frames, from, to } = options;
        const step = (to - from) / frames;
        const interval = duration / frames;
        let curIdx = 0;
        let curVal = from;

        onStart(elem);
        const timer = setInterval(function(){
            curIdx++;
            curVal += step;
            onMove(curVal, elem);
            if (curIdx >= options.frames) {
                clearInterval(timer);
                onEnd(elem);
            }
        }, interval);
    };
};