(async () => {
  /**
   * 远程获取省市区数据，当获取完成后，得到一个数组
   * @returns Promise
   */
  async function getDatas() {
    return fetch('https://study.duyiedu.com/api/citylist')
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  }

  const container = document.querySelector('.container');
  const $ = (selector, parent = container) => parent.querySelector(selector);

  const doms = {
    selProvince: $('#selProvince'),
    selCity: $('#selCity'),
    selArea: $('#selArea'),
    get sels() { return [this.selProvince, this.selCity, this.selArea] }, 
  };

  const fillSelect = (elem, data) => {
    // load placeholder text
    const selName = elem.dataset.name;
    $('.title > span:first-child', elem).innerText = `请选择${selName}`;

    // load options
    elem.classList.toggle('disabled', data.length === 0);
    $('.options', elem).innerHTML = data.map((item) => 
      `<li data-value="${item.value}">${item.label}</li>`).join('');

    elem.data = data;
    // console.log(data);

    const subElem = elem.nextElementSibling;
    subElem && fillSelect(subElem, []);
  };

  const fillProvince = data => fillSelect(doms.selProvince, data);
  const fillCity = data => fillSelect(doms.selCity, data);
  const fillArea = data => fillSelect(doms.selArea, data);

  const regSelEvent = (selElem, fillSub) => {
    // 1. 菜单标题点击事件
    const title = $('.title', selElem);
    title.addEventListener('click', (ev) => {
      if(selElem.classList.contains('disabled')) return;
      doms.sels.forEach(sel => sel.classList.toggle('expand', sel === selElem));
    });

    // 2. 菜单选项点击事件
    const ul = $('.options', selElem);
    ul && ul.addEventListener('click', ({target}) => {
      if(target.tagName !== 'LI') return;
      
      const title = $('.title > span:first-child', selElem);
      title.innerText = target.innerText;
      
      const prev = $('.active', ul);
      prev && prev.classList.remove('active');
      target.classList.add('active');
      
      selElem.classList.remove('expand');

      const value = target.dataset.value;
      const subData = selElem.data.find(d => d.value === value).children;
      fillSub && fillSub(subData);
    });
  };

  const initPage = async () => {
    const datas = await getDatas();
    fillProvince(datas);
  };
  
  const bindEvents = () => {
    regSelEvent(doms.selProvince, fillCity);
    regSelEvent(doms.selCity, fillArea);
    regSelEvent(doms.selArea);
  };

  const init = async () => {
    await initPage();
    bindEvents();
  };

  init();

})()