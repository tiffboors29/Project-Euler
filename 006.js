'use strict';

var square = function(n) {
    return n*n;
};

var difference = function(n, m) {
    return n - m;
};

var sumOfSquares = function(min, max) {
    var range = [];
    var sum;
    for (var i = min; i <= max; i++) {
        range.push(square(i));
    }
    return range.reduce(function(a, b)     {
        return a+b;
    });
};

var squareOfSum = function(min, max) {
    var range = [];
    var sum;
    for (var i = min; i <= max; i++) {
        range.push(i);
    }
    sum = range.reduce(function(a, b)     {
        return a+b;
    });
    return Math.pow(sum, 2);
};

difference(sumOfSquares(1, 100), squareOfSum(1, 100));
