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

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


//  @param {data value} any :  this is simply a function returning the value unchanged
function identify(value) {
    return value;
}
module.exports.identify = identify;


//   @params{data value} any: this will return the data type of whatever is passed into the function
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

//   @params {array} array : what we will be checking in the function, we are getting the first 
// element in the array .

// @params {num} number : we will use this to manipulate the array, if the number is larger than the array,length
// return the entire array.


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


// @params{array} array : checks the array and targets the lass elemet to return in the end
// @params {num} number : the number that will be used to change what is removed from the array

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



// @params{array} array : checks the array and targets the lass elemet to return in the end
// @params {value} number : this will be the number of index you will be checking..


   function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return i;
      }
    }
    return -1;
  }

module.exports.indexOf = indexOf;


  
// *   1) Return true if <array> contains <value>
// *   2) Return false otherwise

// @params{array} array : checks the array and targets the lass elemet to return in the end
// @params {value} number : this will be the NUMBER  will be checking..

function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
 
  
module.exports.contains = contains;

// 1) Returns a new array of all elements from <array> with duplicates removed
// @params array: the array you will be making UNIQUE..

function unique (arr) { return [...new Set(arr)]; }

module.exports.unique = unique;


// call <function> for each element in <array> passing the arguments:
// *      the element, it's index, <array>
// *   2) return a new array of elements for which calling <function> returned true

// @params arr: the array you will be running
// @params function: the function that will dictate the filter..


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


// 1) call <function> for each element in <array> passing the arguments:
// *      the element, it's index, <array>
// *   2) return a new array of elements for which calling <function> returned false

// @params array: 
// @params function : the inverse of the filter method..

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


//   1) Call <function> for each element in <array> passing it the arguments:
//   // *       element, key, <array>
//   // *   2) Return an array that is made up of 2 sub arrays:
//   // *       0) An array that contains all the values for which <function> returned something truthy
//   // *       1) An array that contains all the values for which <function> returned something falsy

// @params : array, function

   function partition (arr, func) {
    return [_.filter(arr, func), _.reject(arr, func)];
  }
  module.exports.partition = partition;



//   Objectives:
// *   1) call <function> for each element in <collection> passing the arguments:
// *        if <collection> is an array:
// *            the element, it's index, <collection>
// *        if <collection> is an object:
// *            the value, it's key, <collection>
// *   2) save the return value of each <function> call in a new array
// *   3) return the new array


// @params : collection, function..

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




//   1)  pluck Returns an array containing the value of <property> for every element in <array>
// @params arr, properties..

function pluck(arr, prop) {
    return _.map(arr, function (i, index, arr) {
      // maps thru the arr , then return
      return arr[index][prop];
    })
  }
  module.exports.pluck = pluck;



//   1) each wil Call <function> for every element of <collection> with the paramaters:
// *      if <collection> is an array:
// *          current element, it's index, <collection>
// *      if <collection> is an object:
// *          current value, current key, <collection>
// *   2) If the return value of calling <function> for every element is true, return true
// *   3) If even one of them returns false, return false
// *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
// @params : collectio, function

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



//   1) some will Call <function> for every element of <collection> with the paramaters:
// *       if <collection> is an array:
// *        current element, it's index, <collection>
// *       if <collection> is an object:
// *        current value, current key, <collection></collection>
 // @params collection , function

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


//   1) reduce will Call <function> for every element in <collection> passing the arguments:
// *         previous result, element, index
// *   2) Use the return value of <function> as the "previous result"
// *      for the next iteration
// *   3) On the very first iteration, use <seed> as the "previous result"
// *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
// *   5) After the last iteration, return the return value of the final <function> call
// @params collection, function, seed


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


// 1) extend will Copy properties from <object 2> to <object 1>
// *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
// *   3) Return the update <object 1>
// @params: object, another object

 function extend (obj, ...props) {
    // map through to get all values fro ...props arg
    props.map((prop) => {
      Object.assign(obj, prop);
    });
    // assign those objects to the first arg and then return the first arg
    return obj;
 }

 module.exports.extend = extend;









