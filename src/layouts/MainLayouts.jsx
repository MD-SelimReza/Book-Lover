import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
  return (
    <div className="px-3">
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
