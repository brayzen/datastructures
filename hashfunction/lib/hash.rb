require_relative 'hash_list'

class HashBrian
  attr_accessor :key, :value

  def initialize(key, value)
    @array_hash = (0..9).map { |x| x = nil }
    set_key(key, value)
  end

  def index(key)
    sum = 0
    key.chars.each { |char| sum += char.ord }
    index = sum % 9
    return index
  end

  def set_key(key, value)
    index = index(key)
    # puts index
    if @array_hash[index] == nil
      @array_hash[index] = List.new(key, value)
    else
      @array_hash[index].set(key, value)
    end
  end

  def get(key)
    index = index(key)
    # puts @array_hash[3]
    if @array_hash[index].search(key) == nil
      "Couldn't find"
    else
      @array_hash[index].search(key)
    end
  end

  def delete(key)
    index = index(key)
    @array_hash[index].delete(key)
  end





end

# hash1 = HashBrian.new('brian', 'ray')
# # puts hash1.key
# # puts hash1.hash1("bray")
# # puts '%%%%%%%%%%%%%%%'
# # puts hash1.hash1('whateve')
# # puts '%%%%%%%%%%%%%%%'
# # puts hash1.hash1("Brian")
# # puts '%%%%%%%%%%%%%%%'
# hash1.set_key("brizzle", "foshizzle")
# hash1.set_key("b", "sizzler")
# hash1.set_key("for", "real")
# hash1.set_key("tit", "tat")
# hash1.set_key("tit", "tat")
# hash1.set_key("tik", "tak")
# hash1.set_key("rit", "rat")
# hash1.set_key("whateve", "Isay")
# p hash1.get("for")
# p hash1.get("tik")
# p hash1.get("whateve")
# p hash1.get("brian")

# p hash1.delete("brian")
# p hash1.get("brian")

# p hash1

