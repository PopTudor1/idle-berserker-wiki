import kale1Preview from "../../../assets/kale-1.png";

export default function Kale() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🎯 Completion Milestones & World Stones</h1>

        <h2>Why Level 500 Matters</h2>
        <p>
          It’s a great idea to <strong>complete everything to level 500</strong>{" "}
          because:
        </p>
        <ul>
          <li>
            <strong>SR Pet</strong> is rewarded at level <strong>497</strong>
          </li>
          <li>
            <strong>SSR Pet</strong> is rewarded at level <strong>500</strong>
          </li>
        </ul>

        <h2>Using the Right World Stones</h2>
        <p>
          When you’re pushing through tough content, make sure to equip the{" "}
          <strong>correct World Stones</strong> to give you the stat bonuses
          needed to <strong>defeat tougher enemies</strong>.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={kale1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
