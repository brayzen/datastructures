var BstNode = function(val, left, right, depth){
  this.val = val;
  this.left = left || null;
  this.right = right || null;
  this.depth = depth || 1;
};

module.exports = BstNode;
