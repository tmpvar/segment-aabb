# segment-aabb

compute the aabb of an n-dimensional line segment

## install

`npm install segment-aabb`

## use

```javascript
var convert = require('segment-aabb');

var start = [10, 10, 5];
var end = [100, -2, 10];

var r = convert(start, end);

console.log(r);

/*
    outputs:
    [10, -2, 5, 100, 10, 10]
*/

```

### api surface

_segmentAABB_(`start`, `end`)

* `start` - vector in the form of an array
* `end` - vector in the form of an array

__returns__ array (e.g in 2d `[minX, minY, maxX, maxY]`)

## license

[MIT](LICENSE.txt)
