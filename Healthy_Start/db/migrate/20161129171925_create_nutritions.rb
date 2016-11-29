class CreateNutritions < ActiveRecord::Migration[5.0]
  def change
    create_table :nutritions do |t|
      t.string :nutrient
      t.text :benefits

      t.timestamps
    end
  end
end
