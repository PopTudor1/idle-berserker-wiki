import { NavLink } from "react-router-dom";
import "./side-menu.css";

const data = [
  { link: "/introduction", label: "INTRODUCTION" },
  { link: "/arena", label: "ARENA" },
  { link: "/berserker-equipment", label: "BERSERKER EQUIPMENT" },
  { link: "/bosses", label: "BOSSES" },
  { link: "/calculators", label: "CALCULATORS" },
  { link: "/companions", label: "COMPANIONS" },
  { link: "/costumes", label: "COSTUMES" },
  { link: "/demon-powers", label: "DEMON POWERS" },
  { link: "/dungeons", label: "DUNGEONS" },
  { link: "/events", label: "EVENTS" },
  { link: "/farming", label: "FARMING" },
  { link: "/game-builds", label: "GAME BUILDS" },
  { link: "/guild", label: "GUILD" },
  { link: "/guild-battle", label: "GUILD BATTLE" },
  { link: "/monster-cards", label: "MONSTER CARDS" },
  { link: "/paragon", label: "PARAGON" },
  { link: "/pets", label: "PETS/CREATURES" },
  { link: "/resource-farming", label: "RESOURCE FARMING" },
  { link: "/soul-crystals", label: "SOUL GATE/CRYSTALS" },
  { link: "/stage-drops", label: "STAGE DROPS & ESSENCES" },
  { link: "/world-stones", label: "WORLD STONES" },
  { link: "/other-info", label: "OTHER INFO" },
];

export function SideMenu() {
  const links = data.map((item) => (
    <NavLink
      key={item.link}
      to={item.link}
      className={({ isActive }) => (isActive ? "link active-link" : "link")}
    >
      {item.label}
    </NavLink>
  ));

  return (
    <nav className="navbar">
      <div className="header">
        <span>Guides</span>
        <hr className="separator" />
      </div>
      {links}
    </nav>
  );
}
