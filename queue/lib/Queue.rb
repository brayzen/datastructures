require_relative 'Qnode'

class Queue
  def initialize(number)
    @head = Qnode.new(0)
    current = @head
    1.upto(number) do |n|
      current.nxt = Qnode.new(n)
      current.prv = current
      current = current.nxt
      @tail = current
    end

      puts current.val while current = current.nxt && current.nxt
      # puts current.prv while current = current.prv && current.prv
  end

  def enqueue(val)
    current = @tail
    @tail = Qnode.new(val)
    @tail.prv = current
    current.nxt = @tail
    puts "this is the current tail: #{@tail.val}, tail should point to nil: #{@tail.nxt}"
    return @tail.val
  end

  def size
    count = 1
    current = @head
    return 0 if current == nil
    while current.nxt != nil do
      count += 1
      current = current.nxt
    end
    puts "FROM size method:: this size of this list is #{count} elements long"
    count
  end

  def to_s
    current = @head
    str = ""
    while current.nxt != nil do
      str += "#{current.val},"
      current = current.nxt
    end
    str += "#{current.val},"
  end

  def dequeue
    current = @head
    @head = current.nxt
    self
  end

  def last
    @tail.val
  end
end


# list_1 = Queue.new(15)
# puts list_1.to_s

# puts list_1.enqueue("brian")
# puts list_1.to_s
# puts list_1.enqueue("Ray")
# puts list_1.dequeue
# puts list_1.dequeue
# puts list_1.dequeue

# list_1.size
# list_0 = 0
# list_0.size

# puts list_1.search(3)
# puts list_1.search(20)

# puts list_1
# puts list_1.remove(3)
# puts list_1
# puts list_1.remove("brian")
# puts list_1.remove(1)
# puts list_1










