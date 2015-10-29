require_relative '../lib/mergesort'

p array1 = [22, 34, 89, 45, 3, 26, 13, 2, 71]
p array1.divide == array1.sort

p array2 = [87, 2, 5, 8, 7, 13, 16, 22, 1]
p array2.shuffle.divide == array2.sort

p array3 = [34, 67, 21, 234, 112334, 11, 23].sort
p array3.divide == array3.sort

