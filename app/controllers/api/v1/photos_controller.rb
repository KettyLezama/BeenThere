class Api::V1::PhotosController < ApiController
  def index
  end

  def show
    render json: Photo.find(params[:id])
  end
  
  def new
  end

  def create
  end
  
end