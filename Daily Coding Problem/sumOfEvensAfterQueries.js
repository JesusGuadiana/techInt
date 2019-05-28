/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvens = function(array){
    var result = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            result += array[i];
        }
    }
    return result;
}
var sumEvenAfterQueries = function(A, queries) {
    result = []
    for(var i = 0; i < queries.length; i++){
        A[queries[i][1]] += queries[i][0];
        result[i] = sumEvens(A);
    }
    return result;
};
