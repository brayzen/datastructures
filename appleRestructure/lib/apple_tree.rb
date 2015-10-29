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
    @current.left.inorder if @current.left
    puts @current.name
    @current.right.inorder if @current.right
  end

  def preorder
    puts @current.name
    @current.left.preorder if @current.left
    @current.right.preorder if @current.right
  end

  def postorder
    @current.left.postorder if @current.left
    @current.right.postorder if @current.right
    puts @current.name
  endgs

end








