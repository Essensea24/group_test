class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :cuisine
      t.string :location
      t.float :price

      t.timestamps null: false
    end
  end
end
