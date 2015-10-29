require_relative 'Hash_Node'

class List

  def initialize(key, val)
    @head = Node.new(key, val)
  end

  def set(key, val)
    current = Node.new(key, val)
    if @head == nil
      @head = current
    else
      current.nxt = @head
      @head = current
    end
    # puts "this is the current Head: #{@head.key}, the value is #{@head.val}"
  end

  def search(key)
    current = @head
    count = 0
    while current != nil do #step, change the current varibable to the next variable and check there.
      if current.key == key
        # puts "found it(#{current.key }) is the current.key, found #{count} links down the chain"
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

  def delete(key)
    current = @head
    prev = @head
    if current.key == key
      @head, current = current.nxt
    else
      while(current != nil)
        if current.key == key #step, change the current varibable to the next variable and check there.
          prev.nxt = current.nxt
          puts "deleted #{key}"
          return current.key
        else
          prev = current
          current = current.nxt
        end
      end
      return 'Could not find in this list'
    end
    self.to_s
  end
end

# list_a = List.new('brian', 'ray')
# p list_a









