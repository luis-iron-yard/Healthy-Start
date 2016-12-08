class Foodable < ApplicationRecord
  belongs_to :food
  belongs_to :recipe
end
