Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get 'photos', to: 'homes#index'
  get 'photos/collection/:type', to: 'homes#index'
  get 'api/v1/photos/collection/:type', to: 'api/v1/photos#index', as: 'api_v1_collection_photos'
  # get 'photos/shared/:id', to: 'homes#index'
  get 'new', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :photos, only: [:index, :show, :new, :create]
    end
  end
end
