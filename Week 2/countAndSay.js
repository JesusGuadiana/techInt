var countAndSay = function(n) {

    var arr = ["1"];
    var count = 0;
    var temp;

    if(n == 1){
        return arr[0];
    }

    for(var i = 0; i < n - 1; i++){
        var str = arr[i];
        
        for(var j = 1; j <= str.length; j++){
            count++;

            if(count == str.length){
                temp = count + str[j - 1];
            } else if(str[j] != str[j - 1]){
                temp +=  count + str[j - 1];
                count = 0;
            }
        }
        count = 0;
        arr[i + 1] = temp;
        temp = "";
    }
    return arr[n - 1];
};
