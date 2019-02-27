/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
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
