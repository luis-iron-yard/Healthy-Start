class AddNameToFoods < ActiveRecord::Migration[5.0]
  def change
    add_column :foods, :name, :string
  end
end
