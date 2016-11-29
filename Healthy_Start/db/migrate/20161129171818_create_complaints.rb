class CreateComplaints < ActiveRecord::Migration[5.0]
  def change
    create_table :complaints do |t|
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
