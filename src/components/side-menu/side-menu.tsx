import { NavLink } from "react-router-dom";
import "./side-menu.css";

const guidesData = [
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

const playerData = [
  { link: "/traqaz", label: "traqaz" },
  { link: "/luffy", label: "Luffy" },
  { link: "/kale", label: "Kale" },
  { link: "/broly-black", label: "BROLYBLACK" },
  { link: "/pure-energy", label: "PureEnergy" },
  { link: "/contrite-ant", label: "ContriteAnt" },
  { link: "/deathxrder", label: "DEATHXRDER" },
  { link: "/disguise", label: "Disguise" },
  { link: "/charlie-47", label: "Charlie47" },
  { link: "/pouloulou", label: "pouloulou" },
  { link: "/pc-821", label: "Pc821" },
  { link: "/arch-devil", label: "ArchDevil" },
  { link: "/luke", label: "Luke" },
  { link: "/corgon", label: "Corgon" },
  { link: "/hanakilla", label: "hanakilla" },
];

export function SideMenu() {
  const guidesLinks = guidesData.map((item) => (
    <NavLink
      key={item.link}
      to={item.link}
      className={({ isActive }) => (isActive ? "link active-link" : "link")}
    >
      {item.label}
    </NavLink>
  ));

  const playerLinks = playerData.map((item) => (
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
      <div className="guides-section">
        <div className="header">
          <span>&#x25BC; Guides(7/22/2025) &#x25BC;</span>
          <hr className="separator" />
        </div>
        <div className="links-container">{guidesLinks}</div>
      </div>
      <div className="player-section">
        <hr className="separator" />
        <div className="header">
          <span>&#x25BC; Player Wisdom &#x25BC;</span>
          <hr className="separator" />
        </div>
        <div className="links-container">{playerLinks}</div>
      </div>
      <hr className="separator" />
    </nav>
  );
}
