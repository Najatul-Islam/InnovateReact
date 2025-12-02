
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <>
      <Header />

      {/* All pages (Home, About) will load here */}
      <Outlet />
      
      <Footer/>
    </>
  );
};

export default RootLayouts;
