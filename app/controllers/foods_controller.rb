class FoodsController < ApplicationController

  def index
    @food = Food.all
    render json: @food
  end
# shows individual foods
  def show
    @food = Food.find(params[:id])
    render json: @food, include: ["recipes.foods"]
  end


end
