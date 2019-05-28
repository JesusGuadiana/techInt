//TWO PASSES
var removeNthFromEnd = function(head, n) {

    var current = head;
    var trimmed = new ListNode(null);
    trimmed.next = head;
    var cont = 0;

    while(current != null){
        current = current.next;
        cont++;
    }
    cont -= n;
    current = trimmed;
    while(cont > 0){
        current = current.next
        cont--;
    }
    current.next = current.next.next;

    return trimmed.next;
};

// ONE PASS

var removeNthFromEnd = function(head, n) {
    var dum = new ListNode(null);
    dum.next = head;

    var ahead = dum;
    var beyond = dum;

    for(var i = 0; i < n; i++){
        ahead = ahead.next;
    }

    while(ahead.next != null){
        ahead = ahead.next;
        beyond = beyond.next;
    }

    beyond.next = beyond.next.next;
    return dum.next;
};
