import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
  return (
    <div>
      <header className="h-16 px-6 pt-2">
        <Nav />
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayouts;
