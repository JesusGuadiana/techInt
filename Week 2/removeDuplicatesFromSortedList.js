var deleteDuplicates = function(head) {
    var current = head;

    while(current){
        var next = current.next;

        if(current.next == null){
            return head;
        }

        if(current.val == next.val){
            current.next = next.next;
        }else{
            current = current.next;
        }
    }
    return head;
};
