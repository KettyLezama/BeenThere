class Api::V1::PhotosController < ApiController
  def index
    shared = Photo.all.where(shared: true)
    personal = Photo.all.where(user_id: current_user.id)
    render json: { sharedPhotos: shared, personalPhotos: personal }, each_serializer: PhotoSerializer
  end

  def show
    render json: Photo.find(params[:id]), serializer: PhotoShowSerializer
  end
  
  def new
  end

  def create
  end

end