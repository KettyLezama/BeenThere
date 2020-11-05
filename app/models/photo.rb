class Photo < ApplicationRecord
  validates :location, presence: true
  validates :url, presence: true
  validates :date, presence: true

  belongs_to :user
  mount_uploader :file, PhotoUploader 
end