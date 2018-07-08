'use strict';
module.exports = function() {
  let storedKey = null;
  let storedVal; 
  return {
      setValue: function(key, value) {
        if (!(key)) {
            return null;
        }  else {
            storedKey = key;
            storedVal = value;
        }
      },
      getValue: function(key) {
          if ((!storedKey)) {
              return null;
          } else {
              return storedVal;
          }
      }
  }
};