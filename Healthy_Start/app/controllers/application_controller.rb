class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  acts_as_token_authentication_handler_for User
  # respond_to :json
end
