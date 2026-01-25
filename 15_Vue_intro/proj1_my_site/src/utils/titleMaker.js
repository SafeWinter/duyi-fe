let siteTitle = '', routeTitle = '';
const setTitle = (t1 = routeTitle, t2 = siteTitle) => {
  if(t1 && !t2) {
    return t1;
  }
  if(!t1 && t2) {
    return t2;
  }
  if(!t1 && !t2) {
    return 'loading...';
  }
  return `${t1} - ${t2}`;
};

export default {
  setSiteTitle(title) {
    siteTitle = title;
    document.title = setTitle();
  },
  setRouteTitle(title) {
    routeTitle = title;
    document.title = setTitle();
  }
}