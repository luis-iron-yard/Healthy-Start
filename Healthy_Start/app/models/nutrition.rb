class Nutrition < ApplicationRecord
  # has_many :interests, as: :interestable
  has_many :nutrizations
  has_many :foods, through: :nutrizations

end
