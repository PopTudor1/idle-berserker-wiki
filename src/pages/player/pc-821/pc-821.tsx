import pc8211Preview from "../../../assets/pc-821-1.jpg";
import pc8212Preview from "../../../assets/pc-821-2.jpg";
import pc8213Preview from "../../../assets/pc-821-3.jpg";

export default function Pc821() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h2>🛡️ Preparing Gear Sets for Astia</h2>
        <p>
          It's a good idea to prepare <strong>two sets</strong> of{" "}
          <strong>Helmet</strong>, <strong>Armor</strong>, and{" "}
          <strong>Earrings</strong> for Astia.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pc8211Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <ul>
          <li>
            <strong>Bossing Set:</strong> Focus on <strong>Attack</strong> and{" "}
            <strong>Damage</strong>, ideal for stage bosses, guild bosses, and
            other tough fights.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={pc8212Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Farming Set:</strong> Designed mainly for{" "}
            <strong>EXP farming</strong> to level up faster.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={pc8213Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
