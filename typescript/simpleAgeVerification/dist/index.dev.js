"use strict";

function isLegal(a) {
  if (a < 18) {
    return false;
  } else return true;
}

console.log(isLegal(18));