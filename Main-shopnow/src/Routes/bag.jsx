import "../css/bag.css";
import Bagsummary from "../components/Bagsummary";
import Bagitem from "../components/Bagitem";
import { useSelector } from "react-redux";
let Bag = () => {
  let bagitems = useSelector((store) => store.bag);
  let items = useSelector((store) => store.items);
  let men = useSelector((store) => store.men);
  let women = useSelector((store) => store.women);
  let homeliving = useSelector((store) => store.homeliving);
  let kids = useSelector((store) => store.kids);
  let allitems = [...items, ...men, ...kids, ...homeliving, ...women];
  let finalitems = allitems.filter((item) => bagitems.includes(item.id));
  /*
  let finalitems = items.filter((item) => {
    let itemidx = bagitems.indexOf(item.id);
    return itemidx >= 0;
  });*/

  return (
    <>
      <main>
        <div class="new-bag-page">
          <div class="bag-items-container"></div>
          <div class="bag-summary"></div>
          {finalitems.map((item) => (
            <Bagitem item={item}></Bagitem>
          ))}

          <Bagsummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
