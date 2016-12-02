class RecipesController < ApplicationController

ENV["edamam_app_id"]
ENV["edamam_key"]
# The ENV variable are storing the app_id and also the key so I can use them anytime they are needed

  def index
    @recipe = Recipe.all
    render json: @recipe
  end
  The search
  def search
    @response = HTTParty.get('https://api.edamam.com/search?q=brocilli&app_id={edamam_app_id}&app_key={edamam_key}')

    if params[:food].present?
      @food = params:[food]
      render json: @response.pots,
      .map{|stuff| custom_params}
    else
      render json: client

  end


private

  def custom_params(pots)
    {
      name: pots.label, 
    }
  end


end
