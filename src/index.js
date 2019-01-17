'use strict'
const miniCJS = function compile(CJS) {
  if ( ! CJS || Object.prototype.toString.call(CJS) !== '[object Object]' ) {
    console.log('Invalid argument');
    return '';
  }
  let css = '';
  for (let rule in CJS) {
    const type = Object.prototype.toString.call(CJS[rule]);
    if ( type === '[object Object]' ) {
      css += `${rule}{${compile(CJS[rule])}}`;
    } else if ( type === '[object Array]') {
      css += CJS[rule].reduce((acc, el) => acc + compile(el), '');
    } else {
      css += `${rule}:${CJS[rule]};`
    }
  }
  return css;
}

module.exports = miniCJS;