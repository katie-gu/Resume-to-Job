/**
 * @module urlencoded-parser
 * @description Iterates over keys in req.body and turns any key with a . in the name into a proper
 *   nested object. "foo.bar" turns into foo: { bar: }. Up to 5 layers are supported.
 * @todo There's got to be a better, more DRY way to do this.
 * @todo It'd also be nice to run a test?
 */

function createKey(object, key) {
  const newObject = object;
  if (!newObject[key]) newObject[key] = {};
  return newObject;
}

const urlencodedParser = (req, res, next) => {
  const keys = Object.keys(req.body);
  let body = {};

  keys.forEach((key) => {
    const splitKeys = key.split('.');

    // We start with case 2 because case 1 is in default.
    switch (splitKeys.length) {
      case 2:
        body = createKey(body, splitKeys[0]);
        body[splitKeys[0]][splitKeys[1]] = req.body[key];
        break;
      case 3:
        body = createKey(body, splitKeys[0]);
        body = createKey(body[splitKeys[0]], splitKeys[1]);
        body[splitKeys[0]][splitKeys[1]][splitKeys[2]] = req.body[key];
        break;
      case 4:
        body = createKey(body, splitKeys[0]);
        body = createKey(body[splitKeys[0]], splitKeys[1]);
        body = createKey(body[splitKeys[0]][splitKeys[1]], splitKeys[2]);
        body[splitKeys[0]][splitKeys[1]][splitKeys[2]][splitKeys[3]] = req.body[key];
        break;
      case 5:
        body = createKey(body, splitKeys[0]);
        body = createKey(body[splitKeys[0]], splitKeys[1]);
        body = createKey(body[splitKeys[0]][splitKeys[1]], splitKeys[2]);
        body = createKey(body[splitKeys[0]][splitKeys[1]][splitKeys[2]], splitKeys[3]);
        body[splitKeys[0]][splitKeys[1]][splitKeys[2]][splitKeys[3]][splitKeys[4]] = req.body[key];
        break;
      default:
        body[splitKeys[0]] = req.body[key];
        break;
    }
  });

  req.body = body;
  next();
};

module.exports = urlencodedParser;
export default urlencodedParser;
