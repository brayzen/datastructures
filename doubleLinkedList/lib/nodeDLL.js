var Node = function(val, prv, nxt) {
  this.val = val;
  this.prv = prv || null;
  this.nxt = nxt || null;
}

module.exports = Node;
