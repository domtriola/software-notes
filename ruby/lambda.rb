# Let's say you would like to assemble a chess board with different pieces.
# Each piece needs to be instantiated with its position.
# One way you could create the board is to plan it out with strings, and then
# use a map of lambdas to create the pieces.

require 'singleton'

class NullPiece
  include Singleton
end

class Rook
  def initialize(pos)
    @pos = pos
  end
end


GRID = [
  "ee",
  "er"
].freeze

# Lambdas
PIECES = {
  r: lambda { |pos| return Rook.new(pos) },
  e: lambda { |_| return NullPiece.instance }
}.freeze

def instantiate_board(grid)
  grid.map.with_index do |row, y|
    row.split("").map.with_index do |space, x|
      PIECES[space.to_sym].call([x, y])
    end
  end
end

instantiate_board(GRID)
# => [
#  [#<NullPiece:0x007fe1938560c0>, #<NullPiece:0x007fe1938560c0>],
#  [#<NullPiece:0x007fe1938560c0>, #<Rook:0x007fe193855cb0 @pos=[1, 1]>]
# ]


# Procs
PIECES_WITH_PROCS = {
  r: proc { |pos| return Rook.new(pos) },
  e: proc { |_| return NullPiece.instance }
}.freeze

def instantiate_board_with_procs(grid)
  grid.map.with_index do |row, y|
    row.split("").map.with_index do |space, x|
      PIECES_WITH_PROCS[space.to_sym].call([x, y])
    end
  end
end

instantiate_board_with_procs(GRID)
# lambda.rb:49:in `block in <main>': unexpected return (LocalJumpError)
# 	from lambda.rb:55:in `block (2 levels) in instantiate_board_with_procs'
# 	from lambda.rb:54:in `map'
# 	from lambda.rb:54:in `with_index'
# 	from lambda.rb:54:in `block in instantiate_board_with_procs'
# 	from lambda.rb:53:in `map'
# 	from lambda.rb:53:in `with_index'
# 	from lambda.rb:53:in `instantiate_board_with_procs'
# 	from lambda.rb:60:in `<main>'


# NOTE: You could make the proc version work by using an implicit return:
PIECES_WITH_PROCS = {
  r: proc { |pos| Rook.new(pos) },
  e: proc { |_| NullPiece.instance }
}.freeze
