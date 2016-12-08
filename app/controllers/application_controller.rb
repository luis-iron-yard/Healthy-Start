class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  acts_as_token_authentication_handler_for User, fallback: :none
  # respond_to :json
  def require_user
    if !current_user
      render json: ["Looks like your not logged in, please login or sign up! "], status: :forbidden
    end
  end
end
