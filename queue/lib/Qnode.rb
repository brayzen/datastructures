class Qnode
  attr_accessor :val, :nxt, :prv

  def initialize(val)
    @val = val
    @nxt = nil
    @prv = nil
  end
end
