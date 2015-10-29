require_relative 'apple_node'
require 'minitest'

class AppleTree
  attr_accessor :name, :left, :right

  def initialize(name, left = nil , right = nil)
    @name = name
    @left = left || nil
    @right = right || nil
    @current = self
  end

  def inorder
    if @current.left
      @current.left.inorder
    end
    puts @current.name
    if @current.right
      @current.right.inorder
    end
  end

  def preorder
    puts @current.name
    if @current.left
      @current.left.inorder
    end
    if @current.right
      @current.right.inorder
    end
  end

  def postorder
    if @current.left
      @current.left.inorder
    end
    if @current.right
      @current.right.inorder
    end
    puts @current.name
  end


end








