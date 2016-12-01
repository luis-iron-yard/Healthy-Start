Rails.application.routes.draw do

  # resources :interests
    # resources :complaints
      devise_for :users, controllers: {
        registrations: 'users/registrations',
        sessions: 'users/sessions'
      }
  resources :nutritions
  resources :foods
  root to: 'home#index'

  get '/:thing' => 'home#index'
# Need to leave get/thing as last line of code so that front end can use react to redirect where needed
# For getting nutrions, send request to == > GET /nutritions
# To login the the end point will be  ==> POST to  /users/sign_in
# If you want to sign_up the end point will be ==>  POST to /users
# If you need to reset password send request to this end point ==> /users/password/new
# *******************Below are there rails routes, just a quick reference ***************

    # ***********Prefix Verb   URI Pattern                    Controller#Action   ******
    #         new_user_session GET    /users/sign_in(.:format)       users/sessions#new
    #             user_session POST   /users/sign_in(.:format)       users/sessions#create
    #     destroy_user_session DELETE /users/sign_out(.:format)      users/sessions#destroy
    #            user_password POST   /users/password(.:format)      devise/passwords#create
    #        new_user_password GET    /users/password/new(.:format)  devise/passwords#new
    #       edit_user_password GET    /users/password/edit(.:format) devise/passwords#edit
    #                          PATCH  /users/password(.:format)      devise/passwords#update
    #                          PUT    /users/password(.:format)      devise/passwords#update
    # cancel_user_registration GET    /users/cancel(.:format)        users/registrations#cancel
    #        user_registration POST   /users(.:format)               users/registrations#create
    #    new_user_registration GET    /users/sign_up(.:format)       users/registrations#new
    #   edit_user_registration GET    /users/edit(.:format)          users/registrations#edit
    #                          PATCH  /users(.:format)               users/registrations#update
    #                          PUT    /users(.:format)               users/registrations#update
    #                          DELETE /users(.:format)               users/registrations#destroy
    #               nutritions GET    /nutritions(.:format)          nutritions#index
    #                          POST   /nutritions(.:format)          nutritions#create
    #            new_nutrition GET    /nutritions/new(.:format)      nutritions#new
    #           edit_nutrition GET    /nutritions/:id/edit(.:format) nutritions#edit
    #                nutrition GET    /nutritions/:id(.:format)      nutritions#show
    #                          PATCH  /nutritions/:id(.:format)      nutritions#update
    #                          PUT    /nutritions/:id(.:format)      nutritions#update
    #                          DELETE /nutritions/:id(.:format)      nutritions#destroy
    #                    foods GET    /foods(.:format)               foods#index
    #                          POST   /foods(.:format)               foods#create
    #                 new_food GET    /foods/new(.:format)           foods#new
    #                edit_food GET    /foods/:id/edit(.:format)      foods#edit
    #                     food GET    /foods/:id(.:format)           foods#show
    #                          PATCH  /foods/:id(.:format)           foods#update
    #                          PUT    /foods/:id(.:format)           foods#update
    #                          DELETE /foods/:id(.:format)           foods#destroy
    #                     root GET    /                              home#index
    #                          GET    /:thing(.:format)              home#index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
