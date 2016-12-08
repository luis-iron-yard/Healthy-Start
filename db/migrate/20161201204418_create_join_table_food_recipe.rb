class CreateJoinTableFoodRecipe < ActiveRecord::Migration[5.0]
  def change
    create_join_table :foods, :recipes, table_name: :foodables  do |t|
      t.index [:food_id, :recipe_id]
      t.index [:recipe_id, :food_id]
    end
  end
end
