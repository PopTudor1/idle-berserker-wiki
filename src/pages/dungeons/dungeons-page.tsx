export default function DungeonsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🏯 Dungeons 🏯</h1>
        <h2>🧠 Important Dungeon Tips to Keep in Mind:</h2>
        <ul>
          <li>
            ❤️ <strong>Invest in Health:</strong> Once you reach the end of S
            Awakening or start SR Awakening, enemies start doing massive damage.
            Before this, health isn't necessary—
            <em>don’t invest gold into it early</em>.
          </li>
          <li>
            💰 <strong>Gold Source Shift:</strong> Early game, Goblin Treasure
            Storage gives most of your gold. Later, high-level stage farming
            gives way more—<em>don’t waste request slots on goblin keys</em>.
          </li>
          <li>
            🔑 <strong>Save Your Keys:</strong>
            <ul>
              <li>
                <strong>Adamant Mine Keys:</strong> Only use when pushing a new
                floor or immediately after obtaining an SSR you plan to level.
                Even then, <em>it's usually better to save</em>.
              </li>
              <li>
                <strong>Dragon Keys:</strong> Use until you’ve maxed core
                passives like <em>Attack</em>, <em>Berserk Attack</em>, and{" "}
                <em>Boss Damage</em>. After that, stop—new updates will boost
                your attack further anyway.
              </li>
              <li>
                <strong>Ancient Ruins Keys:</strong> Save until you’re ready to
                push. Sweeping is fine once you’re happy with the rune return
                rate.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>🏰 Tower Of Trials</h1>
        <p>
          Every tenth level rewards <strong>30,000 Diamonds</strong>. With
          rewards between those levels, it adds up to approximately{" "}
          <strong>39,000 Diamonds</strong> plus many other rewards per 9 floors.
        </p>

        <h2>📜 Important Floors in Dimension Rifts</h2>

        <h3>🍖 SR Souls (used as food for SSR Pets)</h3>
        <ul>
          <li>49</li>
          <li>69</li>
          <li>89</li>
          <li>
            Every 20th level starting from 109: <code>109, 129, 149, ...</code>
          </li>
        </ul>

        <h3>🐾 SR Pets</h3>
        <ul>
          <li>59</li>
          <li>79</li>
          <li>99</li>
          <li>
            Every 10th level starting from 107: <code>107, 117, 127, ...</code>
          </li>
        </ul>

        <h3>🐉 SSR Pets</h3>
        <ul>
          <li>100</li>
          <li>150</li>
          <li>200</li>
          <li>250</li>
          <li>... and every 50 floors after</li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>🌀 Skill Builds for Dungeons</h1>

        <p>
          <strong>Key:</strong>
          <br />
          <strong>No Boss:</strong> Use <em>Bossing skills</em> (see ⁠
          <code>BOSSES tab</code>), but avoid Boss Damage.
          <br />
          → Stats: Attack Speed, Amp Attack (if lvl 800+), Crit Chance, Crit
          Damage, rest in Attack
          <br />
          <strong>Boss:</strong> Use <em>Bossing skills</em> (see ⁠
          <code>BOSSES tab</code>)<br />
          → Stats: Boss Damage, Attack Speed, Amp Attack (if lvl 800+), Crit
          Chance, Crit Damage, rest in Attack
          <br />
          <strong>Farm:</strong> Use <em>Farming skills</em> (see ⁠
          <code>FARMING tab</code>)<br />
          → Stats: Attack Speed, Amp Attack (if lvl 800+), Crit Chance, Crit
          Damage, rest in Attack
          <br />
          <strong>HP-Based Farm:</strong> Use <em>Farming skills</em>
          <br />→ Stats: Attack Speed, Amp Health (if lvl 800+), rest in Health
        </p>

        <h2>📋 Dungeon Skill Build Summary</h2>
        <ul>
          <li>
            💰 <strong>Goblin Gold Dungeon</strong> – <em>No Boss</em>
          </li>
          <li>
            ⛏️ <strong>Adamant Mine</strong> – <em>No Boss</em>
          </li>
          <li>
            🏯 <strong>Tower of Trials</strong> – <em>No Boss</em>
          </li>
          <li>
            🐉 <strong>Dragon’s Realm</strong> – <em>Boss</em>
          </li>
          <li>
            🏺 <strong>Ancient Ruins</strong> – <em>Boss</em>
          </li>
          <li>
            🗓️ <strong>Daily Dungeon</strong> – <em>No Boss</em>
          </li>
          <li>
            🌌 <strong>Dimension Rift</strong> – <em>No Boss</em>
          </li>
          <li>
            ⚔️ <strong>Black Knight</strong> – <em>Boss</em>
          </li>
          <li>
            🌲 <strong>Devastated Forest</strong> – <em>Boss</em>
          </li>
          <li>
            🕳️ <strong>Abyssal Chasm</strong> – <em>HP-Based Farm</em>
          </li>
        </ul>
      </div>
    </div>
  );
}
