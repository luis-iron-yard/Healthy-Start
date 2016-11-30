class Complaint < ApplicationRecord
  has_many :interests, as: :interestable
end
