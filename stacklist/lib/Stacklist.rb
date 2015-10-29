require_relative 'Node'

class Stacklist
  def initialize(number)
    @head = Node.new(0)
    current = @head
    1.upto(number) do |n|
      current.nxt = Node.new(n)
      current = current.nxt
    end
    puts current.val while current = current.nxt && current.nxt
  end

  def push(val)
    if @head == nil
      @head = Node.new(val)
    else
      current = Node.new(val, @head)
      @head = current
    end
    puts "this is the current Head: #{@head.val}, head points at #{@head.nxt}"
  end

  def pop
    current = @head
    puts "#{current.nxt} is the Node before hand"
    puts "#{current.val} is no longer in the list"
    @head = current.nxt
    puts "new head is: #{@head}" + @head.to_s
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
end



