class QuotesController < ApplicationController

  def quote_hit
    @insperation = HTTParty.get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
    puts @insperation.inspect
    render json: @insperation
  end

end

# response = Unirest.post "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
#   headers:{
#     "X-Mashape-Key" => "wMsFnzSC51mshYiJ2ZsbkwcuDLaKp1LRjUdjsndu3kXuuT1oTw",
#     "Content-Type" => "application/x-www-form-urlencoded",
#     "Accept" => "application/json"
#   }
