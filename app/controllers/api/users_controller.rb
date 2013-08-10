class Api::UsersController < ActionController::Base
  protect_from_forgery

  def index
      users = User.order('name ASC').limit(10)

      render :json=> {:users=>users}
  end

  def create
      user = User.new params[:user]

      if user.save
        render :json=>{:success=>true}
      else
        render :json=>{:success=>false}
      end
  end
end
