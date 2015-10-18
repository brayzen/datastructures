require_relative 'Node'
class List
  def initialize(number)
    @head = Node.new(0)
    current = @head
    1.upto(number) do |n|
      current.nxt = Node.new(n)
      current = current.nxt
    end
      puts current.val while current = current.nxt && current.nxt
  end

  def insert(val)
    current = Node.new(val)
    if @head == nil
      @head = current
    else
      current.nxt = @head
      @head = current
    end
    puts "this is the current Head: #{@head.val}, head points at #{@head.nxt}"
  end

  def search(value)
    current = @head
    count = 0
    while current != nil do #step, change the current varibable to the next variable and check there.
      if current.val == value
        puts "found it(#{current.val}) is the current.val, found #{count} links down the chain"
        return current.val
      end
      count += 1
      current = current.nxt
    end
    puts "not found"
  end

  def to_s
    current = @head
    str = ""
    while current.nxt != nil do
      str += "#{current.val}, "
      current = current.nxt
    end
    puts str
  end

  def remove(val)
    current = @head
    prev = @head
    if current.val == val
      @head, current = current.nxt
    else
      while(current != nil)
        if current.val == val #step, change the current varibable to the next variable and check there.
          prev.nxt = current.nxt
          puts "deleted #{val}"
          return self.to_s
        else
          prev = current
          current = current.nxt
        end
      end
      return 'Not in this list'
    end
    self.to_s
  end
end


list_1 = List.new(15)
puts list_1.to_s

puts list_1.insert("brian")
puts list_1.insert("ray")


puts list_1.search(3)
puts list_1.search(20)

# puts list_1
puts list_1.remove(3)
# puts list_1 + 'this is marker $$$$$$$$$$'
puts list_1.remove("brian")
puts list_1.remove("ray")
puts list_1.remove('zero')
puts list_1.remove(14)
puts list_1.remove(20)
puts list_1.remove(10)
puts list_1.remove(0)
# puts list_1.remove(1)
# puts list_1 + 'this is marker %%%%%%%%%%'
puts list_1.search(200)
puts list_1.search(2)










