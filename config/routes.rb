Rails.application.routes.draw do
  root 'popcorn#index'
  match '*path' => 'popcorn#index', via: [:get, :post]
end
