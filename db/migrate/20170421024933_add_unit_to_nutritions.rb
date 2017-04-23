class AddUnitToNutritions < ActiveRecord::Migration[5.0]
  def change
    add_column :nutritions, :unit, :string
  end
end
