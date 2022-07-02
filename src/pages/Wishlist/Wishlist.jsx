import ProductCard from "../../components/Card/ProductCard";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { useEffect } from "react";
import Header from "../../components/Header/Header";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;

  useEffect(() => {
    document.title = "Wishlist";
  }, []);

  return (
    <div>
      <Header />
      {wishlistState.itemTotal === 0 ? (
        <div className="flex-row flex-center P-l">
          <img src="empty-wishlist.png" alt="empty-wishlist" />
        </div>
      ) : (
        <div className="p-l">
          <h1 className="text-center text-xl font-extrabold line-height-lg">
            My Wishlist({wishlistState.itemTotal})
          </h1>
          <div className="product-card-container">
            {wishlist &&
              wishlist.map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} page="wishlistPage" />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
