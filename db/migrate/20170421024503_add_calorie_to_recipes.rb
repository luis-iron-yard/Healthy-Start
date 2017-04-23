class AddCalorieToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :calorie, :integer
  end
end
