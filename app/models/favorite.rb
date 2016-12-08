class Favorite < ApplicationRecord
  belongs_to :recipe
  belongs_to :user
  validates_uniqueness_of :user_id, scope: :recipe_id


end
