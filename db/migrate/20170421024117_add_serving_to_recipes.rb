class AddServingToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :serving, :integer
  end
end
