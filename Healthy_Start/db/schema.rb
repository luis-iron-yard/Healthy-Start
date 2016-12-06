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

ActiveRecord::Schema.define(version: 20161206183532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "complaints", force: :cascade do |t|
    t.string   "type"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "favorites", id: false, force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "recipe_id", null: false
    t.index ["recipe_id", "user_id"], name: "index_favorites_on_recipe_id_and_user_id", using: :btree
    t.index ["user_id", "recipe_id"], name: "index_favorites_on_user_id_and_recipe_id", using: :btree
  end

  create_table "foodables", id: false, force: :cascade do |t|
    t.integer "food_id",   null: false
    t.integer "recipe_id", null: false
    t.index ["food_id", "recipe_id"], name: "index_foodables_on_food_id_and_recipe_id", using: :btree
    t.index ["recipe_id", "food_id"], name: "index_foodables_on_recipe_id_and_food_id", using: :btree
  end

  create_table "foods", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
  end

  create_table "interests", force: :cascade do |t|
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "interestable_id"
    t.string   "interestable_type"
    t.integer  "user_id"
    t.index ["interestable_type", "interestable_id"], name: "index_interests_on_interestable_type_and_interestable_id", using: :btree
  end

  create_table "nutritions", force: :cascade do |t|
    t.string   "nutrient"
    t.text     "benefits"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nutrizations", id: false, force: :cascade do |t|
    t.integer "nutrition_id", null: false
    t.integer "food_id",      null: false
    t.index ["food_id", "nutrition_id"], name: "index_nutrizations_on_food_id_and_nutrition_id", using: :btree
    t.index ["nutrition_id", "food_id"], name: "index_nutrizations_on_nutrition_id_and_food_id", using: :btree
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "recipe_name"
    t.string   "instruction"
    t.string   "food_image"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                             default: "", null: false
    t.string   "encrypted_password",                default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                     default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
    t.string   "username"
    t.string   "photo"
    t.string   "phone"
    t.string   "authentication_token",   limit: 30
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
