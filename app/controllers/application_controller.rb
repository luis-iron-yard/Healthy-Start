class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # before_action :configure_permitted_parameters, if: :devise_controller?
  acts_as_token_authentication_handler_for User, fallback: :none
  # respond_to :json
  def require_user
    if !current_user
      render json: ["Looks like your not logged in, please login or sign up! "], status: :forbidden
    end
  end
  # 
  # protected

# def configure_permitted_parameters
#   added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
#   devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
#   devise_parameter_sanitizer.permit :account_update, keys: added_attrs
# end

end
