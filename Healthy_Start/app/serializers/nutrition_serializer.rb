class NutritionSerializer < ActiveModel::Serializer
  attributes :id, :nutrient, :benefits
  has_many :foods
  
end
