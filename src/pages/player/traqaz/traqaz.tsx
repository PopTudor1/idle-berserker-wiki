import traqaz1Preview from "../../../assets/traqaz-1.jpg";

export default function Traqaz() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🔑 Understanding Weapon Enhancement Basics</h1>

        <p>
          Weapon enhancement increases your <strong>attack stats</strong>{" "}
          drastically, which directly influences your speed of progression
          through <strong>stages</strong>, <strong>dungeons</strong>, and{" "}
          <strong>events</strong>. Enhancing weapons is{" "}
          <strong>resource-heavy</strong>, especially after level{" "}
          <strong>3000+</strong>, and becomes a long-term investment.
        </p>

        <ul>
          <li>
            Use <strong>event bonuses</strong>, <strong>daily buffs</strong>,
            and <strong>enhancement rate up events</strong> to minimize stone
            waste
          </li>
          <li>
            Save your <strong>shards</strong> to craft what you need most (
            <strong>stones</strong>, <strong>scrolls</strong>, or{" "}
            <strong>gold</strong>)
          </li>
          <li>
            <strong>Daily grind matters</strong>—mines, dungeons, and logins
          </li>
          <li>
            Don’t rush—getting to <strong>5600</strong> takes time, plan like a{" "}
            <strong>marathon</strong>, not a sprint
          </li>
        </ul>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={traqaz1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
