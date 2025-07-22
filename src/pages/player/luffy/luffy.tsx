import luffy1Preview from "../../../assets/luffy-1.jpg";
import luffy2Preview from "../../../assets/luffy-2.jpg";
import luffy3Preview from "../../../assets/luffy-3.jpg";

export default function Luffy() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Awakening Ability Presets</h1>

        <p>
          It’s recommended to maintain <strong>3 presets</strong> of Awakening
          Abilities to optimize your performance in different scenarios:
        </p>

        <ul>
          <li>
            <strong>Item Drop Rate</strong> – For <strong>Farming</strong>.
            Maximize your loot gain with SSR IDR rolls.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={luffy1Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Attack</strong> – Use for{" "}
            <strong>everything other than farming</strong>. Ideal for bossing,
            pushing stages, and general damage output.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={luffy2Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Health</strong> – For{" "}
            <strong>survival stages or high-damage areas</strong>. Also
            recommended when you’ve transitioned to an{" "}
            <strong>ABOH build</strong>.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={luffy3Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
