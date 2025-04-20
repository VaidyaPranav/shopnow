import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../../store/bagslise";
import { IoIosAddCircleOutline } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdHeartDislike } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { WishlistActions } from "../../store/Wishlist";
let Homeitem = ({ item }) => {
  let dispatch = useDispatch();
  let wishlistitems = useSelector((store) => store.wishlist);
  let elementwishlistfound = wishlistitems.indexOf(item.id) >= 0;
  console.log(item.id, elementwishlistfound);

  let bagitems = useSelector((store) => store.bag);
  let elementfound = bagitems.indexOf(item.id) >= 0;
  console.log(item.id, elementfound);

  let Handilingbtnadd = () => {
    dispatch(BagActions.addtobag(item.id));
    console.log(item);
  };
  let Handilingbtnremove = () => {
    dispatch(BagActions.dltfrombag(item.id));
  };

  let Handilingbtnaddwishlist = () => {
    dispatch(WishlistActions.addtowishlist(item.id));
  };
  let Handilingbtnremovewishlist = () => {
    dispatch(WishlistActions.dltfromwishlist(item.id));
  };
  return (
    <>
      <div className="item-container">
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

        {elementfound ? (
          <button
            class="btn btn-add-bag  btn-danger"
            onClick={Handilingbtnremove}
          >
            <TiDeleteOutline />
            remove from bag
          </button>
        ) : (
          <button class="btn-add-bag btn btn-primary" onClick={Handilingbtnadd}>
            <IoIosAddCircleOutline />
            Add to Bag
          </button>
        )}
        {elementwishlistfound ? (
          <button
            className=" btn btn-add-bag btn-outline-danger"
            onClick={Handilingbtnremovewishlist}
          >
            <IoMdHeartDislike />
            Dislike
          </button>
        ) : (
          <button
            className=" btn btn-add-bag btn-outline-primary"
            onClick={Handilingbtnaddwishlist}
          >
            <IoMdHeartEmpty />
            Like
          </button>
        )}
      </div>
    </>
  );
};
export default Homeitem;
