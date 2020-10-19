class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :location, null: false
      t.string :camera
      t.string :url, null: false
      t.boolean :shared, null: false, default: false
      t.string :date, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
