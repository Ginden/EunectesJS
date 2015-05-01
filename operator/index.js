
(function (root, factory) {
if (typeof define === 'function' && define.amd) {
// AMD. Register as an anonymous module.
define([], factory);
} else if (typeof exports === 'object') {
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports = factory();
} else {
// Browser globals (root is window)
root.operator = factory();
}
}(this, function () {
var operator = {

	add: function(a,b){
		return a+b;
	},
	subtract: function(a,b) {
		return a-b;
	},
	multiply: function(a,b) {
		return a*b;
	},
	divide: function(a,b) {
		return a/b;
	},
	typeof: function(a) {
		return typeof a;
	},
	modulus: function(a,b) {
		return a % b;
	}
	tilde: function(a) {

	},
	ternary: function(a,b,c) {
		return a ? b : c;
	},
	new: function(Constructor) {
		for(var i = 0, args = []; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		if (Function.prototype.bind) {
			return Function.prototype.bind.apply(Constructor, args)();
		}
		var argsList = args.reduce(function(list, el, i) {
			list.push('arguments[' + (i + 1) + ']');
			return list;
		}, []);
		var source = 'return (new Constructor(' + argsList.join(', ') + '));';
		return Function('Constructor', source).apply(null, [Constructor].concat(args));
	},
	void: function(){}
	plus: function(a) {
		return +a;
	},
	minus: function(a) {
		return -a;
	},
	bitNot: function(a) {
		return ~a;
	},
	boolNot: function(a) {
		return !a;
	},
	in: function(a,b) {
		return a in b;
	},
	instanceof: function(a,b) {
		return a instanceof b;
	},
	less: function(a,b) {
		return a<b;
	},
	greater: function(a,b) {
		return a > b;
	},
	lessOrEqual: function(a,b) {
		return a <= b;
	},
	greaterOrEqual: function(a,b) {
		return a >= b;
	},
	equal: function(a,b) {
		return a == b;
	},
	strictEqual: function(a,b) {
		return a === b;
	},
	inequal: function(a,b) {
		return a != b;
	},
	strictInequal: function(a,b) {
		return a !== b;
	},
	leftShift: function(a,b) {
		return a << b;
	},
	rightShift: function(a,b) {
		return a >> b;
	},
	unsignedRightShift: function(a,b) {
		return a >>> b;
	},
	bitAnd: function(a,b) {
		return a & b;
	},
	bitOr: function (a,b) {
		return a | b;
	},
	bitXor: function (a,b) {
		return a ^ b;
	},
	comma: function() {
		return arguments[arguments.length-1];
	},
	truth: function(a) {
		return !!a;
	},
	floorDiv: function(a,b) {
		return Math.floor(a/b);
	}
   };
   operator.and = operator.bitAnd;
   operator.or = operator.bitOr;
   operator.xor = operator.bitXor;
   operator.invert = operator.tilde;
   operator.lshift = operator.leftShift;
   operator.rshift = operator.rightShift;
   operator.mul = operator.multiply;
   operator.neg = operator.minus;
   operator.mod = operator.modulus;
   operator.sub = operator.subtract;
   operator.truediv = operator.divide;

   return operator;
}));