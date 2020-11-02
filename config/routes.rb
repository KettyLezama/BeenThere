Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  # get 'photos', to: 'homes#index'
  get 'photos/shared/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :photos, only: [:index, :show, :new, :create]
    end
  end
end
