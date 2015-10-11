var Node = function(val, prv, nxt) {
  this.val = val;
  this.prv = prv != null ? prv : null;
  this.nxt = nxt != null ? nxt : null;
}

module.exports = Node;
