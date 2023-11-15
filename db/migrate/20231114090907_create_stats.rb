class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :habit_id
      t.string :status
      t.date :date

      t.timestamps
    end
  end
end
