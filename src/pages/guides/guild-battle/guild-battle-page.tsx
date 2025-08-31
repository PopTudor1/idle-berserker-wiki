import guildBattleViewerPreview from ".././../../assets/guild-battle-viewer.png";

export default function GuildBattlePage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>⚔️ Guild Battles Tips ⚔️</h1>

        <ul>
          <li>Everyone has the same base power in Guild Battles.</li>
          <li>
            Power increases by clearing stages and upgrading{" "}
            <strong>Relics</strong> (found under <em>Guild Buff</em>).
          </li>
          <li>Relics are automatically added as your guild completes nodes.</li>
          <li>
            There is <strong>no separate skill preset</strong> for Guild Battles
            — the current stage preset will be used.
          </li>
        </ul>

        <h2>Guild Battle Viewer</h2>
        <p>
          Try it here:{" "}
          <a
            href="https://https://guild-battle-viewer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://guild-battle-viewer.vercel.app/
          </a>
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guildBattleViewerPreview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>📜 Scrolls</h2>
        <ul>
          <li>
            Maximum scroll limit: <strong>100</strong>
          </li>
          <li>
            1 scroll restores every <strong>10 minutes</strong>
          </li>
          <li>
            Leaving a battle returns <strong>half</strong> the scrolls used
            (e.g. if you use 8 scrolls and exit before dying, you regain 4).
          </li>
        </ul>

        <h2>🗺️ Areas</h2>
        <ul>
          <li>
            There are <strong>5 Areas</strong>
          </li>
          <li>
            Each area has <strong>90 nodes</strong> in a{" "}
            <strong>10x9 grid</strong>
          </li>
        </ul>

        <h2>🎯 Node Difficulties</h2>
        <ul>
          <li>
            <span style={{ color: "#00ff00" }}>Green</span> – consumes{" "}
            <strong>6 scrolls</strong>
          </li>
          <li>
            <span style={{ color: "#ff4d4d" }}>Red</span> – consumes{" "}
            <strong>8 scrolls</strong>
          </li>
          <li>
            <span style={{ color: "#bf40bf" }}>Purple</span> – consumes{" "}
            <strong>10 scrolls</strong>
          </li>
          <li>
            <strong>Bosses</strong> – consume <strong>8 scrolls</strong>
          </li>
        </ul>

        <h2>🧩 Types of Nodes</h2>
        <ul>
          <li>
            <strong>Co-op Bosses:</strong> No time limit. You fight together
            with your guild. Damage accumulates until the boss is defeated.
            <em>
              Skip these early in the season — scroll efficiency is poor early
              on.
            </em>
          </li>
          <li>
            <strong>Monster Invasion:</strong> Kill monsters within 60 seconds.
            <em>Great for early game progress — start here!</em>
          </li>
          <li>
            <strong>Elemental Boss:</strong> Defeat the boss (one element)
            within 60 seconds.
            <em>Best avoided early season unless well-prepared.</em>
          </li>
          <li>
            <strong>Battle Ground:</strong> Defeat the boss in 60 seconds. These
            nodes have flags and can be overtaken by other guilds{" "}
            <strong>5 minutes after capture</strong>.
          </li>
        </ul>
      </div>
      <div className="guide-container">
        <h2>🧬 Recommended Comps for Guild Battles</h2>

        <ol>
          <li>
            <strong>1st: Valder</strong> – Great opener for consistent
            performance.
          </li>
          <li>
            <strong>2nd: Hacon</strong> – Reliable pick with solid single-target
            output.
          </li>
          <li>
            <strong>3rd: Targon</strong> or any strong single-target damage
            comp. <br />
            <em>
              For non-boss nodes, use an AOE-focused comp or Astia (for
              survivability) in slot 3 or 4.
            </em>
          </li>
          <li>
            <strong>4th: Olga</strong> – Ensure your stones and pets match to
            optimize this comp’s performance.
          </li>
        </ol>
      </div>
    </div>
  );
}
