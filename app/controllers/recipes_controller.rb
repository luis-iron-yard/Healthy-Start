class RecipesController < ApplicationController
  # Did not require user to be logged in for these actions so a guest can also view foods
  def index
    @recipe = Recipe.all
    render json: @recipe
  end

  # Calls edamam api for recipes and at the same time caches the results
  def search
    if params[:food]
      num = rand(100)
      @things = Rails.cache.fetch("#{params[:food]}/search/#{num}", expires_in:
      12.hours) do
        @response = HTTParty.get("https://api.edamam.com/search?q=#{params[:food]}&from=#{num}&to=#{num+24}", headers: { 'app_id' => ENV['edamam_app_id'], 'app_key' => ENV['edamam_key'] })
        @recipies = []
        @response['hits'].each do |nut|
          recipe = Recipe.find_or_create_by(
            recipe_name: nut['recipe']['label'],
            instruction: nut['recipe']['url'],
            food_image: nut['recipe']['image'],
            serving: nut['recipe']['yield'],
            calorie: nut['recipe']['calories']
          )
          nut['recipe']['ingredients'].each do |fd|
            food = Food.find_or_initialize_by(
              name: fd['food']
            )
            recipe.foods << food unless recipe.foods.include?(food)
          end
          @recipies << recipe
        end
        @recipies
      end
      render json: @things
    else
      render json: []
    end
  end

  # shows and individual recipe
  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end
