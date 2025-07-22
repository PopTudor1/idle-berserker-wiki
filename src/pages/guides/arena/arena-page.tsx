import arena1Preview from "../../../assets/arena-1.png";
import arena2Preview from "../../../assets/arena-2.png";
import arena3Preview from "../../../assets/arena-3.png";

export default function ArenaPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Welcome to the Arena</h1>
        <p>
          Here, you will compete against other players in real time to achieve
          the highest ranking.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={arena1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Skillset</h2>
        <p>
          You can play around with the order of the main skills, they tend to be
          the same.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={arena2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Mastery and Equipment</h2>
        <ul>
          <li>Atk spd [Maxed]</li>
          <li>Skill dmg [Maxed]</li>
          <li>Crit Chance [Maxed]</li>
          <li>Crit Dmg [Maxed]</li>
          <li>Atk [All points invested after the above]</li>
        </ul>
        <p>
          Best SSR 4 set to use is <strong>Revenge</strong>
        </p>
        <p>Use comps that focus damage on a single target.</p>

        <h2>
          Best Items to get in Arena <small>(Ranked by priority)</small>
        </h2>
        <ol>
          <li>SSR Pieces</li>
          <li>SR Pieces</li>
          <li>Comp Token</li>
          <li>Others all are here</li>
        </ol>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={arena3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
