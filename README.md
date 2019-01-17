# objectToCss
Collects an object into a string

## Base
### Sample:

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

## If you neeading duplicate rules
### Sample:

```javascript
const CJS = {
  media: [
    {
       [`@media screen and (min-width: ${min}px)`]: {
          body: {
            'background-color': null,
          }
        },
    },
    {
      [`@media screen and (min-width: ${min}px)`]: {
        body: {
          'background-color': null,
        }
      },
    }
  ],
  '*:before': {
    'border': '2px solid red'
  } 
}
```
