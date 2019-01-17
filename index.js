const compile = value => {
  let css = '';
  for (let rule in value) {
    if ( Object.prototype.toString.call(value[rule]) === '[object Object]' ) {
      css += `${rule} { ${ObjectToCss(value[rule])} }`;
    } else {
      css += `${rule}: ${value[rule]};`
    }
  }
  return css;
}
