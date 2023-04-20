/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((value, func) => func(value), x);
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));

const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1));

const fn3 = compose([]);
console.log(fn3(42)); 

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */