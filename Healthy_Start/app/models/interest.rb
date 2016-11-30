class Interest < ApplicationRecord
  belongs_to :interestable, polymorphic: true
end
