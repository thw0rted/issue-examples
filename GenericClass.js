/**
 * A class
 * @constructor
 * @alias GenericClass
 * @template {Function} SomeType
 */
function GenericClass() {}

/**
 * An instance function
 * 
 * @param {SomeType} x
 * 
 * @returns {SomeType}
 */
GenericClass.prototype.myFunc = function (x) {
    return privateFunc(x);
};

/**
 * A private function in this module
 * @function
 * @template T
 * 
 * @param {T} x some input
 * 
 * @returns {T} who knows?
 */
function privateFunc(x) { return x; }

export default GenericClass;