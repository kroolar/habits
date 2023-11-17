Rails.application.routes.draw do
  root 'dashboard#index'

  resources :habits, only: %i[index show]

  namespace :api do
    resources :habits, only: %i[index update create show destroy]
    resources :stats, only: :create
  end
end
