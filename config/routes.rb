Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'popcorn#index'
  match '*path' => 'popcorn#index', via: [:get, :post]
end
