class User < ActiveRecord::Base
  attr_accessible :email, :image, :name
end
