(function(){
    /**
   * 从网络获取当前的英雄数据
   * @returns Promise
   */
  async function getHeroes() {
    return fetch('./data.json') // 'https://study.duyiedu.com/api/herolist'
      .then((resp) => resp.json())
      .then((resp) => resp.data.reverse());
  }

  const container = document.querySelector('.container');
  const $ = (selector, parent = container) => parent.querySelector(selector);
  const $$ = (selector, parent = container) => parent.querySelectorAll(selector);

  const doms = {
    result: $('.result'),
    search: $('.search'),
    options: $$('.option', $('.search')),
    keyword: $('.keyword'),
    all: $('.role>.option:first-child'),
    btn: $('.search-btn'),
  };

  function toggleActive(currElem) {
    const prev = $('.rdio.active', doms.search);
    prev && prev.classList.remove('active');
    currElem.classList.add('active');
  }

  function selectFilter(value) {
    const target = parseInt(value, 10);
    if(target === 0) {
      return () => true;
    } else if(target >= 10) {
      return ({pay_type}) => pay_type === target;
    } else {
      return ({hero_type, hero_type2}) => 
        [hero_type, hero_type2].includes(target);
    }
  }

  function getHandler(data) {
    return function(ev) {
      const value = doms.keyword.value.trim();
      if(!value) return;
      const byName = ({cname}) => cname.includes(value);
      renderList(data.filter(byName));
      toggleActive($('.rdio', doms.all));
    };
  }

  function bindEvents(data) {
    // 绑定单选按钮点击事件
    Array.from(doms.options).forEach(opt => 
      opt.addEventListener('click', function(ev) {
        ev.preventDefault();
        toggleActive($('.rdio', this));

        const value = $('input[name=option]', this).value;
        const byHeroType = selectFilter(value);
        const newData = data.filter(byHeroType);
        renderList(newData);
      }));

    // 绑定文本框输入事件，实现模糊搜索
    doms.keyword.addEventListener('input', getHandler(data));
    // 绑定搜索按钮点击事件
    doms.btn.addEventListener('click', getHandler(data));
  }

  async function renderPage() {
    const heroes = await getHeroes();
    return renderList(heroes);
  }

  /*<figure class="item">
    <a href="https://pvp.qq.com/web201605/herodetail/584.shtml" target="_blank">
      <img class="avatar" src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/584/584.jpg" alt="元流之子(射手)">
      <p class="hero-name">元流之子</p>
    </a>
  </figure> */
  function renderList(heroes) {
    const fragment = heroes.reduce((frag, d) => {
      const img = document.createElement('img');
      img.classList.add('avatar');
      img.src = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${d.ename}/${d.ename}.jpg`;
      img.alt = d.cname;
      const p = document.createElement('p');
      p.classList.add('hero-name');
      p.innerText = d.cname;
      const a = document.createElement('a');
      a.href = `https://pvp.qq.com/web201605/herodetail/${d.ename}.shtml`;
      a.title = d.cname;
      a.target = '_blank';
      a.appendChild(img);
      a.appendChild(p);
      const figure = document.createElement('figure');
      figure.classList.add('item');
      figure.appendChild(a);
      frag.appendChild(figure);
      return frag;
    }, document.createDocumentFragment());
    doms.result.innerHTML = '';
    doms.result.appendChild(fragment);
    return heroes;
  }

  async function init() {
    const data = await renderPage();
    bindEvents(data);
  }

  init();
})()

