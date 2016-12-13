class QuotesController < ApplicationController

  # calls forismatic api for a random motivational quote
  def quote_hit
    @motivation = HTTParty.get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
    render json: @motivation
  end

end
