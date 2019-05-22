// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters
// can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and
// dcbac are anagrams, but bacdc and dcbad are not.
//
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletionsrequired to make the two
// strings anagrams. Can you help her find this number?Given two strings,  and , that may or may not be of the same length, determine the minimum number of character
// deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.For example, if  and , we can delete  from string  and  from string
// so that both remaining strings are and  which are anagrams.

function makeAnagram(a, b) {
    var hashtable = {};
    var delCont = 0;

    for (var i = 0; i < a.length; i++){
        if (hashtable[a[i]]) {
            hashtable[a[i]]++;
        } else {
            hashtable[a[i]] = 1;
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (hashtable[b[i]] === undefined || hashtable[b[i]] === 0) {
            delCont++;
        } else {
            hashtable[b[i]]--;
        }
    }

    for (var index in hashtable) {
        if (hashtable[index] > 0) {
            delCont += hashtable[index];
        }
    }
    return delCont;
}
