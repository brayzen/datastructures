class Array
  def divide
    list = self
    if list.length <= 1
      list
    else
      middle = list.length/2
      left = list[0...middle].divide
      right = list[middle..-1].divide
      return conquer(left, right)
    end
  end

  def conquer(left, right)
    return right if left.empty?
    return left if right.empty?
    if left[0] <= right[0]
      [left[0]] + conquer(left[1..-1], right)
    else
      [right[0]] + conquer(left, right[1..-1])
    end
  end

end

array1 = [22, 34, 89, 45, 3, 26, 13, 2, 71]
array1.divide

