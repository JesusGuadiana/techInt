/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 
var addTwoNumbers = function(l1, l2){
  var result = new ListNode(0);
  var head = result;
  var sum = 0;
  var carrier = 0;

  while(l1 != null || l2 != null || sum >= 10){
    sum = 0;

    if(l1 !== null){
      sum += l1.val;
      l1 = l1.next
    }

    if(l2 !== null){
      sum += l2.val;
      l2 = l2.next;
    }

    sum+= carrier;
    if(sum >= 10){
      carrier = Math.floor(sum/10);
      var rest = sum % 10;
      result.next = new ListNode(rest);
    }else{
      result.next = new ListNode(sum);
      carrier = 0;
    }
    result = result.next;
  }
  return head.next
};
