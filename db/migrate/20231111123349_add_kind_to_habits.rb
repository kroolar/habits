class AddKindToHabits < ActiveRecord::Migration[7.0]
  def change
    add_column :habits, :kind, :string
  end
end
