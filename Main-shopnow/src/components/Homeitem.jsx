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
      <style>
        {`
          .item-container {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .item-container:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          .item-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 12px;
            transition: transform 0.3s ease;
          }
          .item-container:hover .item-image {
            transform: scale(1.05);
          }
          .company-name {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
          }
          .item-name {
            font-size: 1rem;
            margin-bottom: 8px;
            color: #555;
          }
          .price {
            margin-bottom: 12px;
          }
          .current-price {
            font-size: 1.2rem;
            font-weight: bold;
            color: #28a745;
          }
          .original-price {
            font-size: 0.9rem;
            text-decoration: line-through;
            color: #888;
            margin-left: 8px;
          }
          .discount {
            font-size: 0.9rem;
            color: #dc3545;
            margin-left: 8px;
          }
          .btn {
            margin: 8px 4px;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .btn:hover {
            transform: scale(1.05);
          }
          .btn-add-bag {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
        `}
      </style>
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
            className="btn btn-add-bag btn-danger"
            onClick={Handilingbtnremove}
          >
            <TiDeleteOutline />
            Remove from Bag
          </button>
        ) : (
          <button className="btn-add-bag btn btn-primary" onClick={Handilingbtnadd}>
            <IoIosAddCircleOutline />
            Add to Bag
          </button>
        )}
        {elementwishlistfound ? (
          <button
            className="btn btn-add-bag btn-outline-danger"
            onClick={Handilingbtnremovewishlist}
          >
            <IoMdHeartDislike />
            Dislike
          </button>
        ) : (
          <button
            className="btn btn-add-bag btn-outline-primary"
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
