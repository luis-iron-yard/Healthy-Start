class Favorite < ApplicationRecord
  after_create :send_favorite
  belongs_to :recipe
  belongs_to :user
  validates_uniqueness_of :user_id, scope: :recipe_id

  private

  def send_favorite
    UserFavoritesMailer.saved_recipe(self).deliver
  end
end
