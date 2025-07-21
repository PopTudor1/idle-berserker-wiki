import { Outlet } from "react-router-dom";
import { SideMenu } from "./components/side-menu/side-menu";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">IDLE BERSERKER WIKI</h1>
      <span className="wiki-madeBy">
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan server )
      </span>
      <div className="homepage-content">
        <SideMenu />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
