require_relative '../lib/Queue'



def test_queue_size(val)
  list = Queue.new(val)
  puts list.size == val + 1
  puts "TRUE???,this is the list size: #{list.size}"
end

def test_dequeue
  list_2 = Queue.new(10)
  list_2.dequeue
  p list_2.size == 10
  list_2.dequeue
  p list_2.size == 9
  list_2.dequeue.dequeue
  p list_2.size == 7
  p list_2.to_s
end

def test_enqueue
  list_2 = Queue.new(10)    # make a list ( with 0 will make list size VAL + 1 )
  list_2.enqueue("brian")   # add to list
  p list_2.size == 12       # check size has increased by 1
  p list_2.to_s
  p list_2.last == "brian"
  list_2.enqueue("ray")
  p list_2.size == 13       # true
  p list_2.to_s
  p list_2.last == "ray"    # true
end

test_queue_size(15)
test_dequeue
test_enqueue

