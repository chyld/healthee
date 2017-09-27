class CreateLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :logs do |t|
      t.date :date, null: false

      t.integer :active_calories
      t.integer :passive_calories
      t.integer :burned_calories
      t.integer :consumed_calories
      t.integer :net_calories
      t.float :net_pounds
      t.float :actual_weight

      t.float :total_distance_miles, default: 0
      t.integer :total_exercise_minutes, default: 0
      t.integer :seven_minute, default: 0

      t.boolean :is_sugar, default: false
      t.boolean :is_fast, default: false
      t.boolean :is_sick, default: false
      t.timestamps
    end
  end
end
