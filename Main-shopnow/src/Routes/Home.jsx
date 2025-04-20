import { useSelector } from "react-redux";
import Homeitem from "../components/Homeitem";
let Home = () => {
  let items = useSelector((store) => store.items);
  console.log(items);
  /*let item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };*/
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <Homeitem key={item.id} item={item}></Homeitem>
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
