var Node = require('./nodeDLL');
console.log(Node);

var DoubleLinkList = function(){
  this.head = null;
  this.tail = null;
}

DoubleLinkList.prototype.insert = function(val){
  if(head === null){
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    this.head = new Node(val, this.head);
    var current = this.head;
    current.prv.nxt = current;
  };
}

DoubleLinkList.prototype.remove = function(val){
  var current = this.head;
  while(curent.val != val){
    current = current.prv;
  };
  if(current.prv){
    current.prv.nxt = current.nxt;
    // if (current.val == this.head.val){
    //   this.head = current.prv;
    // };
  };
  if(current.nxt){
    current.nxt.prv = current.prv;
  };
  return current.val
}

DoubleLinkList.prototype.search = function(val){
  var count = 1;
  var current = this.head;
  while (current.val !== val){
    current = current.prv;
    count++;
  };
  return current.val;
  if (current.prv === null){
    return current.prv;
  };
}


module.exports = DoubleLinkList;
