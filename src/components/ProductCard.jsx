import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";

const ProductCard = ({ productDetail }) => {
  const book = productDetail.volumeInfo;
  const dispatch = useDispatch();
  const [addingToCart, setAddingToCart] = useState(false);

  const handleCart = async () => {
    try {
      setAddingToCart(true);
      setTimeout(() => {
        dispatch(addToCart(productDetail));
        setAddingToCart(false);
      }, 1000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setAddingToCart(false);
    }
  };

  const truncateText = (text) => {
    if (text?.length > 20) {
      return text.slice(0, 20) + "...";
    }
    return text;
  };

  return (
    <div className="card sm:w-96 bg-base-100 min-h-full max-h-[60vh] shadow-2xl p-2 border border-gray-800">
      <figure>
        <img
          height={180}
          width={140}
          src={book?.imageLinks?.thumbnail}
          alt="book-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {truncateText(book.title)} 
        </h2>

        <p className="text-white text-sm">
          Publisher: {truncateText(book?.publisher)} 
        </p>
        <p className="text-white text-sm">
          Author: {book?.authors && truncateText(book.authors.join(", "))}
        </p>
        <div className="card-actions justify-between font-semibold">
          <div className="md:text-xl text-lg flex">
            {productDetail?.saleInfo?.listPrice?.amount
              ? `₹${productDetail?.saleInfo?.listPrice?.amount}`
              : "Ebook"}
          </div>
          <button
            onClick={handleCart}
            disabled={addingToCart} 
            className={`bg-orange-500 p-2 text-white rounded-xl hover:bg-orange-600 ${
              addingToCart ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {addingToCart ? "Adding..." : "Add to Cart"}{" "}
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
