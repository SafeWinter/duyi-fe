const counter = {
  count: 0,
  // 完成该函数，调用该函数后，每隔一秒就会增加count的值，然后输出它
  startIncrease() {
    let timer = setInterval(() => {
      this.count++;
      console.log(this.count);
      if(this.count >= 10) {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  },
};

// 调用该函数
counter.startIncrease();