# file-base64
- Encode a file to a base64 string
- Dncode a base64 string to a file


### Install

``` bash
$ npm install file-base64 --save
```

## Usage

``` js
var base64 = require('file-base64');

base64.encode('text.txt', function(err, base64String) {
  console.log(base64String);
});

var base64String = 'swesh523sfsfgwg';
base64.decode(base64String, 'text.new.txt' function(err, output) {
  console.log('success');
});
```
