class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.string :instruction
      t.string :food_image
      t.timestamps
    end
  end
end
