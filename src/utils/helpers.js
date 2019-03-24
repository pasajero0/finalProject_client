export const replaceInRoute = (route, data) => {
  let result = route;
  Object.keys(data).forEach((key) => {
    result = result.replace(new RegExp(`:${key}`), data[key]);
  });
  return result;
};

export const clearPlaceholdersInRoute = (route, keep) => {
  let result = route;
  const keys = route.split('/').filter(m => m.substr(0,1) === ':').map(m => m.substr(1));
  if(keys.length > 0){
    keys.forEach((key) => {
      if(!keep.includes(key)){
        result = result.replace(new RegExp(`/${key}/:${key}`), '');
        result = result.replace(new RegExp(`/:${key}`), '');
      }
    });
  }
  return result;
};


export const buildUrl = (route, data, search = {}) => {
  const base = clearPlaceholdersInRoute(replaceInRoute(route, data), Object.keys(data));
  if(Object.keys(search).length > 0){
    const query = [];
    Object.keys(search).forEach( (key) =>{
      query.push(`${key}=${encodeURIComponent(search[key])}`);
    });
    return `${base}?${query.join('&')}`;
  }
  return base;
};
