import { IoMdHeartDislike } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { WishlistActions } from "../../store/Wishlist";

let Wishlistitem = ({ item }) => {
  let dispatch = useDispatch();
  let Handlecross = () => {
    console.log(" delete");
    dispatch(WishlistActions.dltfromwishlist(item.id));
  };
  return (
    <>
      <div className="new-item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div></div>

        {"4.5 "}
        <FaStar />
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        <button
          className=" btn btn-add-bag btn-outline-danger"
          onClick={Handlecross}
        >
          <IoMdHeartDislike />
          Dislike
        </button>
      </div>
    </>
  );
};
export default Wishlistitem;
