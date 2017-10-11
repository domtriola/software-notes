require 'rspec'
require 'exercises'

describe Array do
  describe '#my_each' do
    it "should call the given block with each item of the array" do
      expect do |block|
        [1, 2, 3].my_each(&block)
      end.to yield_successive_args(1, 2, 3)
    end
  end

  describe '#my_reduce' do
    it "should reduce the items of the array with the given proc" do
      result = [1, 2, 3, 4].my_reduce { |accum, el| accum + el }

      expect(result).to eq(10)
    end

    it "should use the given argument given as a seed if present" do
      result = [1, 2, 3, 4].my_reduce(11) { |accum, el| accum + el }

      expect(result).to eq(21)
    end
  end

  describe '#my_uniq' do
    it "should return a copy of the array without duplicate elements" do
      result = [0, 1, 1, 2, 3, 2, 2, 4].my_uniq

      expect(result).to eq([0, 1, 2, 3, 4])
    end

    it "does not modify the original array" do
      original = [0, 1, 1, 2, 3, 2, 2, 4]
      original.my_uniq

      expect(original).to eq([0, 1, 1, 2, 3, 2, 2, 4])
    end
  end

  describe '#my_flatten' do
    it "should return a flattened copy of the array" do
      result = [1, [2, [3, [4]]], [5, 6]].flatten

      expect(result).to eq([1, 2, 3, 4, 5, 6])
    end

    it "does not modify the original array" do
      original = [1, [2, [3, [4]]], [5, 6]]
      original.my_uniq

      expect(original).to eq([1, [2, [3, [4]]], [5, 6]])
    end
  end
end

describe 'fizz_buzz' do
  it "should return fizz-buzzified numbers up to the max in an array" do
    result = fizz_buzz(16)
    expect(result).to eq([
      1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13,
      14, "FizzBuzz", 16
    ])
  end
end

describe 'fibonacci' do
  it "should return the first n fibonacci numbers in an array" do
    expect(fibonacci(1)).to eq([1])
    expect(fibonacci(2)).to eq([1, 1])
    expect(fibonacci(3)).to eq([1, 1, 2])
    expect(fibonacci(10)).to eq([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  end
end

describe 'merge_sort' do
  it "sorts an array" do
    100.times do
      result = merge_sort([1, 2, 3, 4, 5, 6, 7].shuffle)
      expect(result).to eq([1, 2, 3, 4, 5, 6, 7])
    end
  end
end
