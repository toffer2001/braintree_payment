class Api::ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors }, status: :unprocessable_entity 
    end
  end

  def update
    product = Product.find(params[:id])
    if product.update(product_params)
      render json: product
    else
      render json: { errors: product.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    Product.find(params[:id]).destroy
    render json: { message: 'Product deleted' }
  end

  private

  def product_params
    params.require(:product).permit(:name, :price)
  end


end
