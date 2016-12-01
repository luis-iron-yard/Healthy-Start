class FoodsController < ApplicationController

  def index
    @food = Food.all
    render json: @food 
  end

  def create
  end

end
