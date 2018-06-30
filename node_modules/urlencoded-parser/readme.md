# urlencoded-parser
Simple [express.js middleware](https://expressjs.com/en/guide/using-middleware.html) package that hooks into express's request object to turn this:
```json
{
  "foo": "bar",
  "baz.stuff": "things"
}
```

into this:
```json
{
  "foo": "bar",
  "baz": {
    "stuff": "things"
  }
}
```

## Installation
```
npm install urlencoded-parser
```

```JavaScript
// require or import body-parse
import urlencodedParser from 'urlencoded-parser'; // ES6
var urlencodedParser = require('urlencoded-parser'); // ES5

app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);
```

## Usage
Once it's installed and hooked into express there's really nothing else to do in express.

Form data being sent up must use dot notation to separate things.
```HTML
  <input type="text" name="foo.bar" />
```

**Note:** It only parses up to 5 levels of nested json. Anything after that maintains it's original string representation.

## License - MIT
Copyright (c) 2017 Cody Spring

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
