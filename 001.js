'use strict';

var sum = function(array) {
    return array.reduce(function(a, b) {
        return a+b;
    });
};

var multiples = function(max) {
  var multiplesOfThreeOrFive = [];
  for (var i = 1; i < max; i++) {
      if ((i % 3 === 0) || (i % 5 === 0)) {
          multiplesOfThreeOrFive.push(i);
      }
  }
  return multiplesOfThreeOrFive;
};

sum(multiples(1000));
