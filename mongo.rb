# Few comments because Ruby sort of comments itself with it's elegance

%w{
  sinatra
  erb
  models/user.rb
}.each {|lib| require lib} # Because DRY code, is awesome code

configure do
  set :haml, {:format => :html5} # Because HTML5 is what the cool kids use
end

get "/" do
  @users = User.all

  haml :index, {:layout => true}
end

post "/" do
  @user = User.create(params)
end

get "/user/:id" do
  @user = User.find_by_id(params[:id])

  haml :user, {:layout => true}
end

post "/user/:id" do
  @user = User.find_by_id(params[:id])
  @user.update_attributes(params)

  redirect "/user/" + params[:id]
end

get "/clear" do
  User.delete_all
end
