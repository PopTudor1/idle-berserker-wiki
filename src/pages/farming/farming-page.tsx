import farming1Preview from "../../assets/farming-1.png";
import farming2Preview from "../../assets/farming-2.png";
import farming3Preview from "../../assets/farming-3.png";
import farming4Preview from "../../assets/farming-4.png";

export default function FarmingPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🌾 Farming Tips</h1>
        <ul>
          <li>
            Leave the game in <strong>power saving mode</strong> 😊
          </li>
          <li>
            Farm in an area where you can <strong>1-shot minions</strong>
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={farming1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Mastery</h1>
        <ul>
          <li>Atk spd [Maxed]</li>
          <li>Exp rate [Maxed]</li>
          <li>Gold rate [Maxed]</li>
          <li>Skill dmg [Maxed]</li>
          <li>Crit Chance [Maxed]</li>
          <li>Crit Dmg [Maxed]</li>
          <li>Atk [All points invested after the above]</li>
        </ul>

        <h2>Equipment For Farming</h2>
        <p>
          If your necklace is SR, use a necklace that is one star below your
          current necklace.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={farming2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          Use this strategy until you get the 4-set Slaughter, which gives an
          IDR boost, then put all IDR ability on that set.
        </p>

        <h3>SSR 4 Set for Farming</h3>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={farming3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>Slaughter with all IDR</p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={farming4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
