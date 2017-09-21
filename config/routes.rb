Rails.application.routes.draw do
  
  root 'home#home'
  get '/movies', to: "home#movies"
  get '/reviews', to: 'home#reviews'
  get '/about', to: 'home#about'

end
