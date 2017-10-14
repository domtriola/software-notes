require_relative 'gravatar_generator'

class User
  include GravatarGenerator

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def unlock_lorem_pixel
    User.generates_lorem_pixel
  end

  def unlock_fill_murray
    User.generates_fill_murray
  end
end
