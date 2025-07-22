import bosses1Preview from "../../assets/bosses-1.png";
import bosses2Preview from "../../assets/bosses-2.png";

export default function BossesPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>👑 What is Considered a Boss?</h1>

        <p>
          These content types are classified as <strong>Boss Fights</strong> and
          are affected by Boss masteries and setups:
        </p>

        <ul>
          <li>🐉 Dragon's Realm</li>
          <li>🏺 Ancient Ruins</li>
          <li>🛡️ Black Knight's Territory</li>
          <li>🌲 Devastated Forest</li>
          <li>🚪 Stage Bosses</li>
          <li>🏰 Guild Boss</li>
          <li>🧠 Soul Gate</li>
        </ul>

        <p>
          ❌ <strong>Dimension Rift Bosses are NOT considered bosses</strong>{" "}
          for mastery purposes. Do <em>not</em> use Boss masteries there!
        </p>

        <h2>⚔️ Bossing Tips</h2>

        <ul>
          <li>
            💡 The <strong>Survival passive</strong> only works if you're using{" "}
            <strong>CC (Crowd Control) skills</strong> — these apply debuffs to
            enemies.
          </li>
          <li>
            ⚙️ Keep <strong>Auto Skill mode OFF</strong> for manual skill
            control.
          </li>
          <li>
            🕹️ Tap all skills in your preferred order as soon as battle begins.
          </li>
          <li>
            ⚡ <strong>Activate all skills before Hacon triggers</strong> to
            ensure your damage remains consistent throughout the fight.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={bosses1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>💀 SSR Evil Spirits Set – Bossing Setup</h1>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={bosses2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>📘 Mastery (in order):</h2>
        <ul>
          <li>
            ⚡ <strong>Attack Speed</strong> (Maxed)
          </li>
          <li>
            👑 <strong>Boss Damage</strong> (Maxed)
          </li>
          <li>
            🔥 <strong>Skill Damage</strong> (Maxed)
          </li>
          <li>
            🎯 <strong>Crit Chance</strong> (Maxed)
          </li>
          <li>
            💥 <strong>Crit Damage</strong> (Maxed)
          </li>
          <li>
            🗡️ <strong>Attack</strong> – All remaining points go here
          </li>
        </ul>

        <h3>🧩 SSR 4-Set Recommendation for Bossing:</h3>
        <ul>
          <li>
            🔥 <strong>Wrath</strong>
          </li>
          <li>
            💀 <strong>Evil Spirits</strong>
          </li>
        </ul>

        <h3>🛠️ Equipment Ability Focus (Pick One):</h3>
        <ul>
          <li>🎯 Crit Chance</li>
          <li>⚡ Attack Speed</li>
          <li>⏱️ Cooldown Reduction</li>
        </ul>

        <p>
          <strong>❗Important:</strong> Use only <em>one</em> of the above
          equipment ability focuses. For example, if you're going with Crit
          Chance, then go full Crit Chance. Mixing them will result in poor
          performance.
        </p>
      </div>
    </div>
  );
}
