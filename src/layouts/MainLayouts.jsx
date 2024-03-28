import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
  return (
    <div className="px-3 max-w-[1140px] mx-auto">
      <header className="h-16 lg:px-6">
        <Nav />
      </header>
      <main className="lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayouts;
