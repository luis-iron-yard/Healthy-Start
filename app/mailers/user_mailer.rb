class UserMailer < ApplicationMailer
  default from: 'welcome@HealthyStart.org'

  def welcome_email(user)
    @user = user
    @url  = 'https://healthystart.herokuapp.com/'
    mail(to: @user.email, subject: 'Welcome to Healthy Start')
  end
end
