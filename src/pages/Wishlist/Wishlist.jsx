import ProductCard from "../../components/Card/ProductCard";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;

  return (
    <div className="product-display-section">
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
  );
};

export default Wishlist;
