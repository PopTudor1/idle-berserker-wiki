import soulCrystalsPreview from "../../../assets/soul-crystals.png";

export default function SoulCrystalsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🌀 Soul Gate</h1>

        <p>
          Soul Gate is a battle mode where you fight against a clone of
          yourself. The difficulty increases with each Soul Gate you defeat.
        </p>

        <p>
          <strong>Abyssal Chasm</strong> is directly connected to Soul Gate — as
          you destroy more Soul Gates, the difficulty of Abyssal Chasm also
          increases.
        </p>

        <p>
          Use Soul Gate strategically. You want to make sure your Abyssal Chasm
          rewards <strong>increase</strong>, not decrease.
        </p>

        <p>
          Equip your <strong>Boss</strong> or <strong>PvP skill set</strong>{" "}
          when entering Soul Gate — and be sure to include the{" "}
          <strong>Immortality passive</strong> for best results.
        </p>
      </div>
      <div className="guide-container">
        <h1>💎 Soul Crystals</h1>

        <p>
          There are <strong>7 types</strong> of Soul Crystals in the game:
        </p>

        <ul>
          <li>Despair</li>
          <li>Anger</li>
          <li>Hatred</li>
          <li>Sorrow</li>
          <li>Fear</li>
          <li>Greed </li>
          <li>Sloth </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={soulCrystalsPreview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <p>
          All of these types use the same currency:{" "}
          <strong>Soul Crystal</strong>.
        </p>
      </div>
      <div className="guide-container">
        <h1>📊 Soul Crystal Cost Differences</h1>

        <h2>Cost Per Level</h2>
        <ul>
          <li>
            <strong>Despair</strong> – Increases by 10 per level
          </li>
          <li>
            <strong>Anger</strong> – Increases by 15 per level
          </li>
          <li>
            <strong>Hatred</strong> – Increases by 20 per level
          </li>
          <li>
            <strong>Sorrow</strong> – Increases by 25 per level
          </li>
          <li>
            <strong>Fear</strong> – Increases by 30 per level
          </li>
          <li>
            <strong>Greed</strong> – Increases by 35 per level
          </li>
          <li>
            <strong>Sloth</strong> – Increases by 40 per level
          </li>
        </ul>

        <p>
          The difference in cost between each Soul Crystal type is{" "}
          <strong>215</strong>.
        </p>

        <p>
          That means starting from <strong>Despair</strong>, each subsequent
          crystal (e.g., <strong>Anger</strong>, <strong>Hatred</strong>, etc.)
          will cost <strong>215 more</strong> per level than the previous one.
        </p>
      </div>
      <div className="guide-container">
        <h1>📈 Soul Crystal Stats</h1>
        <p>
          These stats remain consistent at every level for each Soul Crystal
          type:
        </p>
        <h2>Despair</h2>
        <ul>
          <li>ATK: +250</li>
          <li>Health: +250</li>
          <li>ATK %: +3%</li>
        </ul>
        <h2>Anger</h2>
        <ul>
          <li>ATK: +350</li>
          <li>Health: +350</li>
          <li>ATK %: +3%</li>
          <li>Health %: +3%</li>
        </ul>
        <h2>Hatred</h2>
        <ul>
          <li>ATK: +450</li>
          <li>Health: +450</li>
          <li>Celestial Damage: +50%</li>
          <li>Infernal Damage: +50%</li>
          <li>Nature Damage: +50%</li>
        </ul>
        <h2>Sorrow</h2>
        <ul>
          <li>ATK: +550</li>
          <li>Health: +550</li>
          <li>Amplified ATK: +5%</li>
          <li>Amplified Health: +5%</li>
        </ul>
        <h2>Fear</h2>
        <ul>
          <li>ATK: +650</li>
          <li>Health: +650</li>
          <li>Amplified Celestial Damage: +10%</li>
          <li>Amplified Infernal Damage: +10%</li>
          <li>Amplified Nature Damage: +10%</li>
        </ul>

        <h2>Greed</h2>
        <ul>
          <li>ATK: +750</li>
          <li>Health: +750</li>
          <li>
            Stage Monster Celestial Resistance: <em>+5% </em>
          </li>
          <li>
            Stage Monster Infernal Resistance: <em>+5% </em>
          </li>
          <li>
            Stage Monster Nature Resistance: <em>+5% </em>
          </li>
        </ul>
        <h2>Sloth</h2>
        <ul>
          <li>ATK: +850</li>
          <li>Health: +850</li>
          <li>
            Stage Monster Damage: <em>TBA</em>
          </li>
          <li>
            Critical Damage: <em>TBA</em>
          </li>
          <li>
            Decisive Strike Damage: <em>TBA</em>
          </li>
        </ul>
      </div>
    </div>
  );
}
