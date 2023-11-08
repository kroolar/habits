class CreateHabits < ActiveRecord::Migration[7.0]
  def change
    create_table :habits do |t|
      t.string :name
      t.string :icon
      t.string :color
      t.string :description
      t.json :days
      t.integer :user_id

      t.timestamps
    end
  end
end
