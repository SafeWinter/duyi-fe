(function(){
    const content = document.querySelector('.content');
    const $ = content.querySelector.bind(content);

    const doms = {
        province: $('#province'),
        city: $('#city'),
        school: $('#school'),
    };

    const notDefault = code => code !== '0000';

    const buildOptionsWith = data => Object.entries(data)
        .map(([code, label]) => `<option value="${code}">${label}</option>`)
        .join('');

    const defaultOption = () => buildOptionsWith({"0000": "请选择"});

    const resetSchoolBar = () => doms.school.innerHTML = defaultOption();

    const resetCityBar = () => {
        doms.city.innerHTML = defaultOption();
        resetSchoolBar();
    };

    const renderSchoolBar = cityCode => {
        resetSchoolBar();
        if(notDefault(cityCode)) {
            const schoolData = allschool[cityCode] || {};
            doms.school.innerHTML += buildOptionsWith(schoolData);
        }
    };

    const renderCityBar = provCode => {
        resetCityBar();
        if (notDefault(provCode)) {
            const cityData = city[provCode] || {};
            doms.city.innerHTML += buildOptionsWith(cityData);
        }
    };

    const renderProvinceBar = () => {
        doms.province.innerHTML = defaultOption() + buildOptionsWith(province);
        resetCityBar();
    };

    const init = () => {
        // 1. init all bars
        renderProvinceBar();

        // 2. bind change event to province bar
        doms.province.addEventListener('change', ({target}) => renderCityBar(target.value));
        
        // 3. bind change event to city bar
        doms.city.addEventListener('change', ({target}) => renderSchoolBar(target.value));
    };

    init();
}());