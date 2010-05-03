require "mongo_mapper"

MongoMapper.connection = Mongo::Connection.new
MongoMapper.database = 'mydb'

class User
  include MongoMapper::Document

  key :username, String, :required => true
  key :age, Integer
end
