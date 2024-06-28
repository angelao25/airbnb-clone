class AddAddressColumnsToProperties < ActiveRecord::Migration[7.1]
  def change
    add_column :properties, :address_1, :string
    add_column :properties, :address_2, :string
  end
end
