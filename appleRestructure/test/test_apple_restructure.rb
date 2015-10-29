require_relative '../lib/apple_node'
require_relative '../lib/apple_tree'


node1 = AppleNode.new(6)
puts node1.val
puts node1.left = AppleNode.new(7)
puts node1.right = AppleNode.new(8)
puts node1.left.val
puts node1.right.val
node2 = node1.right
puts "#{node2.val} this is the second RIGHT node, should be 8"
puts
puts
puts


tree = AppleTree.new('Tim')
tree.left = AppleTree.new('Jony')
tree.right = AppleTree.new('Phil')
tree.right.left = AppleTree.new('Craig')
tree.right.right = AppleTree.new('Eddie')
tree.left.left = AppleTree.new('Dan')
tree.left.right = AppleTree.new('Katie')
tree.left.right.left = AppleTree.new('Peter')
tree.left.right.right = AppleTree.new('Andrea')
tree.left.right.right.name

puts tree.inorder
puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
puts tree.preorder
puts "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
puts tree.postorder
