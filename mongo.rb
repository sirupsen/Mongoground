require "sinatra"
require "erb"
require "models/user.rb"

configure do
  set :haml, {:format => :html5}
end

get "/" do
  @users = User.all
  haml :index, {:layout => true}
end

post "/" do
  @user = User.create(params)
end

get "/clear" do
  User.delete_all
end

