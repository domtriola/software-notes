require_relative 'fetch_image'

module GravatarGenerator
  def self.included(other)
    puts "Extending #{other} with #{self}"
    other.extend(ImageGenerationOptions)
  end

  module ImageGenerationOptions
    def method_missing(method, *args, &block)
      if method.to_s =~ /generates_(\w+)/
        send($1)
      else
        super
      end
    end

    # Ensure #respond_to? returns true for 'generates' methods and allow
    # 'generates' methods to work with #method
    def respond_to_missing?(method, include_private = false)
      method.to_s.start_with?('generates_') || super
    end

    def lorem_pixel
      puts "Including LoremPixel"
      include LoremPixel
    end

    def fill_murray
      puts "Including FillMurray"
      include FillMurray
    end
  end

  module LoremPixel
    include FetchImage

    def method_missing(method, *args, &block)
      if method =~ /generate_(\w+)_(\d+)x(\d+)/
        subject, width, height = $1, $2, $3
        username = self.name
        label = "#{subject}_#{width}x#{height}"

        fetch_and_save("http://lorempixel.com/#{width}/#{height}/#{subject}/",
                       username, label)
      else
        super
      end
    end

    def respond_to_missing?(method, include_private = false)
      method.to_s.start_with?('generate_') || super
    end
  end

  module FillMurray
    include FetchImage

    def method_missing(method, *args, &block)
      if method =~ /generate_fill(_\w+)?_(\d+)x(\d+)/
        subject, width, height = $1, $2, $3
        username = self.name
        label = "fill_#{width}x#{height}"

        subject = subject == '_grey' ? 'g/' : ''

        fetch_and_save("http://www.fillmurray.com/#{subject}#{width}/#{height}",
                       username, label)
      else
        super
      end
    end

    def respond_to_missing?(method, include_private = false)
      method.to_s.start_with?('generate_') || super
    end
  end
end
