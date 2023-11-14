class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :habit_id
      t.boolean :completed, default: false
      t.boolean :skipped, default: false
      t.datetime :date

      t.timestamps
    end
  end
end
