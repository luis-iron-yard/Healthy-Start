class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :recipe_name, :instruction, :food_image, :serving, :calorie
  has_many :foods

end
