class User < ApplicationRecord
  after_create :send_welcome
  acts_as_token_authenticatable
  attachment :photo
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # has_one :interest
  has_many :favorites
  has_many :recipes, through: :favorites
  validates :email, uniqueness: true
  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
  validates :username, uniqueness: true

  attr_accessor :seeded

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where(['lower(username) = :value OR lower(email) = :value', { value: login.downcase }]).first
    elsif conditions.key?(:username) || conditions.key?(:email)
      where(conditions.to_h).first
    end
      end

  private

  def send_welcome
    UserMailer.welcome_email(self).deliver unless seeded
  end
end
