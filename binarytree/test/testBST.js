var expect = require('chai').expect;
var BstNode = require('../lib/BstNode.js')
var bSTree = require('../lib/BinarySearchTree.js');

describe("BinarySearchTree TESTS", function(){
  before(function(){
    // var tree1 = new bSTree.insert;
    var tree2 = new bSTree();
    // console.log(tree1);
  });

  it('should be able to insert an array of LETTERS', function(){
    console.log('1st test made it HERE 1st');
    var letters = ['t', 'g', 'f', 'k', 'r', 'a', 'd', 'c', 'u', 'e']
    var tree = new bSTree();
    tree.insert(letters)
    expect(tree.root.val).to.equal('t');
    expect(tree.root.left.val).to.equal('g');
    expect(tree.root.right.val).to.equal('u');
  });

  it('should be able to insert an array of NUMBERS', function(){
    var numbers = [ 7, 2, 3, 8, 1, 9, 10, 5]
    var tree = new bSTree();
    tree.insert(numbers)

    console.log('tree');
    expect(tree.root.val).to.equal(7);
    expect(tree.root.left.val).to.equal(2);
    expect(tree.root.right.val).to.equal(8);
  });

  it('should be able to traverse tree and return an array INORDER', function(){
    var numbers = [ 7, 2, 3, 8, 1, 9, 10, 5 ]
    var tree = new bSTree();
    tree.insert(numbers)
    console.log(tree.inOrderTrav());
    expect(tree.inOrderTrav().toString()).to.equal('1,2,3,5,7,8,9,10');
  })

  it('should be able to traverse tree and return an array PRE-ORDER', function(){
    var letters = ['t', 'g', 's', 'k', 'r', 'a', 'd', 'c', 'u', 'e']
    var tree = new bSTree();
    tree.insert(letters);
    expect(tree.preOrderTrav().toString()).to.equal('t,g,a,d,c,e,s,k,r,u');

  });

  it('should be able to traverse tree and return an array POST-ORDER', function(){
    var letters = ['t', 'g', 's', 'k', 'r', 'a', 'd', 'c', 'u', 'e']
    var tree = new bSTree();
    tree.insert(letters);
    expect(tree.postOrderTrav().toString()).to.equal('c,e,d,a,r,k,s,g,u,t');
  });

  it('should be able to traverse tree and return an array LEVEL-ORDER', function(){
    var letters = ['t', 'g', 's', 'k', 'r', 'a', 'd', 'c', 'u', 'e']
    var tree = new bSTree();
    tree.insert(letters);
    expect(tree.levelOrderTrav().toString()).to.equal('t,g,u,a,s,d,k,c,e,r');
  });

  it('should be able to IN-ORDER traverse tree and balance, and re-insert', function(){
    var numbers = [ 7, 2, 3, 8, 1, 9, 10, 5 ]
    var tree = new bSTree();
    tree.insert(numbers)
    balTree = tree.balance();
    console.log(balTree)
    expect(balTree.root.val).to.equal(5);
    expect(balTree.root.left.val).to.equal(2);
    expect(balTree.root.right.val).to.equal(8);
    expect(balTree.root.left.left.val).to.equal(1);
    expect(balTree.root.right.right.val).to.equal(9);
    expect(balTree.root.right.left.val).to.equal(7);
  });

  it('should contain a CONTAIN function that returns True or False', function(){
    var letters = ['t', 'g', 's', 'k', 'r', 'a', 'd', 'c', 'u', 'e']
    var tree = new bSTree();
    tree.insert(letters);
    expect(tree.contains('g')).to.equal(true);
    expect(tree.contains('x')).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
  });

})


