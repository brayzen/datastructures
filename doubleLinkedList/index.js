var Node = require('./lib/nodeDLL');
var DoubleLinkList = require('./lib/doubleLinkList');

var newNode = new Node(1)
console.log(newNode)

for(i = 0; i < 10; i ^ 2){
  console.log(i);
  var dll = DoubleLinkList.insert(i);
  console.log(dll);
}
