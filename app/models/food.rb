class Food < ApplicationRecord

  has_many :nutrizations
  has_many :nutritions, through: :nutrizations
  has_many :foodables
  has_many :recipes, through: :foodables
end
