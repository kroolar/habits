Rails.application.routes.draw do
  root 'dashboard#index'

  resources :habits, only: :index
end
