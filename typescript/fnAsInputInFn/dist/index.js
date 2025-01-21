"use strict";
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(() => {
    console.log("hi there");
});
