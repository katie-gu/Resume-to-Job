'use strict';

var fs = require('fs');
var intoStream = require('into-stream');

function encode(path, callback) {
  var rs = fs.createReadStream(path, {
    encoding: 'base64'
  });

  var str = '';
  rs.on('data', function(chuck) {
    str += chuck;
  });

  rs.on('end', function() {
    callback(null, str);
  });

  rs.on('error', function() {
    callback('encode fail');
  })
}

function decode(base64String, output, callback) {
  var bitmap = new Buffer(base64String, 'base64');
  var rs = intoStream(bitmap)
  var ws = fs.createWriteStream(output);

  rs.on('end', function() {
    callback(null, output);
  });

  rs.on('error', function() {
    callback('decode fail');
  });

  rs.pipe(ws);
}

module.exports = {
  encode: encode,
  decode: decode
}
