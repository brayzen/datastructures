var BstNode = require('./BstNode.js')
console.log(BstNode);

var BinSearchTree = function(values){
  this.vals = values != null ? values : [];
  this.root = null;
  this.size = 0;
  // if (this.vals.length > 0) {
  //   this.insert(this.vals);
  // }
}


BinSearchTree.prototype.insert = function(values){
  var i;
  var length = values.length;
  var val;
  if (values.length > 1){
    for( i = 0; i < length; i++){
      val = values[i];
      this.insert_one(val);
    }
  } else {
    this.insert_one(val);
  }
  return false;
};

BinSearchTree.prototype.insert_one = function(value){
  var current;
  if (!this.root){
    this.root = new BstNode(value)
    this.size++;
    return true;
  }
  current = this.root;
  while(true){
    if (value < current.val) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = new BstNode(value);
        this.size++;
        break;
      }
    } else if (value > current.val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new BstNode(value);
        this.size++;
        break;
      }
    } else if (value === current.val) {
      return false
    }
  }
};

BinSearchTree.prototype.balance = function(){
  var current = this.root;
  console.log(current);
  bstArray = [];

  var trav = function(node){
    if(node){
      trav(node.left);
      if(node.val != null){
        bstArray.push(node.val);
      };
      trav(node.right);
    };
  };
  trav(current);
  console.log(bstArray + ' is the SORTED- Pre-ordered Array');

  orderedArray = [];
  var balOrder = function(bstArray){
    if (bstArray.length > 0) {
      var middle = Math.ceil(bstArray.length/2 - 1) ;
      orderedArray.push(bstArray[middle]);
      var left = (bstArray.slice(0, middle));
      var right = bstArray.slice(middle + 1);
      // console.log(orderedArray + ' is the ORDERED ARRAY');
      balOrder(left);
      balOrder(right);
    };
    return orderedArray;
  };

  balOrder(bstArray);
  console.log(orderedArray + ' is the FINAL ordered array');
  var protoBST = new BinSearchTree();
  protoBST.insert(orderedArray);
  return protoBST
};


BinSearchTree.prototype.contains = function(val){
  var current = this.root;
  while(current){
    if (current.val === val){
      console.log('true')
      return true;
    } else if(val < current.val){
      current = current.left
    } else {
      current = current.right
    }
  }
  console.log('false')
  return false;
};







btree = new BinSearchTree();
btree.insert_one('r');
btree.insert_one('c');
btree.insert_one('t');
btree.insert_one('k');
btree.insert_one('s');
btree.insert_one('d');
btree.insert_one('e');
btree.insert_one('g');
btree.insert_one('u');
btree.insert_one('a');

// console.log(btree);
btree.balance();
// btree.contains('r');
// btree.balance();

// btree.contains('null');
// // // btree.contains(null);
// btree.contains('t');
// btree.contains('b');

// 2nd tree tests
array1 = [7, 5, 3, 5, 6, 2, 8, 9];
btree2 = new BinSearchTree();
btree2.insert(array1);
// console.log(btree2);
// btree3 = new BinSearchTree();
// btree3.insert(btree2.balance());
btree3 = btree2.balance();
btree3.contains(6);
btree3.contains(5);
btree3.contains(9);
btree3.contains(13);
btree3.contains(0);

// console.log(btree2);

// btree2.contains(5);
// btree2.contains(10);
// console.log(btree2.balance());
// btree3 = new BinSearchTree();
// btree3.insert(btree2.balance());
// console.log(btree3);
// btree3.contains(5);
// console.log(btree2);

// console.log(btree.right);


// module.exports = BinSearchTree;
