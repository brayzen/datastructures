var BstNode = require('./BstNode.js')

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
        current.left = new BstNode(value, null, null, (current.depth));
        this.size++;
        current.left.depth++;
        break;
      }
    } else if (value > current.val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new BstNode(value, null, null, (current.depth));
        this.size++;
        current.right.depth++;
        break;
      }
    } else if (value === current.val) {
      return false
    }
  }
};

BinSearchTree.prototype.balance = function(){
  var current = this.root;
  var bstArray = this.inOrderTrav();
  midOrderArr = [];
  var balOrder = function(arrayBST){
    if (arrayBST.length > 0) {
      var middle = Math.ceil(arrayBST.length/2 - 1) ;
      midOrderArr.push(arrayBST[middle]);
      var left = arrayBST.slice(0, middle);
      var right = arrayBST.slice(middle + 1);
      balOrder(left);
      balOrder(right);
    };
    return midOrderArr;
  };
  balOrder(bstArray);
  // console.log(midOrderArr + ' is the MIDDLE ordered array');
  var protoBST = new BinSearchTree();
  protoBST.insert(midOrderArr);
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

BinSearchTree.prototype.postOrderTrav = function(){
  var bstArray = [];
  var rootNode = this.root;
  var postOrder = function(node){
    if(node){
      postOrder(node.left);
      postOrder(node.right);
      if(node.val != null){
        bstArray.push(node.val);
      };
    };
  };
  postOrder(rootNode);
  // console.log(bstArray + ' $$$ but this is POST-ORDER ');
  return bstArray;
};

BinSearchTree.prototype.inOrderTrav = function(){
  var bstArray = [];
  var rootNode = this.root;
  var inOrder = function(node){
    if(node){
      inOrder(node.left);
      if(node.val != null){
        bstArray.push(node.val);
      };
      inOrder(node.right);
    };
  };
  inOrder(rootNode);
  // console.log(bstArray + " ### this is the IN-ORDER array")
  return bstArray;
};

BinSearchTree.prototype.preOrderTrav = function(){
  var bstArray = [];
  var rootNode = this.root;
  var preOrder = function(node){
    if(node){
      if(node.val != null){
        bstArray.push(node.val);
      };
      preOrder(node.left);
      preOrder(node.right);
    };
  };
  preOrder(rootNode);
  // console.log(bstArray + " &&& this is the PRE-ORDER array")
  return bstArray;

};

BinSearchTree.prototype.levelOrderTrav = function(){
  var queue = [];
  queue.push(this.root);
  finalArr = [];

  do {
    var len = queue.length;

    for( var i = 0; i < len; i++ ){
      var index = queue.shift();
      finalArr.push( index.val )
      var node = index;
      if( node.left ) {
        queue.push( node.left );
      }
      if( node.right ) {
        queue.push( node.right );
      }
    }

  } while( queue.length !== 0 );
  console.log( finalArr );
  return ( finalArr );
};


module.exports = BinSearchTree;
