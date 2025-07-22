import paragon1Preview from "../../assets/paragon-1.png";
import paragon2Preview from "../../assets/paragon-2.png";

export default function ParagonPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🏆 Paragon Guide (Post Level 5000)</h1>

        <p>
          🎉 <strong>Congratulations!</strong> You've reached{" "}
          <strong>Level 5000</strong> — from here on, everything changes.
        </p>

        <ul>
          <li>
            💡 <strong>100% XP Rate</strong> ={" "}
            <strong>1% Paragon XP Rate</strong>
          </li>
          <li>
            💠 You gain <strong>15 points</strong> per Paragon level
          </li>
          <li>
            🐾 <strong>Level-giving pets</strong> do <strong>NOT</strong> work
            during Paragon leveling
          </li>
          <li>
            🎲 Paragon XP is variable — some runs give a huge boost, others may
            give very little
          </li>
          <li>
            ✅ Don't forget to <strong>activate your Paragon</strong> once
            unlocked!
          </li>
        </ul>

        <h2>🔀 Types of Paragons</h2>
        <p>
          There are <strong>5 types</strong> of Paragons. It's highly
          recommended to build a set for each one:
        </p>

        <ul>
          <li>
            <strong>Slayer</strong> – Damage + Stage Push
            <br />
            🔹 Best for <em>Glass Cannon</em> builds
          </li>
          <li>
            <strong>Immortal</strong> – Survival + Push
            <br />
            🔹 Use for <em>ABOH (Attack Based On HP)</em> builds
          </li>
          <li>
            <strong>Plunder</strong> – Optimized for <em>Farming</em>
          </li>
          <li>
            <strong>Transcendent</strong> – Best for <em>Arena</em> (PvP)
          </li>
          <li>
            <strong>Pioneer</strong> – Use in <em>Dungeons</em> or bosses with
            multiple HP bars (like Raid Bosses)
            <br />
            🔸 Note: Not recommended for <strong>Abyss</strong> due to HP-based
            farming mechanics
          </li>
        </ul>

        <p>
          🧠 Strategize and build your Paragon loadouts based on your current
          content goals!
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={paragon1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>📘 Paragon Mastery Tips</h1>

        <p>
          Your Paragon Mastery setup significantly influences your power
          scaling. Here are some essential tips to optimize it:
        </p>

        <ul>
          <li>
            🔥 Prioritize investing in <strong>Attack %</strong> and{" "}
            <strong>Mastery Attack</strong> under the <strong>Slayer</strong>{" "}
            tree — these typically offer the biggest power gains.
          </li>
          <li>
            📈 After assigning points,{" "}
            <strong>check your power increase</strong>. If the boost is
            significant, continue leveling that mastery.
          </li>
          <li>
            🌀 Drop <strong>1 point into Pioneer</strong> early — it grants a{" "}
            <strong>5.0% Cooldown Reduction</strong> across all classes, which
            is an excellent universal bonus.
          </li>
        </ul>

        <p>
          🔎 Monitor your build progression and reallocate as necessary for
          optimal performance!
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={paragon2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
