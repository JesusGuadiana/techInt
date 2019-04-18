/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    var left = depth(root.left);
    var right = depth(root.right);
    var diff = Math.abs(left - right)

    return diff<=1 && isBalanced(root.left) && isBalanced(root.right);
};

var depth = function(root){
    if(root == null){
        return 0;
    }

    return 1 + Math.max(depth(root.left), depth(root.right));
}
