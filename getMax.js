exports.getMax = function(num){
  var digits = num.toString().split('').map(Number);
  return +digits.sort(function (a, b) {  return b - a;  }).join('');
};
