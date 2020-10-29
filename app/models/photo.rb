class Photo < ApplicationRecord
  validates :location, presence: true
  validates :url, presence: true
  validates :shared, presence: true
  validates :date, presence: true

  belongs_to :user
end