class Solution {
public:
  bool isPalindrome(string s){
      string newS;

      for(int i = 0; i < s.length(); i++){
          if(isalnum(s[i])){
                  newS += tolower(s[i]);
             }
      }
      int j = newS.length() - 1;

      for(int i = 0; i <= newS.length()/2; i++){
          if(newS[i] != newS[j]){
              return false;
          }
          j--;
      }
      return true;
  }
};
