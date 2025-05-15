const API = (function() {
    const BASE_URL = 'https://study.duyiedu.com';
    const TOKEN_KEY = 'token';

    const PATH = {
        reg: '/api/user/reg',
        login: '/api/user/login',
        exists: '/api/user/exists',
        profile: '/api/user/profile',
        sendChat: '/api/chat',
        getHistory: '/api/chat/history'
    };

    function get(path) {
        const url = BASE_URL + path;
        const headers = {};
        const token = localStorage.getItem(TOKEN_KEY);
        token && (headers['Authorization'] = `Bearer ${token}`);
        return fetch(url, {
            method: 'GET',
            headers
        });
    }

    function post(path, bodyObj) {
        const url = BASE_URL + path;
        const headers = {
            'Content-Type': 'application/json'
        };
        const token = localStorage.getItem(TOKEN_KEY);
        token && (headers['Authorization'] = `Bearer ${token}`);
        return fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(bodyObj)
        });
    }

    async function reg(userInfo) {
        const res = await post('/api/user/reg', userInfo);
        return await res.json();
    }

    async function login(loginInfo) {
        const resp = await post(PATH.login, loginInfo);
        const result = await resp.json();
        if(result.code === 0) {
            const token = resp.headers.get('Authorization');
            localStorage.setItem(TOKEN_KEY, token);
        }
        return result;
    }

    async function exists(loginId) {
        const resp = await get(`${PATH.exists}?loginId=${loginId}`);
        return await resp.json();
    }

    async function profile() {
        const resp = await get(PATH.profile);
        return await resp.json();
    }

    async function sendChat(content) {
        const resp = await post(PATH.sendChat, { content });
        return await resp.json();
    }

    async function getHistory() {
        const resp = await get(PATH.getHistory);
        return await resp.json();
    }

    function logout() {
        localStorage.removeItem(TOKEN_KEY);
    }

    return {
        reg,
        login,
        exists,
        profile,
        sendChat,
        getHistory,
        logout
    };
})();