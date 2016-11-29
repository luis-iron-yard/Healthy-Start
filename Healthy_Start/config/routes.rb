Rails.application.routes.draw do
      devise_for :users, controllers: {
        registrations: 'users/registrations'
      }

  resources :nutritions
  resources :complaints
  # devise_for :users
  root to: 'home#index'
# To login the the end point will be ==> users/sign_in
# If you want to sign_up the end point will be ==> user/sign_in
# If you need to reset password send request to this end point ==> /users/password/new

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
