var convert = require('./segment-aabb');
var test = require('tape');

test('1d', function(t) {
  var r = convert([0], [1]);
  t.deepEqual(r, [
    0, 1
  ], 'min max for 1d')

  t.end();
});

test('2d', function(t) {
  var r = convert([0, -1], [10, 20]);
  t.deepEqual(r, [
    0, -1, 10, 20
  ], 'min max for 1d')

  t.end();
});

test('2d (mixed)', function(t) {
  var r = convert([10, -1], [-10, 20]);
  t.deepEqual(r, [
    -10, -1, 10, 20
  ], 'min max for 1d')

  t.end();
});

test('3d (mixed)', function(t) {
  var r = convert([10, -1, 4], [-10, 20, 9000]);
  t.deepEqual(r, [
    -10, -1, 4, 10, 20, 9000
  ], 'min max for 1d')

  t.end();
});
