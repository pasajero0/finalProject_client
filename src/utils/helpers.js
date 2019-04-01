/**
 * Replace placeholdres in route path with given data
 * @param route {String}
 * @param data {object}
 * @returns {*}
 */
export const replaceInRoute = (route, data) => {
  let result = route;
  Object.keys(data).forEach((k) => {
    result = result.replace(new RegExp(`:${k}`), data[k]);
  });
  return result;
};
/**
 * Clear placeholders in route path
 * @param route {String} - source string that contains placeholders
 * @param keep {Array} - array of the names to be kept
 * @returns {*}
 */
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

/**
 * Build url by given ruoute path and replacements parameters
 * @param route {String} - source string that contains placeholders
 * @param data {object} - data for placing into path
 * @param search {object} - data for search string
 * @returns {*}
 */
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