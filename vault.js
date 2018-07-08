'use strict';
module.exports = function() {
//   let storedKey;
//   let storedVal;
  const secret = {};

  function setValue(key, value) {
    if (!(key)) {
        return null;
    }  else {
        secret.storedKey = key;
        secret.storedVal = value;
    }
  }

  function getValue(key) {
    if ((!key)) {
        return null;
    } else if (key !== secret.storedKey) {
        return null;
    } else {
        return secret.storedVal;
    }
  }

  return {
      setValue: setValue,
      getValue: getValue
  }
};