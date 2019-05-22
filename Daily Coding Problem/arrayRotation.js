// Given an array a of n integers and a number,d , perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.


function rotateOnce(a, d) {
    var temp = a[0];
    var l = a.length;
    for (var i = 0; i < l; i++) {
        a[i] = a[i + 1];
    }
     a[l - 1] = temp;

    return a;
}

// Complete the rotLeft function below.
function rotLeft(a, d) {

    if (a.length == d) {
        return a;
    }
    for (var i = 0; i < d; i++){
        a = rotateOnce(a, d);
    }
    return a;
}
