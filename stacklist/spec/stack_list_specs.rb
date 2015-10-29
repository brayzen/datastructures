require_relative '../lib/Node'
require_relative '../lib/Stacklist'

stack1 = Stacklist.new(34)

puts stack1.to_s

puts stack1.push("name")
puts stack1.push("my")
puts stack1.push("is")
puts stack1.push("brian")


puts stack1.to_s

puts stack1.pop

puts stack1.to_s
