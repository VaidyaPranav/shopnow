import { useSelector } from "react-redux";
import Homeitem from "../components/Homeitem";
let Men = () => {
  let items = useSelector((store) => store.men);
  console.log(items);

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
export default Men;
