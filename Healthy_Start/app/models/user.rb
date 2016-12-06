class User < ApplicationRecord
  after_create :send_welcome
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # has_one :interest
  has_many :favorites
  has_many :recipes, through: :favorites
  validates :email, uniqueness: true

  private

  def send_welcome
    UserMailer.welcome_email(self).deliver
  end
end
