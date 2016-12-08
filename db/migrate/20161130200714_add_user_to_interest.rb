class AddUserToInterest < ActiveRecord::Migration[5.0]
  def change
    add_column :interests, :interestable_id, :integer
    add_column :interests, :interestable_type, :string
    add_column :interests, :user_id, :integer
    add_index :interests, [:interestable_type, :interestable_id]
  end


end
