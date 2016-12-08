class QuotesController < ApplicationController

  def quote_hit
    @insperation = HTTParty.get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
    puts @insperation.inspect
    render json: @insperation
  end

end
