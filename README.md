# miniCJS
Collects an object into a css string

## Installation
`npm i --save minicjs`


## Usage
```javascript
const miniCJS = require('minicjs');
const min = 992;

const CJS = {
	[`@media screen and (min-width: ${min}px)`]: {
		body: {
			'background-color': 'red'
		}
	}
}

const css = miniCJS(CJS);
// return '@media screen and (min-width: 992px) { body { background-color: red;  } }'
```
### If you neeading duplicate rules:

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

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
Copyright (c) 2019 Year(s), Mobydack devzetsubou@gmail.com

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.