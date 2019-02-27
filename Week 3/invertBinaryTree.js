var invertTree = function(root) {
    var temp;

    if(root === null){
        return null;
    }

    temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.right);
    invertTree(root.left);

    return current;

};
