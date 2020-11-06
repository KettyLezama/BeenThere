class Api::V1::PhotosController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    render json: Photo.all.where(shared: true)
  end

  def show
    render json: Photo.find(params[:id])
  end

  def create
    binding.pry
    new_photo = Photo.new(photo_params)
    new_photo.user_id = current_user.id

    if new_photo.save
      render json: new_photo
    else
      render json: {errors: new_photo.error.full.messages}
    end
  end
  
  private

  def photo_params
    params.require(:photo).permit(:file, :name, :location, :camera, :url, :shared, :date, :description)
  end
end