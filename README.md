# objectToCss
Collects an object into a string

## Sample:

```javascript
const min = 992;

const miniJSS = {
  [`@media screen and (min-width: ${min}px)`]: {
    body: {
      'background-color': 'red'
    }
  }
}

const css = compile(miniJSS);
// return '@media screen and (min-width: 992px) { body { background-color: red;  } }'
```
