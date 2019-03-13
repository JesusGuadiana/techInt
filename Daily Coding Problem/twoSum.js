//DAY 1
//Given a lis of numvers and a numverk , return wherher any two numbers from the list add up to k
//Example [10, 15, 3, 7], k = 17 returns true;


var twoSum = function(arr, k){
  var l = 0;
  var r = arr.length - 1;

  arr.sort((a, b) => a - b);

  while(l < r){
    if(arr[l] + arr[r] == k){
      return true;
    } else if(arr[l] + arr[r] < k){
      l++;
    } else {
      r--;
    }
  }
  return false;
}
