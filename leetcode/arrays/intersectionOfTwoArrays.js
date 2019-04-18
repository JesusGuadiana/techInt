/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    var set1 = new Set(nums1);
    var set2 = new Set(nums2);
    var answ = [];

    if(set1.size > set2.size){
        for(let item of set1){
            if(set2.has(item)){
                answ.push(item);
            }
        }
    }else{
        for(let item of set2){
            if(set1.has(item)){
                answ.push(item);
            }
        }
    }

    return answ;
};
