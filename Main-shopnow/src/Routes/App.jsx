import "../css/bag.css";
import "../css/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Fetchingitems from "../components/fetchingitems";
import Fetchingmen from "../components/fetchingmen";
import Fetchingwomen from "../components/fetchingwomen";
import Fetchinghomeliving from "../components/fetchinghomeliving";
import Fetchingbueaty from "../components/fetchingbueaty";
import Fetchingkids from "../components/fetchingkids";
function App() {
  return (
    <>
      <Header></Header>
      <Fetchingitems></Fetchingitems>
      <Fetchingmen></Fetchingmen>
      <Fetchingkids></Fetchingkids>
      <Fetchinghomeliving></Fetchinghomeliving>
      <Fetchingbueaty></Fetchingbueaty>
      <Fetchingwomen></Fetchingwomen>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
