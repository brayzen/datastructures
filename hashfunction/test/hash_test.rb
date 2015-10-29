require_relative '../lib/hash.rb'
require 'benchmark'
# p word_array.length
# puts word_array[0..100]

def bnchmrk
  word_array = File.read("/usr/share/dict/words").split(/\W/)
  test_hash = HashBrian.new("brian", "nairb")
  word_array.each do |word|
    key = word.downcase
    value = word.downcase.reverse
    test_hash.set_key(key, value)
  end
end

Benchmark.bm do |x|
  x.report { bnchmrk }
end


