import "../css/bag.css";
import Wishlistsummary from "../components/Wishlistsummary";
import Wishlistitem from "../components/Wishlistitems";
import EmptyWishlist from "../components/Emptywishlist";
import { useSelector } from "react-redux";
let Wishlist = () => {
  let bagitems = useSelector((store) => store.wishlist);
  let items = useSelector((store) => store.items);
  let men = useSelector((store) => store.men);
  let women = useSelector((store) => store.women);
  let kids = useSelector((store) => store.kids);
  let homeliving = useSelector((store) => store.homeliving);

  let allitems = [...items, ...men,...women,...kids,...homeliving];
  let finalitems = allitems.filter((item) => bagitems.includes(item.id));
  console.log(finalitems.length);

  return (
    <>
      <main>
        <div class="items-container"></div>
        <div class="bag-page">
          {finalitems.length === 0 ? (
            <EmptyWishlist />
          ) : (
            finalitems.map((item) => <Wishlistitem item={item}></Wishlistitem>)
          )}

          <Wishlistsummary />
        </div>
      </main>
    </>
  );
};
export default Wishlist;
