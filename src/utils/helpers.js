export const replaceInRoute = (route, data) => {
  let result = route;
  Object.keys(data).forEach((key) =>{
    result = result.replace(new RegExp(`:${key}`), data[key]);
  });
  return result;
};