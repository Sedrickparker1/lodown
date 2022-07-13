'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

// identify : function that returns any data value unchanged...
//  @param {any data value}: function takes in any value as input.
// @return{any data value} : function returns the input value unchanged

function identify(value) {
    return value;
}
module.exports.identify = identify;



// typeOf : function that will return the data type of the input value
// @params{any value} : takes in any data value as input value.
// @return{String}:return a string representing the data type of the input Value
function typeOf(value) {
    if (typeof value === 'string' || value instanceof String) {
        return 'string';
    }
    if (typeof value === 'object' && Array.isArray(value) && value instanceof Array) {
        return 'array';
    }
    if (typeof value === 'object' && value instanceof Object && value !== null && isNaN(value)) {
        return 'object';
    }
    if (typeof value === 'number' && value !== null) {
        return 'number';
    }
    if (typeof value === 'undefined') {
        return 'undefined';
    }
    if (typeof value === 'boolean') {
        return 'boolean';
    }
    if (value === null) {
        return 'null';
    }
    if (value instanceof Function) {
        return 'function';
    }
    if (value instanceof Date) {
        return 'date';
    }
}
module.exports.typeOf = typeOf;


// first : function will return the index of the input array or the input array itself..
// @params{Array} : function takes an array as the first argument
// @params{NUM} : function takes a number as the second argument.
// @return {Number,String, Array} : function will either return a number , a string, or the array


function first(arr, num) {
    let newArr = [];
    //   our output;
    if (!Array.isArray(arr)) {
        return newArr;
        // if not array, return empty array
    }
    if (isNaN(num) || num === 1) {
        return arr[0];
        // if no number or number equals 1 we are getting the first element
    } else if (num < 0 && num < arr.length) {
        return newArr;
    } else if (num > arr.length) {
        // if number bigger than the array, just return the entire array.
        return arr
    }
    else if (num > 0) {
        arr.pop(num);
        return arr
        // get rid of index of the number in the num argument.
    }
    else if (num > 0 && num > arr.length) {
        return arr;
    }
}
module.exports.first = first;

// last : function will be used to find the index of a input array starting from the last element

// @params{array} array : checks the array and targets the lass elemet to return in the end
// @params {num} number : the number that will be used to change what is removed from the array
// @return {Number, array} : function will either return a number in the array or the entire array..

function last (arr, num) {
    let newArr = [];
    //   our output;
    if (!Array.isArray(arr)) {
      return newArr;
    }
    if (isNaN(num) || num === 1) {
      return arr[arr.length - 1];
    }
    else if (num > 0 && num < arr.length) {
      arr.reverse();
      arr.pop(arr[num]);
      arr.reverse();
      return arr
    }
    else if (num > arr.length) {
      return arr
    }
    else if (num < 0) {
      return newArr;
    }
}
module.exports.last = last;



//  indexOf : function will be used to return the index of the input array
// @params {Array}: function will iterate through the input array to declare the index
// @params {Number} : function will use this input number to return the index 
// @return {Number}: function will return the index of the input value..


   function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return i;
      }
    }
    return -1;
  }

module.exports.indexOf = indexOf;


  /*
    contains: function that takes an array and a value and returns boolean
    @params {array}: function takes in a array as the first argument
    @params {any simple data type} : function will iterate and check if the input value is inside of the array
    @return {Boolean}: function will either return true or false..
  */

function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
 
  
module.exports.contains = contains;


/*
unique: function takes in array and returns a new array
@params {Array}: function takes array  as input..
@return {Array}: function returns array with no duplicates existing.
*/
function unique (arr) { return [...new Set(arr)]; }

module.exports.unique = unique;


/*
filter : function takes in a array and function as input and returns new Array.
@params {Array}: function takes array as input 
@params {Function}: function will take another function as the second parameter
@return {Array}: function will only return the element that registers true to the func parameter

*/

 function filter (arr, func) {
  var fixedArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        fixedArr.push(arr[i]);
      }
    }
  }
  return fixedArr;
}

module.exports.filter = filter;


/*
reject : function takes in an array and a function to return a new Array
@params{Array}: function takes in array as first parameter;
@params {Funcion}: function also takes in a function to be ran on the elements in array
@return {Array} : function returns the values that are false from the function and puts them in a array.
*/

function reject (array, func) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
      if (func(array[i], i, array) === false) {
        output.push(array[i]);
      }
    }
    return output;
  }
  module.exports.reject = reject;

