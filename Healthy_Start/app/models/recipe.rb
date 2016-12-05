class Recipe < ApplicationRecord
  has_many :foodables
  has_many :foods, through: :foodables
  # validates_uniqueness_of :recipe
end
