class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :phone, :photo, :authentication_token
  has_many :recipes

end
