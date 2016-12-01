class Food < ApplicationRecord

  has_many :nutrizations
  has_many :nutritions, through: :nutrizations
end
