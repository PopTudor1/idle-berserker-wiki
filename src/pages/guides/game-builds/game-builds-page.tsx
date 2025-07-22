import gameBuilds1Preview from "../../../assets/game-builds-1.png";
import gameBuilds2Preview from "../../../assets/game-builds-2.png";
import gameBuilds3Preview from "../../../assets/game-builds-3.png";
import gameBuilds4Preview from "../../../assets/game-builds-4.png";

export default function GameBuildsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Glass Cannon Build</h1>
        <p>Use this build until you reach ABOH or just do what you want.</p>
        <p>
          <strong>Main focus:</strong> Attack
        </p>

        <h3>SSR Set</h3>
        <ul>
          <li>Evil Spirits Set 4 (with Immortality passive)</li>
        </ul>

        <h3>If you don't have SSR Set 4</h3>
        <ul>
          <li>Slaughter Set 2 or Wrath Set 2</li>
          <li>Immortality passive skill</li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={gameBuilds1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={gameBuilds2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <h2>Mastery</h2>
        <ul>
          <li>Skill dmg</li>
          <li>Boss dmg</li>
          <li>Crit chance</li>
          <li>Crit dmg</li>
          <li>Atk spd</li>
          <li>Atk [Remaining points all on atk]</li>
        </ul>

        <h2>Comps</h2>
        <p>
          Valder/Hanayama, Hacon, Any comp with dmg boost or focuses on a single
          target & Astia/Biscuit Oliver
        </p>
        <p>
          Try to reach above 100%+ with Hacon's skill{" "}
          <em>(His skill carries the whole fight)</em>
        </p>

        <h2>Skillset</h2>
        <p>Use all ur skills at once before Hacon activates.</p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={gameBuilds3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Paragon [Slayer]</h2>
        <ul>
          <li>Focus on Atk n Amp atk first</li>
          <li>
            Invest a point in Skill Cooldown, grants 5.0% skill cd [Pioneer]
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={gameBuilds4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Costumes</h2>
        <p>All stats focus on Stage Boss - Atk</p>
        <p>U can go for SSR Atk or SR atk</p>

        <h2>World Stone n Pets</h2>
        <ul>
          <li>Stone set of ur preferred element [Focus Atk]</li>
          <li>
            Pets based on ur element or use the Strongest pets{" "}
            <span role="img" aria-label="shock">
              🪄
            </span>
          </li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>ABOH [ATK BASED ON HP] BUILD SOURCE</h1>

        <h2>Weapon Equipment</h2>
        <p>2-set bonus for evil spirits : 3%</p>

        <h2>Companion</h2>
        <ul>
          <li>Cnút tag : 4.8%</li>
          <li>Cnút active skill with weapon : 8% for 5 seconds</li>
          <li>
            Equipment : 36-72% (possible to roll 6% ABOH on SSR comp gear)
          </li>
        </ul>

        <h2>Costumes (minimum level for ABOH)</h2>
        <ul>
          <li>Level 60 Ophelia : 16% (can no longer be obtained)</li>
          <li>Level 30 Heavy Metal : 8%</li>
          <li>Level 30 Prisoner Baki : 8% (can no longer be obtained)</li>
          <li>Level 10 Rudolf : 4%</li>
          <li>
            Level 0 Black Knight Hyun Cha : 2% (can no longer be obtained)
          </li>
          <li>Level 10 Valkyrie : 4%</li>
          <li>Level 30 Deep sea crew : 8%</li>
          <li>Level 0 Hier to a Folktale : 2%</li>
        </ul>

        <h2>Costumes (max level for ABOH)</h2>
        <ul>
          <li>Level 100 Ophelia : 80% (can no longer be obtained)</li>
          <li>Level 60 Heavy Metal : 32%</li>
          <li>Level 60 Prisoner Baki : 32% (can no longer be obtained)</li>
          <li>Level 30 Rudolf : 12%</li>
          <li>
            Level 5 Black Knight Hyun Cha : 3% (can no longer be obtained)
          </li>
          <li>Level 30 Valkyrie : 12%</li>
          <li>Level 60 Deep sea crew : 32%</li>
        </ul>

        <h3>Costume Total Ascension Level</h3>
        <ul>
          <li>First ABOH tier : 2%</li>
          <li>Second ABOH tier : 2%</li>
        </ul>

        <h2>Immortal Paragon Main Skill</h2>
        <ul>
          <li>Level 1 : 5% while in berserk mode</li>
          <li>Level 2 : 10% while in berserk mode</li>
          <li>Level 3 : 15% while in berserk mode</li>
          <li>Level 4 : 20% while in berserk mode</li>
        </ul>

        <h2>Immortal Paragon Attack Based On HP Node</h2>
        <ul>
          <li>Level 10 : 8%</li>
          <li>Level 20 : 24%</li>
          <li>Level 30 : 48%</li>
          <li>Level 40 : 80%</li>
        </ul>

        <h2>Weapon Total Enhancement Steps</h2>
        <ul>
          <li>Necklace : 11%</li>
          <li>Weapons : 3%</li>
          <li>Rings : 3%</li>
          <li>Gauntlet : 3%</li>
        </ul>

        <h2>Creatures</h2>
        <ul>
          <li>Samedu : 1%</li>
          <li>Muscle Monster : 5%</li>
        </ul>

        <h2>Demon Power Enchantment Steps</h2>
        <p>Aboh : 20%</p>

        <h2>Final note</h2>
        <p>
          If you are at 120% ABOH you are ready to swap to the best end game
          build.
        </p>
      </div>
    </div>
  );
}
