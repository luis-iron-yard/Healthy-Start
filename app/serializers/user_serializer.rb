class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :phone, :photo, :authentication_token
  has_many :recipes

  def photo
     Refile.attachment_url(object, :photo, :fit, 800, 800, format: "png")
   end
end
