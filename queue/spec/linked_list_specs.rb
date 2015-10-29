require_relative '../lib/Qnode'
require_relative '../lib/Queue'



def test1
  list_1 = List.new(12)
  answer = "88,0,1,2,3,4,5,6,7,8,9,10,11,"
  puts list_1.insert(88) == answer
  puts list_1
end

def test2
  list_1 = List.new(12)
  puts answer = "88,0,1,2,3,4,5,6,7,8,9,10,11,"
  list_1.insert("brian") == answer
end

def test3
  list_1 = List.new(12)
  answer = "'Bray','brian',88,0,1,2,3,4,5,6,7,8,9,10,11,)"
  puts list_1.insert("Bray") == answer
end

def test4
  list_1 = List.new(12)
  list_1.search(88)
  answer = 88
  puts "CORRECT" if list_1.search(88) == 88
end

def test5
  list_1 = List.new(12)
  answer = list_1.to_s
  list_1.to_s == answer
  puts "this is testing 'to_s'"
end

def test6
  list_1 = List.new(12)
  list_2 = list_1.to_s
  list_1.remove(10)
  answer = 10
  puts '$$$$$$$$$$$$$$$$$'
  puts list_1
  puts '$$$$$$$$$$$$$$$$$'
  puts list_2
  puts '$$$$$$$$$$$$$$$$$'
  puts list_1 == list_2
  puts "this is testing remove, should get false"
end

def test6
  list_1 = List.new(12)
  list_2 = list_1.to_s
  list_1.remove("brian")
  answer = "brian"
  puts '$$$$$$$$$$$$$$$$$'
  puts list_1
  puts '$$$$$$$$$$$$$$$$$'
  puts list_2
  puts '$$$$$$$$$$$$$$$$$'
  puts list_1 == list_2
  puts "this is testing remove, should get false"
end


test1
test2
test3
test4
test5
test6


