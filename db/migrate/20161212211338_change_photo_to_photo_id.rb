class ChangePhotoToPhotoId < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :photo, :photo_id
  end
end
