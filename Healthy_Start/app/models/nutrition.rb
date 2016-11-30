class Nutrition < ApplicationRecord
  has_many :interests, as: :interestable
end
