exports.getMax = function(num){
  if(num <= 99 || num >= 1000) return null;
  var digits = num.toString().split('').map(Number);
  return +digits.sort(function (a, b) {  return b - a;  }).join('');
};
