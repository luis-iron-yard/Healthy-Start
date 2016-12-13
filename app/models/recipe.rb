class Recipe < ApplicationRecord
  has_many :foodables
  has_many :foods, through: :foodables
  has_many :favorites
  # validates_uniqueness_of :recipe
end
