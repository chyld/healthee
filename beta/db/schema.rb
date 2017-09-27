# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170927032224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "logs", force: :cascade do |t|
    t.date "date", null: false
    t.integer "active_calories"
    t.integer "passive_calories"
    t.integer "burned_calories"
    t.integer "consumed_calories"
    t.integer "net_calories"
    t.float "net_pounds"
    t.float "actual_weight"
    t.float "total_distance_miles", default: 0.0
    t.integer "total_exercise_minutes", default: 0
    t.integer "seven_minute", default: 0
    t.boolean "is_sugar", default: false
    t.boolean "is_fast", default: false
    t.boolean "is_sick", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
