const MyPager = (function(){
    'use strict';

    const container = document.querySelector('.container');
    const $ = (selector, parent = container) => parent.querySelector(selector);
    const $$ = (selector, parent = container) => parent.querySelectorAll(selector);

    const defaults = {
        page: 1,
        pageSize: 10,
        total: 50,
    };

    class MyPager {
        constructor ({page, pageSize, total} = defaults) {
            this.page = page;
            this.pageSize = pageSize;
            this.total = total;
            // components
            this.header = this.initHeader();
            this.content = this.initPageContent();
            this.footer = this.initFooter();
            this.label = this.initLabel();
            this.container = this.initContainer();
        }

        create(tagName) {
            return document.createElement(tagName);
        }

        isFirstPage() {
            return this.page === 1;
        }

        isCurrPage(page) {
            return this.page === page;
        }

        isLastPage() {
            return this.page === this.total;
        }

        hasDisabled(target) {
            return target.classList.contains('disabled');
        }

        updateHeader() {
            if(this.isFirstPage()) {
                this.header.classList.add('disabled');
            } else {
                this.header.classList.remove('disabled');
            }
        }

        updateFooter() {
            if(this.isLastPage()) {
                this.footer.classList.add('disabled');
            } else {
                this.footer.classList.remove('disabled');
            }
        }

        getCurrentRange() {
            const half = Math.floor(this.pageSize / 2);
            let start = this.page - half,
                end = this.page + half;
            if(start <= 1) {
                start = 1;
                end = this.pageSize;
                end = Math.min(end, this.total);
            } else if(end > this.total) {
                end = this.total;
                start = end - this.pageSize + 1;
                start = Math.max(1, start);
            }
            return Array.from({length: end - start + 1}, (_, i) => i + start);
        }

        updateContent() {
            const newArr = this.getCurrentRange();
            // console.log('newArr', newArr);
            $$('a', this.content).forEach((link, i) => {
                const newPage = newArr[i];
                link.setAttribute('data-page', newPage);
                link.innerText = newPage;
                if(this.isCurrPage(newPage)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        updateLabel() {
            const currPage = $('.current-page', this.label);
            currPage.innerText = this.page;
        }

        updatePager() {
            this.updateHeader();
            this.updateContent();
            this.updateFooter();
            this.updateLabel();
        }

        gotoFirstPage({target}) {
            if(this.hasDisabled(target.parentNode)) {
                return;
            }
            this.page = 1;
            this.updatePager();
        }

        gotoLastPage({target}) {
            if(this.hasDisabled(target.parentNode)) {
                return;
            }
            this.page = this.total;
            this.updatePager();
        }

        gotoPrevPage({target}) {
            if(this.hasDisabled(this.header)) {
                return;
            }
            this.page = Math.max(1, this.page - 1);
            target.setAttribute('data-page', this.page);
            this.updatePager();
        }

        gotoNextPage({target}) {
            if(this.hasDisabled(this.footer)) {
                return;
            }
            this.page = Math.min(this.total, this.page + 1);
            target.setAttribute('data-page', this.page);
            this.updatePager();
        }

        gotoTargetPage({target}) {
            this.page = parseInt(target.dataset.page, 10);
            this.updatePager();
        }

        initContainer() {
            const myPager = this.create('section');
            myPager.className = 'my-pager';
            myPager.appendChild(this.header);
            myPager.appendChild(this.content);
            myPager.appendChild(this.footer);
            myPager.appendChild(this.label);
            return myPager;
        }

        initPrevPage() {
            const prevPage = this.create('a');
            prevPage.href = 'javascript:void(0)';
            prevPage.innerText = '上一页';
            prevPage.onclick = ev => this.gotoPrevPage(ev);
            return prevPage;
        }

        initNextPage() {
            const nextPage = this.create('a');
            nextPage.href = 'javascript:void(0)';
            nextPage.innerText = '下一页';
            nextPage.onclick = ev => this.gotoNextPage(ev);
            return nextPage;
        }

        initFirstPage() {
            const firstPage = this.create('a');
            firstPage.href = 'javascript:void(0)';
            firstPage.innerText = '首页';
            firstPage.setAttribute('data-page', 1);
            firstPage.onclick = ev => this.gotoFirstPage(ev);
            return firstPage;
        }

        initLastPage() {
            const lastPage = this.create('a');
            lastPage.href = 'javascript:void(0)';
            lastPage.innerText = '尾页';
            lastPage.setAttribute('data-page', this.total);
            lastPage.onclick = ev => this.gotoLastPage(ev);
            return lastPage;
        }

        initHeader() {
            const header = this.create('header');
            header.className = `header ${this.page === 1 ? 'disabled' : ''}`;
            const firstPage = this.initFirstPage();
            const prevPage = this.initPrevPage();
            header.appendChild(firstPage);
            header.appendChild(prevPage);
            return header;
        }

        initLinks() {
            const frag = document.createDocumentFragment();
            for(let i = 0, len = Math.min(this.pageSize, this.total); i < len; i++) {
                const a = this.create('a');
                a.href = 'javascript:void(0)';
                a.setAttribute('data-page', i+1);
                a.innerText = i + 1;
                if(this.isCurrPage(i + 1)) {
                    a.classList.add('active');
                }
                a.onclick = ev => this.gotoTargetPage(ev);
                frag.appendChild(a);
            }
            return frag;
        }

        initPageContent() {
            const box = this.create('article');
            box.classList.add('content');
            const links = this.initLinks();
            box.appendChild(links);
            return box;
        }

        initFooter() {
            const footer = this.create('footer');
            footer.className = 'footer';
            const nextPage = this.initNextPage();
            const lastPage = this.initLastPage();
            footer.appendChild(nextPage);
            footer.appendChild(lastPage);
            return footer;
        }

        initLabel() {
            const label = this.create('section');
            label.className = 'label';
            label.innerHTML = `
                <span class="current-page">${this.page}</span>
                <span class="dilimiter">/</span>
                <span class="total-page">${this.total}</span>
                `.replace(/\n\s*/g, '');
            return label;
        }

        createPager(parent = document.body) {
            parent.appendChild(this.container);
        }
    }

    return MyPager;
}());