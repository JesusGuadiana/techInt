/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length == 0){
        return 0;
    }
    var j = 0;

    for(var i = 0; i < haystack.length; i++){
        if(haystack[i] == needle[j]){
            j++;
            if(j == needle.length){
                return i - j + 1;
            }
        } else if(haystack[i] != needle[j]) {
            i = i - j;
            j = 0;
        }
    }
    return -1;
};
