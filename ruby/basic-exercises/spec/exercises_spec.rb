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