/*
partition :  function takes in a array and function and returns two arrays;
@params {Array} : function takes in a array as a input
@params {Function} : function also takes in a function as a input.
@return {Array, Array} : function returns an array of truthy values and another array of falsey values.
*/

   function partition (arr, func) {
    return [_.filter(arr, func), _.reject(arr, func)];
  }
  module.exports.partition = partition;

/*
map : function takes in a collection and a function and returns a new Array
@params : {collections} : function will either take a array or a object as a input
@params {Function} : function will also take a function as a input.
@return {Array}: function will return an array of the input function over the input array
  returns new Array.
*/

   function map (collec, func) {
    let output = [];
  
    for (var i = 0; i < collec.length; i++) {
      if (Array.isArray(collec)) {
        output.push(func(collec[i], i, collec));
      }
    }
    if (!Array.isArray(collec)) {
      for (let key in collec) {
        output.push(func(collec[key], key, collec))
      }
    }
    return output;
  }
  module.exports.map = map;

/*
pluck : function will take a array and a properties and will return a array
@params : function will take a array as the input 
@params : function will take a property as a input
@retrun {Array} : function returns an array countaining the value of the prop parameter for every element in the array
*/


function pluck(arr, prop) {
    return _.map(arr, function (i, index, arr) {
      // maps thru the arr , then return
      return arr[index][prop];
    })
  }
  module.exports.pluck = pluck;



/*
every : function will take in a collection and a function as inputs
@params {Collection}: function will either take a array or an object as a input
@params{Function}: function will also take in a function as a parameter
@return {boolean} : function will only return true if al values are truthy within the function
*/

 function every(collec, func) {
    let falseCount = 0;
    if (func === undefined) {
      //     checking if the func is undefined
      if (Array.isArray(collec)) {
        for (let i = 0; i < collec.length; i++) {
          if (collec[i] === false) {
            falseCount++;
          }
        }
      }
    } else {
      if (Array.isArray(collec)) {
        for (let i = 0; i < collec.length; i++) {
          if (func(collec[i], i, collec) === !true) {
            falseCount++;
          }
        }
      }
    }
    return falseCount === 0;
  }

  module.exports.every = every;

 /*
some : function that takes in a collection and a func to return a boolean
@params {collection}: function will either take a array or object as a input
@params {Function}: function also take a function to call on every element in the array
@returns {boolean}: function will return false if all values are falsey else it will return true
 */

  function some (coll, func) {
    let someSome = 0;
    // this is the variable that we will be using to determine if the func returns true
    if (func === undefined) {
      // check if func is undefined and then check if the collec is an array , if true loop and call func on current element, current value, and the entirre array or obj
      if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
          // looping over every elemet and get values
          if (coll[i] === true) {
            someSome++;
            // if a value is true, it will be saved in the somesome var,,
          }
        }
      }
  
    } else {
      if (Array.isArray(coll)) {
        // still have to check if it is an array
        //   *   1) Call <function> for every element of <collection> with the params
        // *  if <collection> is an array:
        // *  current element, it's index, <collection>
        for (let j = 0; j < coll.length; j++) {
          // current element , index , array
          if (func(coll[j], j, coll) === true) {
            someSome++;
            // if something is true we will know
          }
        }
      }
      if (!Array.isArray(coll)) {
        // if this results to false we are going to 
        // for in loop and call func on 
        //      if <collection> is an object:
        // *        current value, current key, <collection>
        for (let key in coll) {
          if (func(coll[key], key, coll) === true) {
            someSome++;
          }
        }
      }
      // now all we 
    }
    return someSome > 0;
  }

  module.exports.some = some;


/*
reduce: function that will take in a array, a function, and a seed.
@params{Array} : function will take an  array as a input
@params {Funciton}: function will take a function as a input
@params {Seed}: function will either include seed parameter or not
@return {any value}: function retruns the return value of  the final function

*/

 function reduce (arr, func, seed) {
    var output;
    if (seed === undefined) {
      output = arr[0];
      for (var i = 1; i < arr.length; i++) {
        output = func(output, arr[i], i, arr);
      }
    }
    else {
      output = seed;
      for (var i = 0; i < arr.length; i++) {
        output = func(output, arr[i], i, arr)
      }
    }
    return output;
  }

module.exports.reduce = reduce;



/*
extend : function will take a object and another object as inputs
@params {Object}: function wil take an object as the first input
@params{Object2}: function will take in another object as input
@return {Object} : function will return object2 data inside of object1
*/

 function extend (obj, ...props) {
    // map through to get all values fro ...props arg
    props.map((prop) => {
      Object.assign(obj, prop);
    });
    // assign those objects to the first arg and then return the first arg
    return obj;
 }

 module.exports.extend = extend;









