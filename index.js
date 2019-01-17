const miniCJS = function compile(CJS) {
  let css = '';
  for (let rule in CJS) {
    const type = Object.prototype.toString.call(CJS[rule]);
    if ( type === '[object Object]' ) {
      css += `${rule}{${compile(CJS[rule])}}`;
    } else if ( type === '[object Array]' || rule === '__media' ) {
      css += CJS[rule].reduce((acc, el) => acc + compile(el), '');
    } else {
      css += `${rule}:${CJS[rule]};`
    }
  }
  return css;
}
