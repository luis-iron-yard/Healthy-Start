class AddUsernamePhotoPhoneToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string
    add_column :users, :photo, :string
    add_column :users, :phone, :integer
  end
end
