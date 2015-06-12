module.exports = convertSegmentToAABB;

var min = Math.min;
var max = Math.max;

function convertSegmentToAABB(start, end) {
  var l = start.length;
  var r = new Array(l*2);
  for (var i=0; i<l; i++) {
    var s = start[i];
    var e = end[i];
    r[i] = min(s, e);
    r[i+l] = max(s, e);
  }
  return r;
}
