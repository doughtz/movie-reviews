require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select 'title', "Movie Review Site"
  end

  test "should get movies" do
    get :movies
    assert_response :success
    assert_select 'title', "Movies | Movie Review Site"
  end

  test "should get reviews" do
    get :reviews
    assert_response :success
    assert_select 'title', "Reviews | Movie Review Site"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select 'title', "About | Movie Review Site"
  end

end
