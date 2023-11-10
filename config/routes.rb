Rails.application.routes.draw do
  root 'dashboard#index'

  resources :habits, only: %i[index show]

  namespace :api do
    resources :habits, only: %i[index create show destroy]
  end
end
