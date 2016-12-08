class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :recipe_name, :instruction, :food_image
  has_many :foods

end
