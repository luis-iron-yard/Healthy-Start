class UserMailer < ApplicationMailer
  default from: 'welcome@HealthyStart.org'

  def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to Healthy Start')
  end
end
