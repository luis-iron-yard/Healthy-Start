class NutritionsController < ApplicationController

  def index
    @nutrition = Nutrition.all

    render json: @nutrition
  end

end
