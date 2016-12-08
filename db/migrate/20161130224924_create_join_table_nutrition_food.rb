class CreateJoinTableNutritionFood < ActiveRecord::Migration[5.0]
  def change
    create_join_table :nutritions, :foods, table_name: :nutrizations do |t|
      t.index [:nutrition_id, :food_id]
      t.index [:food_id, :nutrition_id]
    end
  end
end
