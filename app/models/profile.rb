class Profile < ApplicationRecord
  belongs_to :user

  geocoded_by :address
  after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }

  def address
    # [address_1, address_2, city, state, zip_code, country].compact.join(', ')
    [state, country].compact.join(', ')
  end
end
