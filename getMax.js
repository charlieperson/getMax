exports.getMax = function(num){
  var digits = num.toString().split('').map(Number);
  var sorted = digits.sort(function (a, b) {  return b - a;  });
  return sorted.join('');
};
