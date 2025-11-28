
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <>
      <Header />

      {/* All pages (Home, About) will load here */}
      <Outlet />
    </>
  );
};

export default RootLayouts;
