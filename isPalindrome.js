/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let control = true;
    let arr = x.toString().split("");
    for (let count = 0; count < arr.length; count++) {
        if (arr[count] != arr[arr.length - 1 - count]) {
            control = false;
        } else {
            control = true;
        }
        if (control == false) {
            return control;
        }
    }
    return control;
};

console.log(isPalindrome(100001));