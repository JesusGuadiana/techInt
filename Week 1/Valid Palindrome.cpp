class Solution {
public:
  bool isPalindrome (string s){
    int j = s.length() - 1;
    int i = 0;

    while(i < j){
      while(!isalnum(s[i] && i < j)){
        i++;
      }
      while(!isalnum(s[j] && i < j)){
        j--;
      }
      if(tolower(s[i]) != tolower(s[j])){
        return false;
      }else{
        j--;
        i++;
      }
      return true;
    }
  }
};
