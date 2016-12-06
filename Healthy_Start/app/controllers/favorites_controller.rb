class FavoritesController < ApplicationController
before_action :require_user, only: [:create]
  def create
    @favorites = Recipe.find(params[:id])
    @favorites.inspect
       current_user.recipes << @favorites
        render json: @favorites
  end

end
