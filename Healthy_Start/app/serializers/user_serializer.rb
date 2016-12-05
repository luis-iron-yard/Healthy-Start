class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :phone, :photo 
  has_many :recipes

end
