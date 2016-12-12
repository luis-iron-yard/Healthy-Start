# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def saved_recipe
    UserMailer.welcome_email(User.last)
  end
end
