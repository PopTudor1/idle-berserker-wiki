import monsterCards1Preview from "../../assets/monster-cards-1.png";
import monsterCards2Preview from "../../assets/monster-cards-2.png";
import monsterCards3Preview from "../../assets/monster-cards-3.png";

export default function MonsterCardsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🃏 Monster Cards Guide</h1>

        <h2>🔓 Unlock Requirement</h2>
        <p>
          Monster Cards (MCs) become available after clearing{" "}
          <strong>Ultimate Stage 3-10</strong>. They're powerful tools to boost
          your performance against stage minions and bosses, especially when
          matched to specific areas like
          <em> Ancient Forest, Arctic Land</em>, and more.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={monsterCards1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>📦 How to Obtain</h2>
        <ul>
          <li>Shop, Guild Shop, Event Shop</li>
          <li>
            Unique MCs from the <strong>MCs Collection</strong>
          </li>
          <li>
            <strong>Source of Power – Stage 3</strong> (in Achievements)
          </li>
        </ul>
        <p>
          🔸 <strong>Tip:</strong> Prioritize buying Monster Cards from event
          shops — they’re harder to obtain through regular means. Other
          resources can be acquired more easily elsewhere.
        </p>

        <h3>⚙️ Function & Strategy</h3>
        <ul>
          <li>
            Create a <strong>dedicated set for each area</strong> (5 total
            sets).
          </li>
          <li>
            Also build a <strong>universal set</strong> using your strongest
            cards (for dungeons and bosses without area bonuses).
          </li>
          <li>
            SSR cards are universally strong —{" "}
            <strong>use them in every set</strong> if possible.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={monsterCards2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h3>📈 Ranking Up Cards</h3>
        <p>To increase card rank, combine lower-ranked cards step by step:</p>
        <ol>
          <li>Use scrolls to summon as many cards as possible.</li>
          <li>Combine D → C → B → A → S → SR → SSR.</li>
          <li>
            ⚠️ Once at <strong>SSR</strong>, only combine{" "}
            <strong>identical SSR cards</strong>! Mixing different ones is
            wasteful.
          </li>
          <li>
            Make sure you have enough cards for <strong>all 5 sets</strong>{" "}
            before mass-combining.
          </li>
        </ol>

        <p>
          🔥 <strong>Pro Tip:</strong> Area-matching boosts are very effective
          for bosses. Investing in MCs pays off significantly — don’t ignore
          them!
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={monsterCards3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
