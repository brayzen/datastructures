var NullBinTree = function(){
  this.val = null;
}

NullBinTree.prototype.count = function(){
  return 0;
}

var BinTree = function(val, left, right){
  this.val = val;
  this.left = left || new NullBinTree();
  this.right = right || new NullBinTree();
};

BinTree.prototype.count = function(){
  return this.left.count() + this.right.count() + 1;
};

BinTree.prototype.push = function(val){
  if ( this.left instanceof NullBinTree ){
    this.left = new BinTree(val);
  } else if (this.right instanceof NullBinTree ){
    this.right = new BinTree(val);
  } else if (this.left.count() <= this.right.count()) {
    this.left.push(val);
  } else {
    this.right.push(val);
  };
}



array1 = [5, 3, 5, 6, 7, 8, 9]

btree = new BinTree("r");
btree.push('b');
btree.push('g');
btree.push('p');
btree.push('y');
btree.push('z');
btree.push('o');
btree.push('i');
btree.push('k');


console.log(btree);


