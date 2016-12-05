class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # has_one :interest
  has_many :favorites
  has_many :recipes, through: :favorites
  validates :email, uniqueness: true
  validates_uniqueness_of :user_id, scope: :recipe_id
end
