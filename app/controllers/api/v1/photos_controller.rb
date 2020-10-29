class Api::V1::PhotosController < ApiController
  def index
    render json: Photo.all.where(shared: true)
  end

  def show
    render json: Photo.find(params[:id])
  end
  
  def new
  end

  def create
  end
  
end