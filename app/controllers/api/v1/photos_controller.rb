class Api::V1::PhotosController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    collection_type = params[:type]

    if (collection_type == 'shared')
      photos = Photo.all.where(shared: true)
    elsif (collection_type == 'private')
      photos = Photo.all.where(user_id: current_user.id)
    end

    render json: { photoCollection: photos }, each_serializer: PhotoSerializer
  end

  def show
    render json: Photo.find(params[:id]), serializer: PhotoShowSerializer
  end

  def create
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
    params.require(:photo).permit(:name, :location, :camera, :url, :shared, :date, :description)
  end

end