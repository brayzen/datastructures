var Node = require('./nodeDLL');
console.log(Node);

var DoubleLinkList = function(head){
  this.head = head || null;
}

DoubleLinkList.prototype.toString = function(){
  var current = this.head;
  str = "";
  // console.log(current.prv + "*&&&&%%%%%$$$$$$$");
  while(current.prv != null){
    // console.log('%%%%%%% ' + current.val);
    str += current.val + ', ';
    // console.log(str + ' this is in the while loop');
    current = current.prv
  }
  str += current.val;
  return console.log(str);
}

DoubleLinkList.prototype.insert = function(val){
  // console.log(this.head + ' this is the HEAD');
  if(this.head === null){
    this.head = new Node(val);
  } else {
    var current = this.head
    this.head = new Node(val, current);
    current.nxt = this.head
    // console.log(current.val + current.prv + current.nxt);
  };
}

DoubleLinkList.prototype.remove = function(val){
  var current = this.head;
  while(current.val != val && current.val != null){
    if (current.prv){
      current = current.prv;
    }else{
      console.log('Not in this list homie');
      return null
    }
  };
  if(current.val){
    if(current.prv){
      current.prv.nxt = current.nxt;
    } else {
      current.nxt.prv = current.prv
    };
    if(current.nxt){
      current.nxt.prv = current.prv;
    } else {
      current.prv.nxt = current.nxt
      this.head = current.prv
    };
  return current.val
  }
}


DoubleLinkList.prototype.search = function(val){
  var count = 1;
  var current = this.head;
  while (current.val !== val){
    if (!current.prv){
      console.log("Not found in this linked list");
      return false;
    };
    current = current.prv;
    count++;
  };
  console.log('found it!!! '+ count + ' items down the chain');
  return true;
}


newList = new DoubleLinkList();
newList.insert(5);
// newList.toString();
newList.insert(4);
// newList.toString();
newList.insert(3);
// newList.toString();
newList.insert(2);
// newList.toString();
newList.insert(1);
// newList.toString();
newList.insert(10);
// newList.toString();
newList.insert(15);

newList.remove(2);
newList.toString();

newList.remove(15);
newList.toString();

newList.remove(180);
newList.toString();

newList.insert(987);
newList.toString();

newList.remove(5);
newList.toString();

newList.remove(887);
newList.remove(87);

newList.search(3);
newList.search(998);
newList.search(10);

newList.insert(556);
newList.insert(324);

newList.head;
newList.toString();

newList.search(3);
console.log(newList.search(3));
newList.search(998);
console.log(newList.search(998));
newList.search(10);
console.log(newList.search(10));

module.exports = DoubleLinkList;
