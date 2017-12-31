require 'open-uri'

module FetchImage
  def fetch_and_save(uri, username, label)
    IO.copy_stream(open(uri), "gravatars/#{username}_#{label}.png")
  end
end
