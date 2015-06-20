class SearchesController < ApplicationController

  def index
    @searches = Search.all
  end

  def new
    @search = Search.new
  end

  def create
    @search = Search.new(set_search)
    @search.save
    redirect_to root_path 
  end

  def show
  	@search = set_search
  end

   private 
    def set_search
      @search = Search.find(params[:id])
    end

end

  