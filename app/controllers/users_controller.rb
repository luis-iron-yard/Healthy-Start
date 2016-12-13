class UsersController < ApplicationController
  before_action :require_user
  # GET '/users/:id' => 'users#show'
  def show
    @user = current_user
    render json: @user
  end

  def edit
    @user = current_user
    render json: @user
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render json: @user
      # Handle a successful update.
    else
      render 'edit'
    end
  end
end



private

def user_params
  params.permit(:email, :password, :username, :phone, :photo)
end
