class Api::V1::PhotosController < ApiController
  def index
    render json: Photo.all.where(shared: true)
  end

  def show
    render json: Photo.find(params[:id])
  end

  def create
    new_photo = Photo.new(photo_params)
    if new_photo.save
      render json: new_photo
    else
      render json: {errors: new_photo.error.full.messages}
    end
  end
  
  private

  def photo_params
    params.require(:photo).permit(:location, :url, :share, :date)
  end
end