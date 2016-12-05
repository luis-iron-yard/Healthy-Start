class UsersController < ApplicationController

  # GET '/users/:id' => 'users#show'
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def edit
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
      # Handle a successful update.
    else
      render 'edit'
    end
  end

end
