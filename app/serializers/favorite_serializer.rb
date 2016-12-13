class FavoriteSerializer < ActiveModel::Serializer
  attributes :recipe_id :user_id
  belongs_to :recipes
  belongs_to :users
end
