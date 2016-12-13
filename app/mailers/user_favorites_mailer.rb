class UserFavoritesMailer < ApplicationMailer

  default from: 'recipes@HealthyStart.org'

  def saved_recipe(favorite)
    @user = favorite.user
    @recipe = favorite.recipe

    mail(to: @user.email,
    subject: 'Saved recipe  from Healthy Start!')
  end

end
