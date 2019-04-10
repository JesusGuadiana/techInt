
function encode(str){
  var cont = 0;
  var encodedStr = "";
  for(var i = 1; i <= str.length; i++){
    cont++;
    if(str[i-1] != str[i]){
      encodedStr += cont + str[i-1];
      cont = 0;
    }
  }
  return encodedStr;
}


function decode(str){
  var decodedStr = "";
  var count = 0;

  for(var i = 1; i <= str.length; i = i + 2){
    count = str[i-1];
    console.log(count)
    while(count != 0){
      decodedStr += str[i];
      count--;
    }
  }
  return decodedStr;
}
