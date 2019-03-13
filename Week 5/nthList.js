/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var test = new ListNode(0);
    var cont = 0;
    var current = head;

    test.next = head;

    while(current){
        current = current.next;
        cont++;
    }

    current = test;
    cont = cont - n;

    while(cont > 0){
        current = current.next;
        cont--;
    }
    current.next = current.next.next;

    return test.next;
};
