import { Outlet } from "react-router-dom";
import { SideMenu } from "./components/side-menu/side-menu";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">IDLE BERSERKER WIKI</h1>
      <span className="wiki-madeBy">
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan US server )
      </span>
      <div className="homepage-content">
        <SideMenu />
        <div className="outlet-section">
          <div className="outlet-container">
            <Outlet />
          </div>
          {/* <div className="right-side">
            <div className="recruit-container">
              <h2>⚔️ Join KNIGHTSXORDER – Trakan US Server! ⚔️</h2>
              <span>
                We’re an active, supportive guild looking for committed players!
              </span>
              <ul>
                <li>✅ Daily Attendance</li>
                <li>✅ Guild Missions & Conquest</li>
                <li>
                  💪 Recommended Awakening: <strong>S+</strong>
                </li>
                <li>
                  🕒 Inactivity = Kick (6 days with Discord, 3 days no Discord)
                </li>
              </ul>
              <span>
                Join us, contribute, grow stronger—and enjoy the game with a
                great team!
              </span>
              <p>
                <strong>Search "KNIGHTSXORDER" in-game to apply!</strong>
              </p>
            </div>
            <div className="frame-container">
              <iframe
                className="youtube-frame"
                src="https://www.youtube.com/embed/-w2_Gwc_1gk?si=gAAzGG0nwZdPjl4v"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
