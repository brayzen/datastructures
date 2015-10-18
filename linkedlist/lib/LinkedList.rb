class Node
  attr_accessor :val, :nxt

  def initialize(val)
    @val = val
    @nxt = nil
  end
end



class List
  def initialize(number)
    @head = Node.new(0)
    current = @head
    1.upto(number) do |n|
      current.nxt = Node.new(n)
      # puts "this is Current.nxt: #{current.nxt}"
      current = current.nxt
      # puts "this is Current: #{current.val}, this is the Head: #{@head.val} and Head.nxt: #{@head.nxt}"
    end
      puts current.val while current = current.nxt && current.nxt
  end

  def insert(val)
    if @head == nil
      @head = Node.new(val)
    else
      current = Node.new(val)
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
      str += "#{current.val},"
      current = current.nxt
    end
    puts str
  end

  def remove(val)
    current = @head
    prev = @head
    loop do
      if current.val == val #step, change the current varibable to the next variable and check there.
        puts 'found it'
        prev.nxt = current.nxt
        return self.to_s
      else
        prev = current
        current = current.nxt
      end
    end
  end
end

list_1 = List.new(12)

list_2 = list_1.insert(88)

list_3 = list_1.insert("brian")

puts list_1.insert("Bray")

list_1.search("8")
list_1.search(88)
list_1.search(8)
list_1.search("Bray")

list_1.to_s

list_1.remove(8)
list_1.remove("brian")
list_1.remove("Bray")







