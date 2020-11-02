class PhotoShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :camera, :url, :shared, :date, :description

  belongs_to :user
end