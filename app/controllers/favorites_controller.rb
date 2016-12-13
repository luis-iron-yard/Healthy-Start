class FavoritesController < ApplicationController
before_action :require_user, only: [:create, :index, :destroy]

# POST to /api/favorites - makes a new favorite
  def create
    @favorites = Recipe.find(params[:id])
       current_user.recipes << @favorites
        render json: @favorites
  end
# GET to api/favorites - shows a user their favorites
  def index
    @favorites = current_user.recipes
    render json: @favorites
  end
# DELETE /api/favorites/:id - user deletes a favorite
  def destroy
    @favorites = current_user.recipes
    @favorites = Favorites.find(params[:id]).destroy

    # @favorites = current_user.recipe.destroy
    redirect_to :action => 'index'

  end

end
