require "sinatra"
require "erb"
require "models/user.rb"

get "/" do
  @users = User.all
  erb :index, {:layout => true}
end

post "/" do
  @user = User.create(params)
end

get "/clear" do
  User.delete_all
end

