class ChangeCalorieToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :recipes, :calorie, :float
  end
end
