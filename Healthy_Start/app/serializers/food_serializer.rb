class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :recipes
end
