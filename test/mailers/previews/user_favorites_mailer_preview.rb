# Preview all emails at http://localhost:3000/rails/mailers/user_favorites_mailer
class UserFavoritesMailerPreview < ActionMailer::Preview
  def saved_recipe
    UserFavoritesMailer.saved_recipe(Favorite.first)
  end
end
