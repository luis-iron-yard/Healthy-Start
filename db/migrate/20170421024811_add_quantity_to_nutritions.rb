class AddQuantityToNutritions < ActiveRecord::Migration[5.0]
  def change
    add_column :nutritions, :quantity, :integer
  end
end
