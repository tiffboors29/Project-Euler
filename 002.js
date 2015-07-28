'use strict';

var fibonacci = function(max) {
  var fibArray = [1, 2];

  for (var i = 1; i<= max; i++) {
      fibArray[i+1]=(fibArray[i] + fibArray[i-1]);
  }
  return fibArray;
};


var sumEvens = function(max) {
    var fibArray = fibonacci(max);
    var evenArray = [];
    var sum;

    for (var i = 0; i < fibArray.length; i++) {
        if (fibArray[i] % 2 === 0) {
            evenArray.push(fibArray[i]);
        }
    }
    sum = evenArray.reduce(function(total, num){
        return total + num }
  , 0);
    return sum;
};

// gives sum of even numbers whose values don't
// exceed 4 million
sumEvens(30);
